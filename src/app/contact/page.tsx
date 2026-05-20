"use client";

import Layout from '@/common/Layout';
import { useEffect } from 'react';
import { useLang } from '@/i18n/LanguageContext';

const content = {
  taglineLead: {
    en: 'For founders building at the frontier of Vietnamese fintech —',
    vi: 'Với những founder đang tiên phong trong fintech Việt Nam —',
  },
  taglineHighlight: {
    en: 'we walk with you.',
    vi: 'chúng tôi đồng hành cùng bạn.',
  },
  paragraphs: [
    {
      en: "Some of Vietnam's boldest fintech ideas are moving faster than the rules written for them. We see you — and we walk with you.",
      vi: "Có những ý tưởng fintech táo bạo nhất của Việt Nam đang lớn nhanh hơn cả khung pháp lý kịp định hình. Chúng tôi hiểu bạn — và đồng hành cùng bạn.",
    },
    {
      en: "With VIFC Danang, DFL24 gives you a real sandbox to build, test, and prove what works with real users and data. That evidence is what we bring to government to shape the frameworks your category needs.",
      vi: "Cùng VIFC Danang, DFL24 mang đến một sandbox thực sự để bạn build, test, và chứng minh điều gì hoạt động — với user thật và dữ liệu thật. Bằng chứng đó là nền tảng chúng tôi mang đến chính phủ để kiến tạo khung pháp lý cho lĩnh vực của bạn.",
    },
    {
      en: "Plugged into the VIFC ecosystem, you get the infrastructure, capital, and partners to scale — from prototype to Vietnam's next unicorn. You bring the idea; we bring the sandbox, data, policy, and ecosystem. Let's build it together.",
      vi: "Kết nối hệ sinh thái VIFC, bạn có hạ tầng, vốn, và đối tác để scale — từ prototype đến kỳ lân Việt Nam tiếp theo. Bạn mang ý tưởng; chúng tôi mang sandbox, dữ liệu, chính sách, và hệ sinh thái. Cùng nhau xây nó.",
    },
  ],
  signoff: { en: '— The team at DFL24', vi: '— Đội ngũ DFL24' },
  cta: { en: 'Click here to apply', vi: 'Nhấn vào đây để đăng ký' },
  orWrite: { en: 'Or write to us', vi: 'Hoặc gửi thư cho chúng tôi' },
};

export default function Contact() {
  const { t } = useLang();

  useEffect(() => {
    const link = document.getElementById('contact-email') as HTMLAnchorElement | null;
    const u = 'contact';
    const d = 'dfl24.com';

    if (!link) return;

    const tm = setTimeout(() => {
      link.href = `mailto:${u}@${d}`;
      link.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        ${u}@${d}
      `;
    }, 500);

    return () => clearTimeout(tm);
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 mt-20 pb-20 flex flex-col items-center">
        <div className="max-w-3xl w-full space-y-12 fade-in-up">

          <div className="space-y-6 text-left md:text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight glow-text text-foreground leading-tight">
              {t(content.taglineLead)}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t(content.taglineHighlight)}
              </span>
            </h2>

            <div className="space-y-4">
              {content.paragraphs.map((p, i) => (
                <p key={i} className="text-base md:text-lg font-medium text-muted-foreground leading-relaxed">
                  {t(p)}
                </p>
              ))}
            </div>

            <p className="text-lg font-bold text-foreground font-heading italic">
              {t(content.signoff)}
            </p>
          </div>

          <div className="pt-4 flex flex-col items-center gap-2">
            <a
              href="https://app.dfl24.com/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-blue-electric hover:bg-blue-electric/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {t(content.cta)}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="pt-2 flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">{t(content.orWrite)}</p>
            <a
              id="contact-email"
              href="#"
              className="inline-flex items-center justify-center gap-2 text-lg md:text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <span className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></span>
            </a>
          </div>

        </div>
      </div>
    </Layout>
  );
}
