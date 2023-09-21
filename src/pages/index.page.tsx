import { ContentCreatorSvg } from '@/components/ContentCreatorSvg'
import { Header } from '@/components/Header'
import * as Input from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Sparkle } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const typeBlogThemeFormSchema = z.object({
  theme: z
    .string({ required_error: 'Por favor digite o tema' })
    .min(5, 'O tema precisa ter no mínimo 5 caracteres')
    .max(60, 'O tema pode ter no máximo 60 caracteres'),
})

type TypeBlogThemeFormSchemaInputs = z.input<typeof typeBlogThemeFormSchema>

export default function Home() {
  const router = useRouter()

  const { handleSubmit, register, control } =
    useForm<TypeBlogThemeFormSchemaInputs>({
      resolver: zodResolver(typeBlogThemeFormSchema),
      defaultValues: {
        theme: '',
      },
    })

  const handleGenerateBlog = async (data: TypeBlogThemeFormSchemaInputs) => {
    router.push(`/blog-creation?blogTheme=${data.theme}`)
  }

  return (
    <div>
      <Header />
      <main className="w-full mt-16 mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 items-center px-8">
          <div>
            <div className="flex flex-col gap-6">
              <h1 className="text-gray-900 font-semibold text-5xl">
                Construa seu blog com a agilidade da IA
              </h1>
              <p className="text-gray-500 text-xl">
                Sua visão, poucas palavras: nossa IA transforma sua ideia em um
                blog completo, com artigos de qualidade, em um instante
              </p>
            </div>

            <form
              className="mt-12 flex gap-4"
              onSubmit={handleSubmit(handleGenerateBlog)}
            >
              <Controller
                control={control}
                name="theme"
                render={({ field, fieldState }) => {
                  return (
                    <Input.Root className="flex-1">
                      <Input.Container className="flex-1">
                        <Input.Control
                          placeholder="Digite o tema do blog"
                          value={field.value}
                          onChange={(event) => {
                            const inputValue = event.target.value
                            field.onChange(inputValue)
                          }}
                        />
                      </Input.Container>
                      {fieldState.error && (
                        <Input.Hint className="text-red-500 absolute">
                          {fieldState.error.message}
                        </Input.Hint>
                      )}
                    </Input.Root>
                  )
                }}
              />

              <button
                className="bg-primary-600 flex items-center justify-center py-3 px-5 rounded-lg gap-2 hover:bg-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 outline-none"
                type="submit"
              >
                <span className="text-white font-semibold">Gerar blog</span>
                <Sparkle
                  className="text-white text-base"
                  size={16}
                  weight="fill"
                />
              </button>
            </form>
          </div>
          <div>
            <ContentCreatorSvg />
          </div>
        </div>
      </main>
    </div>
  )
}
