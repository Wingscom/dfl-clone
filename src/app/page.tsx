import Layout from '@/common/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-32 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/generated_images/futuristic_da_nang_skyline_with_fintech_nodes.png"
            alt="Futuristic Da Nang"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 fade-in-up">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] glow-text text-black dark:text-white">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
                Innovative Sustainable Finance
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl font-bold max-w-3xl mx-auto leading-relaxed text-black dark:text-gray-300">
            The premier incubator and regulatory sandbox in Central Vietnam. We empower startups to build Innovative Fintech solutions (with a focus in AI, Blockchain, and Sustainable Finance) under a secure and international legal framework with privileged access to the fast growing Vietnamese market.
          </p>
        </div>
      </section>

      {/* Content Sections Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 space-y-32">

        {/* SECTION 1 - Tech & Capital */}
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" x2="9" y1="1" y2="4" /><line x1="15" x2="15" y1="1" y2="4" /><line x1="9" x2="9" y1="20" y2="23" /><line x1="15" x2="15" y1="20" y2="23" /><line x1="20" x2="23" y1="9" y2="9" /><line x1="20" x2="23" y1="14" y2="14" /><line x1="1" x2="4" y1="9" y2="9" /><line x1="1" x2="4" y1="14" y2="14" /></svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white">Strategic Tech Ecosystem</h2>
              <div className="space-y-4 text-lg leading-relaxed font-medium text-black dark:text-muted-foreground">
                <p><strong className="text-primary">Innovation Engine:</strong> DFL is the core innovation engine of Da Nang&apos;s International Financial Centre (IFC).</p>
                <p><strong className="text-primary">Fast Deployment:</strong> Being housed within the Tech Park ensures technology is immediately connected to financial capital and preferential tax policies.</p>
                <p><strong className="text-primary">Accelerated Growth:</strong> Our physical placement shortens the time from initial tech development to full financial deployment.</p>
              </div>
            </div>
            <div className="relative overflow-hidden h-full min-h-[300px] md:min-h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent z-10 md:bg-gradient-to-r"></div>
              <Image
                src="/assets/img/danang-masterplan-1.png"
                alt="Tech Ecosystem"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2 - Trade & Logistics */}
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
            <div className="relative overflow-hidden h-full min-h-[300px] md:min-h-auto order-2 md:order-1">
               <div className="absolute inset-0 bg-gradient-to-l from-card via-transparent to-transparent z-10"></div>
              <Image
                src="/assets/img/generated_images/digital_network_expansion.png"
                alt="Global Trade Gateway"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-10 order-1 md:order-2">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white">Global Trade Gateway</h2>
              <div className="space-y-4 text-lg leading-relaxed font-medium text-black dark:text-muted-foreground">
                <p><strong className="text-primary">Logistical Link:</strong> Situated near the Free Trade Zone (FTZ) and major seaports like Lien Chieu and Tien Sa.</p>
                <p><strong className="text-primary">Trade Finance Focus:</strong> Designed for innovators developing cross-border payments, supply chain finance, and digitized logistics.</p>
                <p><strong className="text-primary">Real-World Testing:</strong> Test solutions immediately within the FTZ&apos;s simplified regulatory environment to impact the East-West Economic Corridor.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 - Policy & Value Chain */}
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white">Scalable Policy Lab</h2>
              <div className="space-y-4 text-lg leading-relaxed font-medium text-black dark:text-muted-foreground">
                <p><strong className="text-primary">Sandbox Trials:</strong> As a &quot;policy laboratory,&quot; we trial new financial mechanisms and digital asset sandboxes before they scale.</p>
                <p><strong className="text-primary">Integrated Solutions:</strong> Companies can create Green Finance for port operations and automated insurance for FTZ businesses.</p>
                <p><strong className="text-primary">Global Investment:</strong> We attract international funds targeting Asia-Pacific supply chains and the new digital economy.</p>
              </div>
            </div>
            <div className="relative overflow-hidden h-full min-h-[300px] md:min-h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent z-10 md:bg-gradient-to-r"></div>
              <Image
                src="/assets/img/enterprise-infrastructure.jpg"
                alt="Policy Lab"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Partners CTA */}
        <div className="text-center py-8">
          <Link href="/partners" className="inline-flex items-center justify-center gap-2 text-lg font-medium text-black dark:text-white hover:text-primary transition-colors group">
            See our Partners & Mentors
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-12 md:p-20 text-center space-y-8 shadow-xl border border-black/5 dark:border-white/5">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">Ready to Join?</h2>
            <p className="text-xl text-muted-foreground">Whether you&apos;re a startup, investor, or partner, there&apos;s a place for you at DFL.</p>
          </div>

          <div className="pt-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-primary hover:bg-primary/90 h-11 px-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>

      </div>
    </Layout>
  );
}

