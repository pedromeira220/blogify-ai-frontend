import { ApiResponse } from '@/interfaces/api-response.interface'
import { PaginatedApiResponse } from '@/interfaces/paginated-api-response.interface'
import { PublicationDTO } from '@/models/publications.model'
import { api } from './api.service'

interface GetPublicationsFromBlogRequest {
  params: {
    path: {
      blogSlug: string
    }
  }
}

const getPublicationsFromBlog = async ({
  params,
}: GetPublicationsFromBlogRequest): ApiResponse<
  PaginatedApiResponse<PublicationDTO>
> => {
  return api.get(`/publications/${params.path.blogSlug}`)
}

interface IsPublicationsFromBlogReadyRequest {
  params: {
    path: {
      blogSlug: string
    }
  }
}

const isPublicationsFromBlogReady = async ({
  params,
}: IsPublicationsFromBlogReadyRequest): ApiResponse<boolean> => {
  return api.get(`/publications/blogs/${params.path.blogSlug}/ready`)
}

interface GetPublicationRequest {
  params: {
    path: {
      blogSlug: string
      publicationSlug: string
    }
  }
}

const getPublication = async ({
  params,
}: GetPublicationRequest): ApiResponse<PublicationDTO> => {
  return api.get(
    `/publications/${params.path.blogSlug}/${params.path.publicationSlug}`,
  )
}

export const publicationsService = {
  getPublicationsFromBlog,
  isPublicationsFromBlogReady,
  getPublication,
}
