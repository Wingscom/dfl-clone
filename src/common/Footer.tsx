import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 space-y-14">
        <section className="grid lg:grid-cols-[1.9fr_0.9fr] gap-8">
          <div className="rounded-[1.75rem] border border-border bg-card/50 backdrop-blur-sm p-6 md:p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Join Us</h3>

            <form className="mt-8 space-y-6" action="#" method="post">
              <div className="grid md:grid-cols-2 gap-5">
                <label className="space-y-2 block">
                  <span className="text-base md:text-lg font-semibold text-foreground">Full Name <span className="text-red-500">*</span></span>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-input bg-background px-5 py-3.5 text-base md:text-lg text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-base md:text-lg font-semibold text-foreground">Email <span className="text-red-500">*</span></span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-input bg-background px-5 py-3.5 text-base md:text-lg text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-base md:text-lg font-semibold text-foreground">Company <span className="text-red-500">*</span></span>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Company name"
                    className="w-full rounded-xl border border-input bg-background px-5 py-3.5 text-base md:text-lg text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-base md:text-lg font-semibold text-foreground">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+84 123 456 789"
                    className="w-full rounded-xl border border-input bg-background px-5 py-3.5 text-base md:text-lg text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </label>
              </div>

              <label className="space-y-2 block">
                <span className="text-base md:text-lg font-semibold text-foreground">Message <span className="text-red-500">*</span></span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us more about your project..."
                  className="w-full resize-y rounded-xl border border-input bg-background px-5 py-4 text-base md:text-lg text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-4 text-lg md:text-xl font-bold text-white shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
              >
                Submit Registration
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-[1.75rem] border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-xl">
              <h4 className="text-2xl md:text-3xl font-bold text-foreground">Contact Information</h4>

              <div className="mt-8 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-foreground">Address</p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-1">Da Nang Software Park, Ngu Hanh Son District, Da Nang</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-foreground">Email</p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-1">phong.do@dfl24.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.15 12.8 19.8 19.8 0 0 1 2.08 4.09 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.64 2.61a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.47-1.27a2 2 0 0 1 2.11-.45c.84.31 1.71.52 2.61.64A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-foreground">Working Hours</p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-1">Monday - Friday: 8:00 - 17:30 Saturday: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-primary p-6 md:p-8 text-primary-foreground shadow-xl">
              <h4 className="text-2xl md:text-3xl font-bold">Join the Community</h4>
              <p className="mt-4 text-base md:text-lg text-primary-foreground/90 leading-relaxed">Connect with AI experts in Da Nang.</p>
              <Link href="/partners" className="inline-flex mt-7 items-center gap-2 text-lg md:text-xl font-bold text-primary-foreground underline underline-offset-4 hover:text-primary-foreground/90 transition-colors">
                Learn more
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" /></svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-5 gap-8 pt-2">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image src="/assets/img/logo-v2-dfl.jpg" alt="DFL Logo" width={100} height={32} className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm">
              The Future of Green Finance & Digital Innovation
            </p>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground font-medium border-l-2 border-primary pl-3">
                Strategic Initiative under Resolution 259/NQ-CP<br/>
                Creating Vietnam&apos;s Global Financial Center
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/110184383" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div className="col-span-1 space-y-4">
            <h4 className="font-bold text-base text-foreground">About</h4>
            <ul className="space-y-2 text-muted-foreground text-base">
              <li><Link href="/about" className="hover:text-primary transition-colors">DFL</Link></li>
              <li><Link href="/vision" className="hover:text-primary transition-colors">Vision</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div className="col-span-1 space-y-4">
            <h4 className="font-bold text-base text-foreground">Programs</h4>
            <ul className="space-y-2 text-muted-foreground text-base">
              <li><Link href="/accelerator" className="hover:text-primary transition-colors">Accelerator</Link></li>
              <li><Link href="/sandbox" className="hover:text-primary transition-colors">Sandbox</Link></li>
              <li><Link href="/blockchain" className="hover:text-primary transition-colors">Blockchain</Link></li>
            </ul>
          </div>

          <div className="col-span-1 space-y-4">
            <h4 className="font-bold text-base text-foreground">Ecosystem</h4>
            <ul className="space-y-2 text-muted-foreground text-base">
              <li><Link href="/data" className="hover:text-primary transition-colors">Market Data</Link></li>
              <li><Link href="/green-finance" className="hover:text-primary transition-colors">Green Finance</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </section>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground flex gap-4 flex-wrap">
            <span>© {currentYear} Da Nang Fintech Lab. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
