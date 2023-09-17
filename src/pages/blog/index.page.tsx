import { BlogPostCard } from '@/components/BlogPostCard'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Blog() {
  return (
    <div>
      <Header />
      <main className="w-full mt-16 mb-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col justify-center items-center gap-3">
              <span className="text-primary-700 font-semibold text-base">
                Resources
              </span>
              <h1 className="font-semibold text-5xl text-gray-900">
                Untitled Blog
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-28">
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
