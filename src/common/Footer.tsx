"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLang } from '@/i18n/LanguageContext';

const content = {
  joinUs: { en: 'Join Us', vi: 'Tham gia cùng chúng tôi' },
  fullName: { en: 'Full Name', vi: 'Họ và tên' },
  fullNamePlaceholder: { en: 'John Doe', vi: 'Nguyễn Văn A' },
  email: { en: 'Email', vi: 'Email' },
  emailPlaceholder: { en: 'email@example.com', vi: 'email@vidu.com' },
  company: { en: 'Company', vi: 'Công ty' },
  companyPlaceholder: { en: 'Company name', vi: 'Tên công ty' },
  phone: { en: 'Phone Number', vi: 'Số điện thoại' },
  phonePlaceholder: { en: '+84 123 456 789', vi: '+84 123 456 789' },
  message: { en: 'Message', vi: 'Tin nhắn' },
  messagePlaceholder: {
    en: 'Tell us more about your project...',
    vi: 'Cho chúng tôi biết thêm về dự án của bạn...',
  },
  submit: { en: 'Submit Registration', vi: 'Gửi đăng ký' },
  contactInfo: { en: 'Contact Information', vi: 'Thông tin liên hệ' },
  addressLabel: { en: 'Address', vi: 'Địa chỉ' },
  addressValue: {
    en: 'Da Nang Software Park 2, Nhu Nguyet Street, Hai Chau Ward, Da Nang City',
    vi: 'Khu Công viên Phần mềm Đà Nẵng số 2, Đường Như Nguyệt, Phường Hải Châu, TP. Đà Nẵng',
  },
  emailLabel: { en: 'Email', vi: 'Email' },
  workingHoursLabel: { en: 'Working Hours', vi: 'Giờ làm việc' },
  workingHoursValue: {
    en: 'Monday - Friday: 8:00 - 17:30 Saturday: 8:00 - 12:00',
    vi: 'Thứ Hai - Thứ Sáu: 8:00 - 17:30, Thứ Bảy: 8:00 - 12:00',
  },
  davasTitle: { en: 'Join DFL24 in DAVAS 2026', vi: 'Gặp DFL24 tại DAVAS 2026' },
  davasDesc: {
    en: 'Connect with fintech & AI experts in Da Nang.',
    vi: 'Kết nối cùng chuyên gia fintech & AI tại Đà Nẵng.',
  },
  learnMore: { en: 'Learn more', vi: 'Tìm hiểu thêm' },
  tagline: {
    en: 'The Future of Fintech Innovation & Sandbox Infrastructure',
    vi: 'Tương lai của đổi mới fintech & hạ tầng sandbox',
  },
  products: { en: 'Products', vi: 'Sản phẩm' },
  navSandbox: { en: 'Sandbox', vi: 'Sandbox' },
  navFunding: { en: 'Funding', vi: 'Vốn đầu tư' },
  company2: { en: 'Company', vi: 'Công ty' },
  navAbout: { en: 'About DFL24', vi: 'Về DFL24' },
  navVision: { en: 'Vision', vi: 'Tầm nhìn' },
  navPartners: { en: 'Partners', vi: 'Đối tác' },
  navContact: { en: 'Contact', vi: 'Liên hệ' },
  rights: {
    en: 'All rights reserved.',
    vi: 'Đã đăng ký bản quyền.',
  },
};

