"use client";

import Layout from "@/common/Layout";
import Image from "next/image";

export default function PartnersPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-32">

        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight glow-text text-black dark:text-white">
            Backed by Global <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
              World Class Innovators
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            Our network of strategic partners connects Da Nang&apos;s innovators with world-class capital, mentorship, and global market access.
          </p>
        </div>

        {/* Partners Section with Logos */}
        <div className="space-y-12">
          <div className="flex items-end justify-between border-b border-black/5 dark:border-white/5 pb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Partners</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
            {/* Da Nang */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/dng-icon.png" alt="Da Nang" fill className="object-contain p-4" />
            </div>

            {/* VIFC */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/vifc-logo.png" alt="VIFC Vietnam" fill className="object-contain p-4" />
            </div>

            {/* NSSC */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/nssc-logo.webp" alt="National Startup Support Center" fill className="object-contain p-4" />
            </div>

            {/* VYBE */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/vybe.png" alt="VYBE" fill className="object-contain p-4" />
            </div>

            {/* Expand */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/expand-logo.png" alt="Expand" fill className="object-contain p-4" />
            </div>

            {/* CrossFund */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/crossfund-logo.png" alt="CrossFund" fill className="object-contain p-4" />
            </div>

            {/* Globale */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/globale.png" alt="Globale Capital Partners" fill className="object-contain p-4" />
            </div>

            {/* APEX */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/apex-logo.png" alt="APEX" fill className="object-contain p-4" />
            </div>

            {/* Touchstone Partners */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/touchstone-logo.png" alt="Touchstone Partners" fill className="object-contain p-4" />
            </div>

            {/* ThinkZone */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/thinkzone-logo.png" alt="ThinkZone Ventures" fill className="object-contain p-4" />
            </div>

            {/* Sustainable Finance */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/sustainable-finance-logo.png" alt="Sustainable Finance - EuroCham Vietnam" fill className="object-contain p-4" />
            </div>

            {/* Beanstalk */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/beanstalk-logo.png" alt="Beanstalk" fill className="object-contain p-4" />
            </div>

            {/* Quest Ventures */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/quest-ventures-logo.png" alt="Quest Ventures" fill className="object-contain p-4" />
            </div>

            {/* APAC DAO */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/apacdao-logo.png" alt="APAC DAO" fill className="object-contain p-4" />
            </div>

            {/* VPlus */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/vplus-logo.png" alt="VPlus" fill className="object-contain p-4" />
            </div>

            {/* Indelible Ventures */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/indelible-ventures-logo.png" alt="Indelible Ventures" fill className="object-contain p-4" />
            </div>

            {/* Partner */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/partner-logo-2.png" alt="Partner" fill className="object-contain p-4" />
            </div>

            {/* Tony Blair Institute */}
            <div className="flex items-center justify-center p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-32 relative">
              <Image src="/assets/img/tbi-logo.png" alt="Tony Blair Institute for Global Change" fill className="object-contain p-4" />
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <div className="space-y-12">
          <div className="flex items-end justify-between border-b border-black/5 dark:border-white/5 pb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Mentors</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quang Pham */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/quang_pham.png" alt="Quang Pham" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Quang Pham</h3>
                  <a href="https://www.linkedin.com/in/quang-pham-057b096?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Investment Committee member at Asia Business Builders</p>
                <p className="text-lg text-muted-foreground">
                  Investment Committee member at Asia Business Builders. Mandating investing strategy, authorizing investment decisions, and overseeing portfolio performance for a $90M Vietnam-focused PE fund.
                </p>
              </div>
            </div>

            {/* Benjamin Cardarelli */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/benjamin_cardarelli.png" alt="Benjamin Cardarelli" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Benjamin Cardarelli</h3>
                  <a href="https://www.linkedin.com/in/bennythekid/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">CEO & Founder, CrossFund</p>
                <p className="text-lg text-muted-foreground">
                  Leading one of the most active emerging market investors, bridging Asia & MENA. Connecting vetted startups with accredited angel investors globally.
                </p>
              </div>
            </div>

            {/* Tyler McElhaney */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/tyler_mcelhaney.png" alt="Tyler McElhaney" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Tyler McElhaney</h3>
                  <a href="https://www.linkedin.com/in/tylermcelhaney/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Country Head, Apex Group Ltd.</p>
                <p className="text-lg text-muted-foreground">
                  Country Head, General Director & Legal Representative - Financial & Professional Services. Leading operations for Apex Group Ltd.
                </p>
              </div>
            </div>

            {/* Henry Yang */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/henry_yang.png" alt="Henry Yang" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Henry Yang</h3>
                  <a href="https://www.linkedin.com/in/henry-yang-074a1416/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Managing Director, Remi Technology</p>
                <p className="text-lg text-muted-foreground">
                  FinTech executive at Remi Technology and Founder of 9Plus/Qcash, focused on stablecoin and cross-border payment solutions. A former Ericsson veteran, he holds a Master of Global Finance from Fordham University and Peking University.
                </p>
              </div>
            </div>

            {/* Do Bui */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/do_bui.png" alt="Do Bui" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Do Bui</h3>
                  <a href="https://www.linkedin.com/in/dobuithanh/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Founding Partner & CEO, ThinkZone Ventures</p>
                <p className="text-lg text-muted-foreground">
                  Founding Partner & CEO of ThinkZone Ventures, a Vietnam-based early-stage VC investing in ambitious founders across Southeast Asia. He also serves on the boards of notable portfolio companies including GIMO, Fundiin, and eJOY English.
                </p>
              </div>
            </div>

            {/* Davide Calì */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/davide_cali.png" alt="Davide Calì" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Davide Calì</h3>
                  <a href="https://www.linkedin.com/in/calidavide/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Chairman of Expand</p>
                <p className="text-lg text-muted-foreground">
                  Italian advisor, investor, founder, and ex researcher working in the Tech field for more than 30 years. Successfully contributed to launch 3 startups (one up to a 3.5 B$ Pre IPO).
                </p>
              </div>
            </div>

            {/* Bobby Liu */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/bobby_liu.png" alt="Bobby Liu" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Bobby Liu</h3>
                  <a href="https://www.linkedin.com/in/bobbytyliu/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Co-Director of Founder Institute Vietnam<br/>Venture Partner at Touchstone Partners</p>
                <p className="text-lg text-muted-foreground">
                  He founded Hub.IT, a coworking space and incubator in Hanoi that helped build the local entrepreneurial ecosystem. An accredited mentor for Google Developer Launchpad Accelerator, he actively advises startups across Southeast Asia. Having lived and worked in five countries, Bobby brings a global perspective to Vietnam&apos;s growing tech ecosystem.
                </p>
              </div>
            </div>

            {/* Dr. Mattia L. Rattaggi */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/mattia_rattaggi.png" alt="Dr. Mattia L. Rattaggi" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Dr. Mattia L. Rattaggi</h3>
                  <a href="https://www.linkedin.com/in/m-rattaggi/?originalSubdomain=ch" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Managing Partner, METI Advisory AG</p>
                <p className="text-lg text-muted-foreground">
                  AEIR&apos;s Blockchain Advisor with 25+ years in finance and Web3 strategy. Chairman of FiCAS, Ambassador of CV Labs. Guiding navigating the legal landscape of Web3 while shaping resilient, compliant blockchain strategies.
                </p>
              </div>
            </div>

            {/* Stefano Pellegrino */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/stefano_pellegrino.png" alt="Stefano Pellegrino" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Stefano Pellegrino</h3>
                  <a href="https://www.linkedin.com/in/pellegrinostefano/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Co-Founder & CEO at Aquila</p>
                <p className="text-lg text-muted-foreground">
                  3x Founder and Zero-to-One Business Builder, with over 10 years experience in green project finance across South East Asia. I focus on Data-Driven Growth in Emerging Markets, notably at the intersection between FinTech and Climate Tech.
                </p>
              </div>
            </div>

            {/* Evgeniya Pozhilova */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/evgeniya_pozhilova.png" alt="Evgeniya Pozhilova" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Evgeniya Pozhilova</h3>
                  <a href="https://www.linkedin.com/in/epozhilova/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Founder & Chief M&A Strategist at GlobalVision M&A Consulting</p>
                <p className="text-lg text-muted-foreground">
                  Specializing in Private Equity, Venture Capital, and Mergers & Acquisitions. With a focus on the Benelux region, she delivers strategic advisory and investment growth for businesses globally.
                </p>
              </div>
            </div>

            {/* Federico Vasoli */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/federico_vasoli.png" alt="Federico Vasoli" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Federico Vasoli</h3>
                  <a href="https://www.linkedin.com/in/federicovasoli/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Managing Partner at dMTV Global</p>
                <p className="text-lg text-muted-foreground">
                  International business lawyer with 20+ years of experience specializing in asset protection, foreign investments, and digital assets across Southeast Asia and Europe. Deputy Chairman of the Italian Chamber of Commerce in Vietnam and General Counsel at EuropeanQuantum.
                </p>
              </div>
            </div>

            {/* William Taing */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/william_taing.png" alt="William Taing" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">William Taing</h3>
                  <a href="https://www.linkedin.com/in/williamtaing/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Director of Beanstalk AgTech</p>
                <p className="text-lg text-muted-foreground">
                  Driving innovation in sustainable agriculture across Australia and Asia. Specializing in emerging agtech, climate resilience, and food systems, working with agribusinesses, investors, and governments to scale impactful solutions. Previously held senior government roles in agriculture policy and trade, leading diplomatic programs between Australia and Asia.
                </p>
              </div>
            </div>

            {/* Maaike Doyer */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/maaike_doyer.png" alt="Maaike Doyer" fill className="object-contain" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Maaike Doyer</h3>
                  <a href="https://www.linkedin.com/in/maaikedoyer/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Founder & Managing Partner at Epic Angels</p>
                <p className="text-lg text-muted-foreground">
                  A former partner at Business Models Inc. and an expert in strategy and innovation. She founded Epic Angels, the largest female angel network in APAC, with a mission to empower female investors and startups. Maaike is a global speaker and educator, known for increasing female representation in venture capital.
                </p>
              </div>
            </div>

            {/* Thanh Giang */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/thanh_giang.png" alt="Thanh Giang" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Thanh Giang</h3>
                  <a href="https://www.linkedin.com/in/thanh-giang-pham-5494a86b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Founder & CEO, VNFITE</p>
                <p className="text-lg text-muted-foreground">
                  A seasoned entrepreneur and expert in Peer-to-Peer (P2P) Lending and Fintech. As the Founder and CEO of VNFITE, he is dedicated to transforming financial inclusion in Vietnam by connecting investors with small businesses and individuals through an innovative digital lending platform.
                </p>
              </div>
            </div>

            {/* Kris Supavatanakul */}
            <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src="/assets/img/kris_supavatanakul.png" alt="Kris Supavatanakul" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold text-black dark:text-white">Kris Supavatanakul</h3>
                  <a href="https://www.linkedin.com/in/supavatanakul/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-black dark:text-white font-bold mb-4">Strategy Director at Finnomena</p>
                <p className="text-lg text-muted-foreground">
                  A key leader at Finnomena, Thailand&apos;s leading wealth management platform. He specializes in fintech strategy, digital transformation, and scaling wealthtech solutions in Southeast Asia. With a background in strategic consulting and finance, Kris drives Finnomena&apos;s mission to provide accessible investment advice to millions through technology and data-driven insights.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
