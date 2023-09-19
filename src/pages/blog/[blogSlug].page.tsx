import { BlogPostCard } from '@/components/BlogPostCard'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Blog as BlogModel } from '@/models/blog.model'
import { Publication } from '@/models/publications.model'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { blogService } from '../services/blogs.service'
import { publicationsService } from '../services/publications.service'

export default function Blog() {
  const router = useRouter()
  const blogSlug = router.query.blogSlug

  const fetchBlog = async () => {
    if (typeof blogSlug !== 'string') {
      return undefined
    }

    return blogService
      .getBySlug({
        params: {
          path: {
            blogSlug,
          },
        },
      })
      .then((response) => {
        return BlogModel.createFromDTO(response.data.data)
      })
  }

  const fetchPublicationsFromBlog = async () => {
    console.log('> blogSlug', blogSlug)

    if (typeof blogSlug !== 'string') {
      return undefined
    }

    return publicationsService
      .getPublicationsFromBlog({
        params: {
          path: {
            blogSlug,
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

  const { data: blogData } = useQuery(['blog', blogSlug], () => fetchBlog())
  const { data: publications } = useQuery(['publications', blogSlug], () =>
    fetchPublicationsFromBlog(),
  )

  console.log('> publications', publications)

  return (
    <div>
      <Header />
      <main className="w-full mt-16 mb-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col justify-center items-center gap-3">
              <span className="text-primary-700 font-semibold text-base">
                Publicações
              </span>
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
                      />
                    )
                  })}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
