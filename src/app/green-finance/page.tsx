"use client";

import Layout from "@/common/Layout";
import Image from "next/image";

export default function GreenFinancePage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-32">

        {/* Hero Section */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 shadow-2xl min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/img/greenpattern.jpg"
              alt="Green Finance City"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-20 max-w-4xl p-12 md:p-20 space-y-8">

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">
              Pioneering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Innovative Sustainable Finance
              </span> <br/>
              in Southeast Asia
            </h1>

            <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl leading-relaxed">
              We are building the infrastructure for a sustainable economy. From carbon credit markets to ESG scoring, DFL is the hub for green fintech innovation.
            </p>
          </div>
        </div>

        {/* Key Initiatives Grid */}
        <div id="initiatives" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Core Initiatives</h2>
            <p className="text-xl text-muted-foreground">Driving the transition to a net-zero economy through technology.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Initiative 1 */}
            <div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-emerald-500/5 transition-all duration-300 space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.072-2.143-3-3-.928.857-1.928.857-3 3-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5c1.11 0 2.08-.75 2.5-1.81l.5.31Z"/><path d="M15.5 14.5a2.5 2.5 0 0 1-2.5-2.5c0-1.38.5-2 1-3 1.072-2.143 2.072-2.143 3-3 .928.857 1.928.857 3 3 .5 1 1 1.62 1 3a2.5 2.5 0 0 1-2.5 2.5c-1.11 0-2.08-.75-2.5-1.81l-.5.31Z"/><path d="M12 22v-6"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white">Carbon Markets</h3>
              <p className="text-muted-foreground leading-relaxed">
                Developing transparent, blockchain-based platforms for carbon credit trading and verification (MRV), connecting local projects with global buyers.
              </p>
            </div>

            {/* Initiative 2 */}
            <div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-teal-500/5 transition-all duration-300 space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white">ESG Scoring</h3>
              <p className="text-muted-foreground leading-relaxed">
                Leveraging AI and big data to provide accurate, real-time ESG scoring for SMEs and enterprises, facilitating access to green capital.
              </p>
            </div>

            {/* Initiative 3 */}
            <div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-green-500/5 transition-all duration-300 space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white">Green Bonds</h3>
              <p className="text-muted-foreground leading-relaxed">
                Facilitating the issuance and tokenization of green bonds to finance renewable energy and sustainable infrastructure projects.
              </p>
            </div>
          </div>
        </div>

        {/* Why Da Nang for Green Finance? */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative rounded-[2.5rem] overflow-hidden aspect-square md:aspect-auto md:h-[500px] border border-black/5 dark:border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent z-10"></div>
            <Image
              src="/assets/img/da_nang_vietnam_skyl_ad6bb21a.jpg"
              alt="Eco City Da Nang"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
              Why Da Nang?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Da Nang has been consistently ranked as Vietnam&apos;s most livable and sustainable city. With a strong commitment to becoming a &quot;Green City,&quot; it is the ideal testbed for sustainable finance solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span><strong>Strategic Support:</strong> Backed by local government initiatives prioritizing green growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span><strong>Innovation Hub:</strong> A convergence of tech talent, policy sandbox, and impact investors.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div id="collaborate" className="bg-emerald-900/10 dark:bg-emerald-900/20 rounded-[2.5rem] p-12 md:p-20 text-center space-y-8 border border-emerald-500/20 shadow-xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">Join the Sustainable Revolution</h2>
            <p className="text-xl text-muted-foreground">
              Whether you are building a climate fintech startup or looking to invest in sustainable solutions, DFL is your partner.
            </p>
          </div>

          <div className="pt-4">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Involved
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>

      </div>
    </Layout>
  );
}
