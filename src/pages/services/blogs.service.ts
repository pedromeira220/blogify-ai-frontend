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

interface GenerateRequest {
  params: {
    body: {
      theme: string
      description: string
      name: string
      slug: string
      primaryColor: 'PURPLE' | 'ORANGE' | 'BLUE' | 'GREEN' | 'YELLOW' | 'ASK_AI'
    }
  }
}

const generate = async ({ params }: GenerateRequest) => {
  return api.post('/blogs', params.body)
}

export const blogService = {
  getBySlug,
  generate,
}
