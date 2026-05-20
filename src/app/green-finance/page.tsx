"use client";

import Layout from "@/common/Layout";
import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";

const content = {
  heroLead: { en: 'Pioneering', vi: 'Tiên phong' },
  heroHighlight: {
    en: 'Innovative Sustainable Finance',
    vi: 'Tài chính bền vững đổi mới',
  },
  heroTrail: { en: 'in Southeast Asia', vi: 'tại Đông Nam Á' },
  heroSubtitle: {
    en: 'We are building the infrastructure for a sustainable economy. From carbon credit markets to ESG scoring, DFL is the hub for green fintech innovation.',
    vi: 'Chúng tôi đang xây dựng hạ tầng cho một nền kinh tế bền vững. Từ thị trường tín chỉ carbon đến chấm điểm ESG, DFL là trung tâm đổi mới green fintech.',
  },
  initiativesTitle: { en: 'Core Initiatives', vi: 'Sáng kiến cốt lõi' },
  initiativesSubtitle: {
    en: 'Driving the transition to a net-zero economy through technology.',
    vi: 'Thúc đẩy chuyển đổi sang nền kinh tế net-zero thông qua công nghệ.',
  },
  init1Title: { en: 'Carbon Markets', vi: 'Thị trường Carbon' },
  init1Desc: {
    en: 'Developing transparent, blockchain-based platforms for carbon credit trading and verification (MRV), connecting local projects with global buyers.',
    vi: 'Phát triển các nền tảng minh bạch dựa trên blockchain để giao dịch và xác minh tín chỉ carbon (MRV), kết nối dự án trong nước với người mua toàn cầu.',
  },
  init2Title: { en: 'ESG Scoring', vi: 'Chấm điểm ESG' },
  init2Desc: {
    en: 'Leveraging AI and big data to provide accurate, real-time ESG scoring for SMEs and enterprises, facilitating access to green capital.',
    vi: 'Tận dụng AI và big data để cung cấp chấm điểm ESG chính xác, real-time cho SME và doanh nghiệp, mở đường tiếp cận nguồn vốn xanh.',
  },
  init3Title: { en: 'Green Bonds', vi: 'Trái phiếu Xanh' },
  init3Desc: {
    en: 'Facilitating the issuance and tokenization of green bonds to finance renewable energy and sustainable infrastructure projects.',
    vi: 'Hỗ trợ phát hành và token hoá trái phiếu xanh để tài trợ các dự án năng lượng tái tạo và hạ tầng bền vững.',
  },
  whyTitle: { en: 'Why Da Nang?', vi: 'Vì sao chọn Đà Nẵng?' },
  whyP1: {
    en: 'Da Nang has been consistently ranked as Vietnam\'s most livable and sustainable city. With a strong commitment to becoming a "Green City," it is the ideal testbed for sustainable finance solutions.',
    vi: 'Đà Nẵng liên tục được xếp hạng là thành phố đáng sống và bền vững nhất Việt Nam. Với cam kết mạnh mẽ trở thành "Thành phố Xanh", nơi đây là môi trường thử nghiệm lý tưởng cho các giải pháp tài chính bền vững.',
  },
  why1Strong: { en: 'Strategic Support:', vi: 'Hỗ trợ chiến lược:' },
  why1Text: {
    en: 'Backed by local government initiatives prioritizing green growth.',
    vi: 'Được hậu thuẫn bởi các sáng kiến của chính quyền địa phương ưu tiên tăng trưởng xanh.',
  },
  why2Strong: { en: 'Innovation Hub:', vi: 'Trung tâm đổi mới:' },
  why2Text: {
    en: 'A convergence of tech talent, policy sandbox, and impact investors.',
    vi: 'Nơi hội tụ nhân tài công nghệ, sandbox chính sách và các nhà đầu tư tạo tác động.',
  },
  ctaTitle: { en: 'Join the Sustainable Revolution', vi: 'Tham gia Cuộc Cách mạng Bền vững' },
  ctaSubtitle: {
    en: 'Whether you are building a climate fintech startup or looking to invest in sustainable solutions, DFL is your partner.',
    vi: 'Dù bạn đang xây dựng startup climate fintech hay tìm kiếm cơ hội đầu tư vào giải pháp bền vững, DFL là đối tác của bạn.',
  },
  getInvolved: { en: 'Get Involved', vi: 'Cùng tham gia' },
};

export default function GreenFinancePage() {
  const { t } = useLang();

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

            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">
              {t(content.heroLead)} <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-highlight">
                {t(content.heroHighlight)}
              </span> <br/>
              {t(content.heroTrail)}
            </h1>

            <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl leading-relaxed">
              {t(content.heroSubtitle)}
            </p>
          </div>
        </div>

        {/* Key Initiatives Grid */}
        <div id="initiatives" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">{t(content.initiativesTitle)}</h2>
            <p className="text-xl text-muted-foreground">{t(content.initiativesSubtitle)}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-accent/5 transition-all duration-300 space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.072-2.143-3-3-.928.857-1.928.857-3 3-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5c1.11 0 2.08-.75 2.5-1.81l.5.31Z"/><path d="M15.5 14.5a2.5 2.5 0 0 1-2.5-2.5c0-1.38.5-2 1-3 1.072-2.143 2.072-2.143 3-3 .928.857 1.928.857 3 3 .5 1 1 1.62 1 3a2.5 2.5 0 0 1-2.5 2.5c-1.11 0-2.08-.75-2.5-1.81l-.5.31Z"/><path d="M12 22v-6"/></svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">{t(content.init1Title)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(content.init1Desc)}</p>
            </div>

            <div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-secondary/5 transition-all duration-300 space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/></svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">{t(content.init2Title)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(content.init2Desc)}</p>
            </div>

            <div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-highlight/5 transition-all duration-300 space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-highlight/10 flex items-center justify-center text-highlight group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">{t(content.init3Title)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(content.init3Desc)}</p>
            </div>
          </div>
        </div>

        {/* Why Da Nang for Green Finance? */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative rounded-[2.5rem] overflow-hidden aspect-square md:aspect-auto md:h-[500px] border border-black/5 dark:border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10"></div>
            <Image
              src="/assets/img/da_nang_vietnam_skyl_ad6bb21a.jpg"
              alt="Eco City Da Nang"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {t(content.whyTitle)}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{t(content.whyP1)}</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span><strong>{t(content.why1Strong)}</strong> {t(content.why1Text)}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span><strong>{t(content.why2Strong)}</strong> {t(content.why2Text)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div id="collaborate" className="bg-secondary/10 dark:bg-secondary/20 rounded-[2.5rem] p-12 md:p-20 text-center space-y-8 border border-accent/20 shadow-xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">{t(content.ctaTitle)}</h2>
            <p className="text-xl text-muted-foreground">{t(content.ctaSubtitle)}</p>
          </div>

          <div className="pt-4">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-primary hover:bg-primary/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              {t(content.getInvolved)}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>

      </div>
    </Layout>
  );
}
