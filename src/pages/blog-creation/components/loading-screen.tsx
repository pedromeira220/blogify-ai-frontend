import { SpeedTestSvg } from '@/components/SpeedTestSvg'
import { publicationsService } from '@/pages/services/publications.service'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface LoadingScreenProps {
  blogSlug: string
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ blogSlug }) => {
  const router = useRouter()

  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  const executeOnInterval = async (intervalId: NodeJS.Timeout) => {
    console.log(
      '> Verificando se as publicações já terminaram do blog slug: ',
      blogSlug,
    )

    return publicationsService
      .isPublicationsFromBlogReady({
        params: {
          path: {
            blogSlug,
          },
        },
      })
      .then((response) => {
        const isReady = response.data.data

        console.log(`> blog com slug ${blogSlug} está pronto: ${isReady}`)

        if (isReady) {
          clearInterval(intervalId)
          router.push(`/blog/${blogSlug}`)
        }
      })
      .catch(() => {
        clearInterval(intervalId)
        console.error(
          '> Deu erro ao ver se as publicações já terminaram de serem geradas',
        )
      })
  }

  useEffect(() => {
    setIntervalId(() => {
      const id = setInterval(() => {
        executeOnInterval(id)
      }, 5 * 1000)

      return id
    })
  }, [blogSlug])

  return (
    <main className="w-full mt-16 h-full">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex justify-center flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-primary-700 font-semibold text-base">
                Carregando...
              </span>
              <h1 className="text-gray-900 font-semibold text-6xl">
                Estamos criando o blog para você
              </h1>
            </div>
            <p className="text-gray-600 text-xl">
              Aguarde alguns instantes e logo seu blog inteiro estará pronto
            </p>
          </div>
          <div>
            <SpeedTestSvg />
          </div>
        </div>
      </div>
    </main>
  )
}
