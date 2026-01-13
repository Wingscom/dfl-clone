"use client";

import Layout from '@/common/Layout';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    // Simple obfuscation to prevent basic scraping
    const link = document.getElementById('contact-email') as HTMLAnchorElement;
    const u = 'contact';
    const d = 'dfl.center';

    if (link) {
      setTimeout(() => {
        link.href = `mailto:${u}@${d}`;
        link.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          ${u}@${d}
        `;
      }, 500);
    }
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 mt-20 pb-20 min-h-[60vh] flex flex-col items-center justify-center">

        <div className="text-center space-y-8 fade-in-up max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter glow-text text-black dark:text-white">
            Ready to Shape <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
              the Future?
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            Join us at the Da Nang Fintech Lab and be part of the next wave of financial innovation.
          </p>

          <div className="pt-8">
            <a id="contact-email" href="#" className="inline-flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors">
              {/* Email will be injected by JS to prevent scraping */}
              <span className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></span>
            </a>
          </div>
        </div>

      </div>
    </Layout>
  );
}
