import { PrimaryColorType } from '@/interfaces/primary-color.interface'
import { Blog } from '@/models/blog.model'
import { blogService } from '@/pages/services/blogs.service'
import React, { ReactNode, createContext, useState } from 'react'
import { useQuery } from 'react-query'

type BlogRequestStatus =
  | 'SUCCESS'
  | 'INTERNAL_ERROR'
  | 'BLOG_NOT_FOUND'
  | 'LOADING'

interface BlogContextType {
  blogData: Blog | undefined
  setBlogSlug: React.Dispatch<React.SetStateAction<string>>
  blogPrimaryColor: PrimaryColorType | undefined
  blogRequestStatus: BlogRequestStatus
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContextProvider: React.FC<BlogContextProviderProps> = ({
  children,
}) => {
  const [blogSlug, setBlogSlug] = useState('')
  const [blogRequestStatus, setBlogRequestStatus] =
    useState<BlogRequestStatus>('LOADING')

  const fetchBlog = async () => {
    setBlogRequestStatus('LOADING')
    if (typeof blogSlug !== 'string' || !blogSlug) {
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
        setBlogRequestStatus('SUCCESS')
        return Blog.createFromDTO(response.data.data)
      })
      .catch(() => {
        setBlogRequestStatus('BLOG_NOT_FOUND')
        return undefined
      })
  }

  const { data: blogData } = useQuery(['blog', blogSlug], () => fetchBlog())

  return (
    <BlogContext.Provider
      value={{
        blogData,
        setBlogSlug,
        blogPrimaryColor: blogData?.primaryColor,
        blogRequestStatus,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