export default function Footer() {
  const { t } = useLang();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 space-y-14">
        <section className="grid lg:grid-cols-[1.9fr_0.9fr] gap-8">
          <div className="rounded-[1.75rem] border border-border bg-card/50 backdrop-blur-sm p-6 md:p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground font-heading">{t(content.joinUs)}</h3>

            {/* TODO: Replace with your Formspree endpoint: https://formspree.io/f/YOUR_ID */}
            <form className="mt-8 space-y-6" action="https://formspree.io/f/YOUR_ID" method="post">
              <div className="grid md:grid-cols-2 gap-5">
                <label className="space-y-2 block">
                  <span className="text-base md:text-lg font-semibold text-foreground">{t(content.fullName)} <span className="text-red-500">*</span></span>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder={t(content.fullNamePlaceholder)}
                    className="w-full rounded-xl border border-input bg-background px-5 py-3.5 text-base md:text-lg text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-base md:text-lg font-semibold text-foreground">{t(content.email)} <span className="text-red-500">*</span></span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t(content.emailPlaceholder)}
                    className="w-full rounded-xl border border-input bg-background px-5 py-3.5 text-base md:text-lg text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-base md:text-lg font-semibold text-foreground">{t(content.company)} <span className="text-red-500">*</span></span>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder={t(content.companyPlaceholder)}
                    className="w-full rounded-xl border border-input bg-background px-5 py-3.5 text-base md:text-lg text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-base md:text-lg font-semibold text-foreground">{t(content.phone)}</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t(content.phonePlaceholder)}
                    className="w-full rounded-xl border border-input bg-background px-5 py-3.5 text-base md:text-lg text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </label>
              </div>

              <label className="space-y-2 block">
                <span className="text-base md:text-lg font-semibold text-foreground">{t(content.message)} <span className="text-red-500">*</span></span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t(content.messagePlaceholder)}
                  className="w-full resize-y rounded-xl border border-input bg-background px-5 py-4 text-base md:text-lg text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-blue-electric py-4 text-xl font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-electric/90 hover:shadow-lg"
              >
                {t(content.submit)}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-[1.75rem] border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-xl">
              <h4 className="text-2xl md:text-3xl font-bold text-foreground font-heading">{t(content.contactInfo)}</h4>

              <div className="mt-8 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-foreground">{t(content.addressLabel)}</p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-1">{t(content.addressValue)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-foreground">{t(content.emailLabel)}</p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-1">contact@dfl24.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.15 12.8 19.8 19.8 0 0 1 2.08 4.09 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.64 2.61a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.47-1.27a2 2 0 0 1 2.11-.45c.84.31 1.71.52 2.61.64A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-foreground">{t(content.workingHoursLabel)}</p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-1">{t(content.workingHoursValue)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-navy to-blue-logo p-6 md:p-8 text-white shadow-xl">
              <h4 className="text-xl md:text-2xl font-bold font-heading">{t(content.davasTitle)}</h4>
              <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed">{t(content.davasDesc)}</p>
              <a href="https://davas.vc/" target="_blank" rel="noopener noreferrer" className="inline-flex mt-7 items-center gap-2 text-lg md:text-xl font-bold text-white underline underline-offset-4 hover:text-teal-light transition-colors">
                {t(content.learnMore)}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" /></svg>
              </a>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-4 gap-8 pt-2">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center bg-white rounded-lg px-2 py-1 shadow-sm">
                <Image src="/assets/img/dfl24-logo.png" alt="DFL24 Logo" width={100} height={32} className="h-7 w-auto object-contain" />
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t(content.tagline)}
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/dfl24/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.linkedin.com/showcase/fintech-sandbox-vietnam/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-teal hover:text-white transition-all duration-300 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div className="col-span-1 space-y-4">
            <h4 className="font-bold text-base text-foreground">{t(content.products)}</h4>
            <ul className="space-y-2 text-muted-foreground text-base">
              <li><Link href="/sandbox" className="hover:text-primary transition-colors">{t(content.navSandbox)}</Link></li>
              <li><Link href="/accelerator" className="hover:text-primary transition-colors">{t(content.navFunding)}</Link></li>
            </ul>
          </div>

          <div className="col-span-1 space-y-4">
            <h4 className="font-bold text-base text-foreground">{t(content.company2)}</h4>
            <ul className="space-y-2 text-muted-foreground text-base">
              <li><Link href="/about" className="hover:text-primary transition-colors">{t(content.navAbout)}</Link></li>
              <li><Link href="/vision" className="hover:text-primary transition-colors">{t(content.navVision)}</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition-colors">{t(content.navPartners)}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t(content.navContact)}</Link></li>
            </ul>
          </div>
        </section>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground flex gap-4 flex-wrap">
            <span>&copy; {currentYear} DFL24 — Danang Fintech Lab. {t(content.rights)}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
