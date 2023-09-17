import { ArrowUpRight } from '@phosphor-icons/react'
import React from 'react'

export const BlogPostCard: React.FC = () => {
  return (
    <div>
      <img
        src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png"
        className="w-full aspect-[592/280] object-cover"
      />
      <div className="flex mt-6 flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-900 font-semibold text-2xl">
            UX review presentations
          </h3>
          <p className="text-gray-600">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>
        <a href="" className="flex items-center gap-2 text-primary-700">
          <span className="font-semibold">Read post</span>
          <ArrowUpRight weight="bold" size={20} />
        </a>
      </div>
    </div>
  )
}
