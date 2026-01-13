"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.6;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-40 pb-20 space-y-32">

      {/* Hero / Intro */}
      <div className="text-center space-y-6 max-w-4xl mx-auto fade-in-up">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter glow-text ">
          The Future of Finance <br/>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-500">
            Starts in Da Nang
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-muted-foreground">
          We are building the infrastructure for the next generation of financial technology in Vietnam&apos;s most livable city.
        </p>
      </div>

      {/* Section 1: DFL */}
      <div id="dfl" className="space-y-8 scroll-mt-32">
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0 min-h-125">
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-10 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight ">Da Nang Fintech Lab</h2>
              <p className="text-lg leading-relaxed font-medium text-muted-foreground">
                At the core of the ecosystem is DFL. We are the operational engine connecting policy with practice. DFL provides the physical space, the data infrastructure, and the AI tools necessary for startups to build compliant, cutting-edge financial products. We bridge the gap between traditional banking and the decentralized future.
              </p>
            </div>
            <div className="relative overflow-hidden h-full min-h-75 md:min-h-auto order-1 md:order-2">
              <div className="absolute inset-0 bg-linear-to-l from-card via-transparent to-transparent z-10"></div>
              <Image
                src="/assets/img/danang-night-bridge.jpg"
                alt="Da Nang Night Bridge"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* DFL Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 ">International Team</h3>
            <p className="text-muted-foreground">Bringing diverse perspectives and global experience to drive innovation in Vietnam.</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 ">Local Expertise</h3>
            <p className="text-muted-foreground">Deep understanding of the Vietnamese market, regulations, and cultural nuance.</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 ">World Experts in Fintech x AI</h3>
            <p className="text-muted-foreground">Pioneering the intersection of financial services and artificial intelligence.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-12">
        <div className="flex items-end justify-between border-b border-black/5 dark:border-white/5 pb-4">
          <h2 className="text-3xl md:text-4xl font-bold ">Team</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* My Ha Tran */}
          <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-75 flex flex-col justify-between">
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                <Image src="/assets/img/my-ha-tran.png" alt="My Ha Tran" fill className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-3xl font-bold ">My Ha Tran</h3>
                <a href="https://www.linkedin.com/in/tranhmy/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
              <p className=" font-bold mb-4">Founder</p>
              <p className="text-lg text-muted-foreground">
                A strategic leader driving innovation and investment between Europe and Asia. Based in France and Vietnam, she serves as President of VYBE, Partner at Da Nang International Financial Center, and VINEU Director of France
              </p>
            </div>
          </div>

          {/* Kiel DiGiovanni */}
          <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-75 flex flex-col justify-between">
            <div className="absolute inset-0 bg-linear-to-br from-teal-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                <Image src="/assets/img/kiel_digiovanni.png" alt="Kiel DiGiovanni" fill className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-3xl font-bold ">Kiel DiGiovanni</h3>
                <a href="https://www.linkedin.com/in/kiel-digiovanni/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
              <p className=" font-bold mb-4">Head of Operations</p>
              <p className="text-lg text-muted-foreground">
                Previously acted as COO of Expand and Motus Operandi, supporting business growth and China market expansion. He also co-founded SET FOR SET, an e-commerce fitness startup successfully sold in 2024.
              </p>
            </div>
          </div>

          {/* Vincenzo Cartelli */}
          <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-75 flex flex-col justify-between">
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                <Image src="/assets/img/vincenzo_cartelli.png" alt="Vincenzo Cartelli" fill className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-3xl font-bold ">Vincenzo Cartelli</h3>
                <a href="https://www.linkedin.com/in/vincenzo-cartelli/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
              <p className=" font-bold mb-4">Head of Technology</p>
              <p className="text-lg text-muted-foreground">
                CTO at Expand and CrossFund, with over 20 years of experience in enterprise architecture, blockchain, and AI. He also serves as a Research Collaborator at the University of Catania, bridging academic innovation with scalable commercial applications.
              </p>
            </div>
          </div>

          {/* Nikhil Porwal */}
          <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-75 flex flex-col justify-between">
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                <Image src="/assets/img/nikhil_porwal.png" alt="Nikhil Porwal" fill className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-3xl font-bold ">Nikhil Porwal</h3>
                <a href="https://www.linkedin.com/in/nikhilporwal/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
              <p className=" font-bold mb-4">Head of Finance</p>
              <p className="text-lg text-muted-foreground">
                A finance executive with over a decade of experience across APAC, including CFO-level roles overseeing operations in Hong Kong, Singapore, Indonesia, India, and China. Chartered Accountant (India) and CPA Australia.
              </p>
            </div>
          </div>

          {/* Luciano Wu */}
          <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-75 flex flex-col justify-between">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                <Image src="/assets/img/luciano_wu.png" alt="Luciano Wu" fill className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-3xl font-bold ">Luciano Wu</h3>
                <a href="https://www.linkedin.com/in/han4wluc/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
              <p className=" font-bold mb-4">Tech Lead</p>
              <p className="text-lg text-muted-foreground">
                Founder of Yuusoft, based in Singapore, he brings over a decade of experience in software development and leading engineering teams at startups including Xendit, Leyan Technologies, and edugo.ai.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Da Nang */}
      <div id="danang" className="space-y-8 scroll-mt-32">
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0 min-h-125">
            <div className="relative overflow-hidden h-full min-h-75 md:min-h-auto">
              <div className="absolute inset-0 bg-linear-to-r from-card via-transparent to-transparent z-10"></div>
              <Image
                src="/assets/img/da_nang_vietnam_skyl_ad6bb21a.jpg"
                alt="Da Nang Skyline"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight ">Da Nang: The Innovation Hub</h2>
              <p className="text-lg leading-relaxed font-medium text-muted-foreground">
                Known for its stunning coastline and high quality of life, Da Nang is rapidly transforming into Vietnam&apos;s premier hub for technology and innovation. With a strategic location, modern infrastructure, and a forward-thinking government, the city attracts top talent and investment from across the globe.
              </p>
            </div>
          </div>
        </div>

        {/* Da Nang Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 ">High Quality of Life</h3>
            <p className="text-muted-foreground">A perfect blend of urban convenience and natural beauty, attracting global talent.</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 ">Strategic Location</h3>
            <p className="text-muted-foreground">Central gateway connecting major Asian economies and markets.</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 ">Skilled Educated Young Workforce</h3>
            <p className="text-muted-foreground">Access to a vibrant talent pool from top universities and technical institutes.</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative group/carousel">
          <div ref={carouselRef} id="carousel-container" className="w-full overflow-x-auto flex snap-x snap-mandatory gap-6 pb-6 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar scroll-smooth">
            <div className="snap-center shrink-0 w-[85%] md:w-[60%] relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-xl group">
              <div className="aspect-video relative">
                <Image src="/assets/img/danang-masterplan-1.png" alt="Da Nang Masterplan 1" fill className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
            <div className="snap-center shrink-0 w-[85%] md:w-[60%] relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-xl group">
               <div className="aspect-video relative">
                <Image src="/assets/img/danang-masterplan-2.png" alt="Da Nang Masterplan 2" fill className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
            <div className="snap-center shrink-0 w-[85%] md:w-[60%] relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-xl group">
               <div className="aspect-video relative">
                <Image src="/assets/img/dragon-bridge-danang.jpg" alt="Da Nang Dragon Bridge" fill className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={() => scroll('left')} id="prev-slide" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md flex items-center justify-center text-white transition-all opacity-0 group-hover/carousel:opacity-100 md:-left-6 shadow-lg border border-white/10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={() => scroll('right')} id="next-slide" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md flex items-center justify-center text-white transition-all opacity-0 group-hover/carousel:opacity-100 md:-right-6 shadow-lg border border-white/10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* Infrastructure Stats */}
        <div className="bg-gray-100 rounded-[2.5rem] p-8 md:p-12 border border-black/5 dark:border-white/5">
          <h3 className="text-2xl font-bold  mb-8 text-center">Infrastructure at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-primary">2</div>
              <p className="text-sm font-bold ">Airports</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-blue-500">3</div>
              <p className="text-sm font-bold ">Seaports</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-purple-500">1</div>
              <p className="text-sm font-bold ">Hi-tech Park</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-orange-500">1</div>
              <p className="text-sm font-bold ">Free Trade Zone</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-teal-500">1</div>
              <p className="text-sm font-bold ">Open Economic Zone</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-indigo-500">9</div>
              <p className="text-sm font-bold ">Operating Industrial Zones</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-pink-500">4</div>
              <p className="text-sm font-bold ">Operating ICT Parks</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="pt-16 pb-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold glow-text  mb-4">Strategic Location in Vietnam</h3>
            <p className="text-lg text-muted-foreground">Da Nang: The Central Hub connecting North and South</p>
          </div>

          <div className="relative w-full max-w-[320px] mx-auto mt-8">
            <Image src="/assets/img/vndanangmap.png" alt="Vietnam Map highlighting Da Nang" width={320} height={640} className="w-full h-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>

      {/* Section 3: VIFC */}
      <div id="vifc" className="space-y-8 scroll-mt-32">
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0 min-h-125">
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-10 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight ">Vietnam International Finance Center</h2>
              <p className="text-lg leading-relaxed font-medium text-muted-foreground">
                The VIFC is a policy sandbox and economic zone designed to rival global financial hubs. It offers regulatory flexibility, tax incentives, and a world-class environment for financial institutions, fintech startups, and venture capital firms to collaborate and scale.
              </p>
            </div>
            <div className="relative overflow-hidden h-full min-h-75 md:min-h-auto order-1 md:order-2">
              <div className="absolute inset-0 bg-linear-to-l from-card via-transparent to-transparent z-10"></div>
              <Image
                src="/assets/img/modern_futuristic_fi_8e5bd67a.jpg"
                alt="Vietnam International Finance Center"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* VIFC Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 ">Policy Sandbox</h3>
            <p className="text-muted-foreground">A safe environment to test and deploy innovative financial technologies.</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 ">Robust Legal Framework</h3>
            <p className="text-muted-foreground">Clear regulations and protections creating a secure environment for innovation.</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 ">Global Connectivity</h3>
            <p className="text-muted-foreground">Seamless integration with international financial markets and partners.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center space-y-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold glow-text ">Join the Revolution</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you are a startup looking to accelerate, an investor seeking opportunities, or an institution ready to innovate, DFL is your partner in Da Nang.
        </p>
        <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full bg-primary text-white shadow hover:bg-primary/90 h-11 px-8">
          Get in Touch
        </Link>
      </div>

    </div>
  );
}
