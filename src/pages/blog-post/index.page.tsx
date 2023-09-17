import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import { WhiteSpace } from '@/components/WhiteSpace'
import { Heading } from './components/Heading'
import { Paragraph } from './components/Paragraph'

// paragraph

export default function BlogPost() {
  return (
    <div>
      <header className="w-full">
        <div className="py-6 px-28">
          <Logo />
        </div>
      </header>
      <main className="w-full mb-24">
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-6 justify-center pl-28 pr-16">
            <h1 className="text-gray-900 font-semibold text-5xl">
              Building your API Stack
            </h1>
            <Paragraph className="text-gray-600 text-xl">
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and managing them.
            </Paragraph>
          </div>
          <div className="w-full">
            <img
              src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
              className="aspect-square object-cover w-full"
            />
          </div>
        </div>
        <div className="max-w-[45rem] mx-auto mt-24">
          <div className="mb-5">
            <Heading>Introduction</Heading>
            <WhiteSpace size={20} />
          </div>

          <Paragraph>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </Paragraph>

          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <WhiteSpace size={48} />
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            className="rounded-xl"
          />
          <WhiteSpace size={48} />
          <Paragraph>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </Paragraph>
          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <WhiteSpace size={32} />
          <Heading size="h3">Software and tools</Heading>
          <WhiteSpace size={16} />

          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>

          <WhiteSpace size={32} />
          <Heading size="h3">Software and tools</Heading>
          <WhiteSpace size={16} />

          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <Paragraph>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{' '}
          </Paragraph>
          <WhiteSpace size={48} />
          <div className="bg-gray-50 p-8 rounded-2xl">
            <Heading size="h2">Conclusion</Heading>
            <WhiteSpace size={20} />
            <Paragraph>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.{' '}
            </Paragraph>
            <Paragraph>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.{' '}
            </Paragraph>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
