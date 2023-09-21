import { WhiteSpace } from '@/components/WhiteSpace'
import { BlogContext } from '@/contexts/blog.context'
import { Publication } from '@/models/publications.model'
import { publicationsService } from '@/pages/services/publications.service'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useQuery } from 'react-query'
import { Heading } from './components/Heading'
import { Paragraph } from './components/Paragraph'

// paragraph

export default function BlogPost() {
  const { blogData, setBlogSlug } = useContext(BlogContext)

  const router = useRouter()
  const blogSlugFromQueryParams = router.query.blogSlug
  const publicationSlugFromQueryParams = router.query.publicationSlug

  const fetchPublication = async () => {
    if (typeof publicationSlugFromQueryParams !== 'string') {
      return undefined
    }

    if (typeof blogSlugFromQueryParams !== 'string') {
      return undefined
    }

    return publicationsService
      .getPublication({
        params: {
          path: {
            blogSlug: blogSlugFromQueryParams,
            publicationSlug: publicationSlugFromQueryParams,
          },
        },
      })
      .then((response) => {
        return Publication.createFromDTO(response.data.data)
      })
      .catch(() => {
        // TODO: fazer algo quando der erro ou quando a publicação não for encontrada
      })
  }

  const { data: publicationData } = useQuery(
    ['publication', publicationSlugFromQueryParams],
    () => fetchPublication(),
  )

  useEffect(() => {
    if (typeof blogSlugFromQueryParams === 'string') {
      setBlogSlug(blogSlugFromQueryParams)
    }
  }, [blogSlugFromQueryParams, setBlogSlug])
  return (
    <div>
      <main className="w-full mb-24">
        <div className="grid grid-cols-2 h-screen">
          <div className="flex flex-col gap-6 justify-center pl-28 pr-16 h-full">
            <h1 className="text-gray-900 font-semibold text-5xl">
              {publicationData?.title}
            </h1>
            <Paragraph className="text-gray-600 text-xl">
              {publicationData?.subtitle}
            </Paragraph>
          </div>
          <div className="w-full h-full">
            <img
              src={publicationData?.thumbnail.src}
              className="aspect-square object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-[45rem] mx-auto mt-24">
          <ReactMarkdown
            components={{
              h1: ({ children }) => {
                return (
                  <>
                    <Heading size="h1">{children}</Heading>
                    <WhiteSpace size={48} />
                  </>
                )
              },
              h2: ({ children }) => {
                return (
                  <>
                    <Heading size="h2">{children}</Heading>
                    <WhiteSpace size={40} />
                  </>
                )
              },
              h3: ({ children }) => {
                return (
                  <>
                    <Heading size="h3">{children}</Heading>
                    <WhiteSpace size={36} />
                  </>
                )
              },
              h4: ({ children }) => {
                return (
                  <>
                    <Heading size="h4">{children}</Heading>
                    <WhiteSpace size={36} />
                  </>
                )
              },
              p: ({ children }) => {
                return (
                  <>
                    <Paragraph>{children}</Paragraph>
                    <WhiteSpace size={20} />
                  </>
                )
              },
              ul: ({ children }) => {
                return (
                  <>
                    <Paragraph>{children}</Paragraph>
                    <WhiteSpace size={20} />
                  </>
                )
              },
              ol: ({ children }) => {
                return (
                  <>
                    <Paragraph>{children}</Paragraph>
                    <WhiteSpace size={20} />
                  </>
                )
              },
            }}
          >
            {publicationData?.content ?? ''}
          </ReactMarkdown>
          {/* 
          <div className="mb-5">
            <Heading>Introduction</Heading>
            <WhiteSpace size={20} />
          </div>

          <Paragraph>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </Paragraph>

          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <WhiteSpace size={48} />
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            className="rounded-xl"
          />
          <WhiteSpace size={48} />
          <Paragraph>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </Paragraph>
          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <WhiteSpace size={32} />
          <Heading size="h3">Software and tools</Heading>
          <WhiteSpace size={16} />

          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>

          <WhiteSpace size={32} />
          <Heading size="h3">Software and tools</Heading>
          <WhiteSpace size={16} />

          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <WhiteSpace size={48} />
          <div className="bg-gray-50 p-8 rounded-2xl">
            <Heading size="h2">Conclusion</Heading>
            <WhiteSpace size={20} />
            <Paragraph>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.{' '}
            </Paragraph>
            <Paragraph>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.{' '}
            </Paragraph>
          </div> */}
        </div>
      </main>
    </div>
  )
}
