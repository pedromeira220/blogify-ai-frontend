import { BlogContext } from '@/contexts/blog.context'
import { Blog } from '@/models/blog.model'
import { Publication } from '@/models/publications.model'
import { returnTailwindPrimaryColor } from '@/utils/return-tailwind-primary-color'
import { ArrowUpRight } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import { Text } from '../Text'

interface BlogPostCardProps {
  publication: Publication
  blog: Blog | undefined
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  publication,
  blog,
}) => {
  const { blogPrimaryColor } = useContext(BlogContext)

  const router = useRouter()

  const handleReadPostClick = async () => {
    router.push(`/blog/${blog?.slug}/${publication.slug}`)
  }

  return (
    <div>
      <img
        src={publication.thumbnail.src}
        className="w-full aspect-[592/280] object-cover"
      />
      <div className="flex mt-6 flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-900 font-semibold text-2xl">
            {publication.title}
          </h3>
          <p className="text-gray-600">{publication.subtitle}</p>
        </div>
        <button
          className={'flex items-center gap-2'}
          onClick={() => {
            handleReadPostClick()
          }}
        >
          <Text color={blogPrimaryColor}>Read post</Text>
          <ArrowUpRight
            weight="bold"
            size={20}
            className={twMerge(returnTailwindPrimaryColor(blogPrimaryColor))}
          />
        </button>
      </div>
    </div>
  )
}
