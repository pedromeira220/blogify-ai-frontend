import { AxiosResponse } from 'axios'

export type ApiResponse<Data> = Promise<
  AxiosResponse<
    {
      errors: string[]
      success: boolean
      data: Data
    },
    any
  >
>
