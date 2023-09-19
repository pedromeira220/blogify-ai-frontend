import { ApiResponse } from '@/interfaces/api-response.interface'
import { BlogDTO } from '@/models/blog.model'
import { api } from './api.service'

interface GetBySlugRequest {
  params: {
    path: {
      blogSlug: string
    }
  }
}

const getBySlug = async ({
  params,
}: GetBySlugRequest): ApiResponse<BlogDTO> => {
  return api.get(`/blogs/${params.path.blogSlug}`)
}

export const blogService = {
  getBySlug,
}
