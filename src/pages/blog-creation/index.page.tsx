import { Header } from '@/components/Header'
import * as Input from '@/components/Input'
import { SelectInput } from '@/components/Select'
import { SpeedTestSvg } from '@/components/SpeedTestSvg'
import * as TextArea from '@/components/TextArea'
import { WhiteSpace } from '@/components/WhiteSpace'
import { zodResolver } from '@hookform/resolvers/zod'
import { Question } from '@phosphor-icons/react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const generateBlogFormSchema = z.object({
  theme: z
    .string({ required_error: 'Por favor digite o tema' })
    .min(5, 'O tema precisa ter no mínimo 5 caracteres')
    .max(60, 'O tema pode ter no máximo 60 caracteres'),
  description: z
    .string({ required_error: 'Por favor digite a descrição' })
    .min(10, 'A descrição precisa ter no mínimo 10 caracteres')
    .max(256, 'A descrição pode ter no máximo 256 caracteres'),
  name: z
    .string({ required_error: 'Por favor digite o nome' })
    .min(5, 'O tema precisa ter no mínimo 5 caracteres')
    .max(60, 'O tema pode ter no máximo 60 caracteres'),
  slug: z
    .string({ required_error: 'Por favor digite o nome único' })
    .min(5, 'O nome único precisa ter no mínimo 5 caracteres')
    .max(70, 'O nome único pode ter no máximo 70 caracteres')
    .regex(
      /^[a-z0-9]+(-[a-z0-9]+)*$/,
      'Digite um nome único no formato válido',
    ),
  primaryColor: z.enum([
    'PURPLE',
    'ORANGE',
    'BLUE',
    'GREEN',
    'YELLOW',
    'ASK_AI',
  ]),
})

type GenerateBlogFormSchemaInputs = z.input<typeof generateBlogFormSchema>

export default function BlogCreation() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, setValue, control } =
    useForm<GenerateBlogFormSchemaInputs>({
      resolver: zodResolver(generateBlogFormSchema),
      defaultValues: {
        description: '',
        name: '',
        slug: '',
        theme: '',
      },
    })

  const handleGenerateBlog = async (data: GenerateBlogFormSchemaInputs) => {
    console.log('> data', data)

    setIsLoading(true)
  }

  useEffect(() => {
    const blogThemeFromURL = router.query.blogTheme

    if (typeof blogThemeFromURL === 'string') {
      setValue('theme', blogThemeFromURL)
    }
  }, [setValue, router])

  return (
    <div className="h-full">
      <Header />
      {!isLoading ? (
        <main className="w-full mt-16 mb-24">
          <form
            className="max-w-[22.5rem] mx-auto"
            onSubmit={handleSubmit(handleGenerateBlog)}
          >
            <div className="gap-3 flex flex-col">
              <h1 className="text-gray-900 font-bold text-3xl text-center">
                Crie seu blog agora
              </h1>
              <p className="text-center text-base text-gray-500">
                Nos dê mais informações sobre que tipo de blog deseja criar
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-8">
              <Controller
                control={control}
                name="theme"
                render={({ field, fieldState }) => {
                  return (
                    <Input.Root>
                      <Input.Label>Tema do blog</Input.Label>
                      <Input.Container className="mt-2">
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
                        <Input.Hint className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </Input.Hint>
                      )}
                    </Input.Root>
                  )
                }}
              />

              <Controller
                control={control}
                name="description"
                render={({ field, fieldState }) => {
                  return (
                    <TextArea.Root>
                      <TextArea.Label>Descrição do blog</TextArea.Label>
                      <TextArea.Container className="mt-2">
                        <TextArea.Control
                          placeholder="Digite a descrição"
                          value={field.value}
                          onChange={(event) => {
                            const inputValue = event.target.value
                            field.onChange(inputValue)
                          }}
                        />
                      </TextArea.Container>
                      <TextArea.Hint>
                        Descreva o tema central do seu blog. O que você planeja
                        compartilhar e discutir? Uma breve visão geral ajudará
                        nossa IA a personalizar seu blog.
                      </TextArea.Hint>

                      {fieldState.error && (
                        <Input.Hint className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </Input.Hint>
                      )}
                    </TextArea.Root>
                  )
                }}
              />

              <Controller
                control={control}
                name="name"
                render={({ field, fieldState }) => {
                  return (
                    <Input.Root>
                      <Input.Label>Nome do blog</Input.Label>
                      <Input.Container className="mt-2">
                        <Input.Control
                          placeholder="Digite o nome do blog"
                          value={field.value}
                          onChange={(event) => {
                            const inputValue = event.target.value
                            field.onChange(inputValue)
                          }}
                        />
                      </Input.Container>
                      {fieldState.error && (
                        <Input.Hint className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </Input.Hint>
                      )}
                    </Input.Root>
                  )
                }}
              />

              <Controller
                control={control}
                name="slug"
                render={({ field, fieldState }) => {
                  return (
                    <Input.Root>
                      <Input.Label>Nome único do blog</Input.Label>
                      <Input.Container className="mt-2">
                        <Input.Control
                          placeholder="Ex: meu-blog"
                          value={field.value}
                          onChange={(event) => {
                            const inputValue = event.target.value
                            field.onChange(inputValue)
                          }}
                        />

                        <Tooltip.Provider>
                          <Tooltip.Root>
                            <Tooltip.Trigger>
                              <Input.Icon>
                                <Question className="text-gray-500" size={20} />
                              </Input.Icon>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-xl bg-white p-5 text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] max-w-xs"
                                sideOffset={5}
                              >
                                <p className="text-gray-700 font-semibold text-base/4">
                                  Nome único do blog
                                </p>
                                <p className="text-gray-500 mt-2 text-base/5">
                                  Escolha um nome exclusivo para identificação
                                  interna e na URL do seu blog. Opte por algo
                                  fácil de lembrar, sem caracteres especiais ou
                                  acentos. Mantenha-o curto e relacionado à
                                  temática.
                                </p>
                                <Tooltip.Arrow className="fill-white" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                      </Input.Container>
                      {fieldState.error && (
                        <Input.Hint className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </Input.Hint>
                      )}
                    </Input.Root>
                  )
                }}
              />

              <div>
                <Controller
                  control={control}
                  name="primaryColor"
                  render={({ field, fieldState }) => {
                    return (
                      <div>
                        <Input.Label>Cor primária do blog</Input.Label>
                        <WhiteSpace size={6} />
                        <SelectInput
                          onValueChange={(value) => {
                            field.onChange(value)
                          }}
                          value={field.value}
                        />
                        <Input.Hint>
                          Escolha uma cor que reflita a personalidade do seu
                          blog.
                        </Input.Hint>
                        {fieldState.error && (
                          <Input.Hint className="text-red-500 text-sm">
                            {fieldState.error.message}
                          </Input.Hint>
                        )}
                      </div>
                    )
                  }}
                />
              </div>
            </div>

            <button
              className="w-full mt-6 bg-primary-600 flex items-center justify-center py-3 px-5 rounded-lg gap-2 hover:bg-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 outline-none"
              type="submit"
            >
              <span className="text-white font-semibold">Criar blog</span>
            </button>
          </form>
        </main>
      ) : (
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
      )}
    </div>
  )
}
