"use client";

import Layout from "@/common/Layout";
import Image from "next/image";

export default function PartnersPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-32">

        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight glow-text text-foreground font-heading">
            Backed by Global <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              World Class Innovators
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            Our network of strategic partners connects Da Nang&apos;s innovators with world-class capital, expertise, and global market access.
          </p>
        </div>

        {/* Partners Section with Logos */}
        <div className="space-y-12">
          <div className="flex items-end justify-between border-b border-black/5 dark:border-white/5 pb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Partners</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-center justify-center">
            {/* Da Nang */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/dng-icon.png" alt="Da Nang" fill className="object-contain p-4" />
            </div>

            {/* VIFC */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/vifc-logo.png" alt="VIFC Vietnam" fill className="object-contain p-4" />
            </div>

            {/* NSSC */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/nssc-logo.webp" alt="National Startup Support Center" fill className="object-contain p-4" />
            </div>

            {/* VYBE */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/vybe.png" alt="VYBE" fill className="object-contain p-4" />
            </div>

            {/* Expand */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/expand-logo.png" alt="Expand" fill className="object-contain p-4" />
            </div>

            {/* CrossFund */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/crossfund-logo.png" alt="CrossFund" fill className="object-contain p-4" />
            </div>

            {/* Globale */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/globale.png" alt="Globale Capital Partners" fill className="object-contain p-4" />
            </div>

            {/* APEX */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/apex-logo.png" alt="APEX" fill className="object-contain p-4" />
            </div>

            {/* Touchstone Partners */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/touchstone-logo.png" alt="Touchstone Partners" fill className="object-contain p-4" />
            </div>

            {/* ThinkZone */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/thinkzone-logo.png" alt="ThinkZone Ventures" fill className="object-contain p-4" />
            </div>

            {/* Sustainable Finance */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/sustainable-finance-logo.png" alt="Sustainable Finance - EuroCham Vietnam" fill className="object-contain p-4" />
            </div>

            {/* Beanstalk */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/beanstalk-logo.png" alt="Beanstalk" fill className="object-contain p-4" />
            </div>

            {/* Quest Ventures */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/quest-ventures-logo.png" alt="Quest Ventures" fill className="object-contain p-4" />
            </div>

            {/* APAC DAO */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/apacdao-logo.png" alt="APAC DAO" fill className="object-contain p-4" />
            </div>

            {/* VPlus */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/vplus-logo.png" alt="VPlus" fill className="object-contain p-4" />
            </div>

            {/* Indelible Ventures */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/indelible-ventures-logo.png" alt="Indelible Ventures" fill className="object-contain p-4" />
            </div>

            {/* Partner */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/partner-logo-2.png" alt="Partner" fill className="object-contain p-4" />
            </div>

            {/* Tony Blair Institute */}
            <div className="flex items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-24 md:h-32 relative">
              <Image src="/assets/img/tbi-logo.png" alt="Tony Blair Institute for Global Change" fill className="object-contain p-4" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
