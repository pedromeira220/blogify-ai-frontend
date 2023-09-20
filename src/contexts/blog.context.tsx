import { PrimaryColorType } from '@/interfaces/primary-color.interface'
import { Blog } from '@/models/blog.model'
import { blogService } from '@/pages/services/blogs.service'
import React, { ReactNode, createContext, useState } from 'react'
import { useQuery } from 'react-query'

interface BlogContextType {
  blogData: Blog | undefined
  setBlogSlug: React.Dispatch<React.SetStateAction<string>>
  blogPrimaryColor: PrimaryColorType | undefined
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContextProvider: React.FC<BlogContextProviderProps> = ({
  children,
}) => {
  const [blogSlug, setBlogSlug] = useState('')

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
        return Blog.createFromDTO(response.data.data)
      })
  }

  const { data: blogData } = useQuery(['blog', blogSlug], () => fetchBlog())

  return (
    <BlogContext.Provider
      value={{
        blogData,
        setBlogSlug,
        blogPrimaryColor: blogData?.primaryColor,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
