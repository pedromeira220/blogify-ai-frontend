import { Publication } from '@/models/publications.model'
import { ArrowUpRight } from '@phosphor-icons/react'
import React from 'react'

interface BlogPostCardProps {
  publication: Publication
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ publication }) => {
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
        <a href="" className="flex items-center gap-2 text-primary-700">
          <span className="font-semibold">Read post</span>
          <ArrowUpRight weight="bold" size={20} />
        </a>
      </div>
    </div>
  )
}
