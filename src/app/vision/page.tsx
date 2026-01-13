import Layout from '@/common/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Vision() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-32">

        {/* Hero Section */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10"></div>
            <Image
              src="/assets/img/danang-masterplan-1.png"
              alt="Vision Workspace"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-20 max-w-4xl p-12 md:p-20 space-y-8">

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">
              Building the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
                Silicon Valley
              </span> <br/>
              of Central Vietnam
            </h1>

            <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl leading-relaxed">
              Da Nang FinTech Lab (DFL) is a strategic initiative under the International Financial Centre (IFC) Da Nang.
            </p>
          </div>
        </div>

        {/* Strategic Initiative Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
              Complementing the Ecosystems of HCMC & Singapore
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Operated by Crossfund and Vcap Partners, DFL is designed to position Da Nang as a key node in Southeast Asia&apos;s financial innovation network.
              </p>
              <p>
                We are not just building a workspace; we are constructing a regulatory sandbox and innovation hub that leverages Da Nang&apos;s unique advantages - high quality of life, emerging tech talent, and strategic location - to foster the next generation of green finance and digital assets.
              </p>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-square md:aspect-auto md:h-[500px] border border-black/5 dark:border-white/5 shadow-2xl">
            <Image
              src="/assets/img/generated_images/futuristic_da_nang_skyline_with_fintech_nodes.png"
              alt="Da Nang Fintech Hub"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission Targets (The Numbers) */}
        <div className="bg-black/5 dark:bg-white/5 rounded-[2.5rem] p-12 md:p-20 border border-black/5 dark:border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">Our 2030 Mission</h2>
            <p className="text-xl text-muted-foreground">Ambitious targets driving real economic impact for Central Vietnam.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Target 1 */}
            <div className="p-8 rounded-[2rem] bg-card/50 backdrop-blur-sm border border-black/5 dark:border-white/5 text-center space-y-4 group hover:scale-105 transition-transform duration-300">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-emerald-500">
                200
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white">Startups Incubated</h3>
              <p className="text-muted-foreground">Nurturing high-growth ventures in AI, Blockchain, and Green Finance.</p>
            </div>

            {/* Target 2 */}
            <div className="p-8 rounded-[2rem] bg-card/50 backdrop-blur-sm border border-black/5 dark:border-white/5 text-center space-y-4 group hover:scale-105 transition-transform duration-300 delay-100">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500">
                2,000
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white">High-Quality Jobs</h3>
              <p className="text-muted-foreground">Creating careers for the next generation of Vietnamese tech talent.</p>
            </div>

            {/* Target 3 */}
            <div className="p-8 rounded-[2rem] bg-card/50 backdrop-blur-sm border border-black/5 dark:border-white/5 text-center space-y-4 group hover:scale-105 transition-transform duration-300 delay-200">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500">
                $200M
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white">Investment Attracted</h3>
              <p className="text-muted-foreground">Direct foreign investment into Da Nang&apos;s digital economy.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-8 pt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Be Part of the Vision</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl h-12 px-8">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </Layout>
  );
}
