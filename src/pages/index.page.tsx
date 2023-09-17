import { ContentCreatorSvg } from '@/components/ContentCreatorSvg'
import { Header } from '@/components/Header'
import * as Input from '@/components/Input'
import { Sparkle } from '@phosphor-icons/react'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="w-full mt-16 mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2  items-center px-8">
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

            <div className="mt-12 flex gap-4">
              <Input.Container className="flex-1">
                <Input.Control placeholder="Digite o tema do blog" />
              </Input.Container>

              <button className="bg-primary-600 flex items-center justify-center py-3 px-5 rounded-lg gap-2 hover:bg-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 outline-none">
                <span className="text-white font-semibold">Gerar blog</span>
                <Sparkle
                  className="text-white text-base"
                  size={16}
                  weight="fill"
                />
              </button>
            </div>
          </div>
          <div>
            <ContentCreatorSvg />
          </div>
        </div>
      </main>
    </div>
  )
}
