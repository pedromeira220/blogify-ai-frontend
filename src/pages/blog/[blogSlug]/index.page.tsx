import { BlogPostCard } from '@/components/BlogPostCard'
import { Text } from '@/components/Text'
import { BlogContext } from '@/contexts/blog.context'
import { Publication } from '@/models/publications.model'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Loading from 'react-loading'
import { useQuery } from 'react-query'
import { publicationsService } from '../../services/publications.service'
import { Heading } from './components/Heading'

export default function Blog() {
  const { blogData, setBlogSlug, blogPrimaryColor, blogRequestStatus } =
    useContext(BlogContext)

  const router = useRouter()
  const blogSlugFromQueryParams = router.query.blogSlug

  const fetchPublicationsFromBlog = async () => {
    if (typeof blogSlugFromQueryParams !== 'string') {
      return undefined
    }

    return publicationsService
      .getPublicationsFromBlog({
        params: {
          path: {
            blogSlug: blogSlugFromQueryParams,
          },
        },
      })
      .then((response) => {
        return response.data.data.content.map((publication) => {
          return Publication.createFromDTO(publication)
        })
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          console.error(error.message)
        }

        console.error('Erro ao tentar buscar publicações')
      })
  }

  const { data: publications } = useQuery(
    ['publications', blogSlugFromQueryParams],
    () => fetchPublicationsFromBlog(),
  )

  useEffect(() => {
    if (typeof blogSlugFromQueryParams === 'string') {
      setBlogSlug(blogSlugFromQueryParams)
    }
  }, [blogSlugFromQueryParams, setBlogSlug])

  return (
    <div>
      {blogData ? (
        <main className="w-full mt-16 mb-24">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex flex-col justify-center items-center gap-3">
                <Text color={blogPrimaryColor}>Publicações</Text>
                <h1 className="font-semibold text-5xl text-gray-900">
                  {blogData?.name}
                </h1>
              </div>
              {/* <p className="text-xl text-gray-600">
              Tool and strategies modern teams need to help their companies
              grow.
            </p> */}
            </div>

            <div className="grid grid-cols-2 gap-8 mt-28">
              {!publications?.length ? (
                <p>Carregando</p>
              ) : (
                <>
                  {!!publications &&
                    publications.map((publication) => {
                      return (
                        <BlogPostCard
                          key={publication.id}
                          publication={publication}
                          blog={blogData}
                        />
                      )
                    })}
                </>
              )}
            </div>
          </div>
        </main>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          {blogRequestStatus === 'LOADING' ? (
            <Loading type="spin" color="#1f2937" />
          ) : (
            <div className="text-center flex gap-2 flex-col">
              <Heading>
                Blog {`"${blogSlugFromQueryParams}"`} não encontrado
              </Heading>
              <h1 className="text-xl">Tente novamente com outro blog</h1>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
