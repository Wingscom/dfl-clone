"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";

const content = {
  heroLead: { en: 'The Future of', vi: 'Tương lai của' },
  heroHighlight: {
    en: 'Blockchain Innovation',
    vi: 'Đổi mới Blockchain',
  },
  heroSubtitle: {
    en: "Build, test, and scale your blockchain solutions in Vietnam's premier regulatory sandbox. We provide the legal framework, you provide the innovation.",
    vi: 'Xây dựng, thử nghiệm và scale các giải pháp blockchain của bạn trong sandbox pháp lý hàng đầu Việt Nam. Chúng tôi cung cấp khung pháp lý, bạn mang đến sự đổi mới.',
  },
  benefit1Title: { en: 'Regulatory Sandbox', vi: 'Sandbox Pháp lý' },
  benefit1Desc: {
    en: 'Operate with confidence under a clear legal framework supervised by local authorities. Test tokenization, DeFi, and digital assets safely.',
    vi: 'Hoạt động an tâm dưới khung pháp lý rõ ràng được cơ quan chức năng địa phương giám sát. Thử nghiệm tokenization, DeFi và tài sản số một cách an toàn.',
  },
  benefit2Title: { en: 'Speed to Market', vi: 'Tốc độ ra thị trường' },
  benefit2Desc: {
    en: 'Fast-track licensing and business setup. Get your product in front of users faster with our streamlined compliance processes.',
    vi: 'Cấp phép và thành lập doanh nghiệp theo đường nhanh. Đưa sản phẩm đến tay người dùng nhanh hơn nhờ quy trình tuân thủ tinh gọn.',
  },
  benefit3Title: { en: 'Access to Talent', vi: 'Tiếp cận nhân tài' },
  benefit3Desc: {
    en: "Tap into Vietnam's deep pool of blockchain developers and engineers. Leverage high-quality technical talent at competitive costs.",
    vi: 'Khai thác nguồn dev và kỹ sư blockchain dồi dào của Việt Nam. Tận dụng nhân tài kỹ thuật chất lượng cao với chi phí cạnh tranh.',
  },
  focusTitle: { en: 'Core Focus Areas', vi: 'Lĩnh vực trọng tâm' },
  focusSubtitle: {
    en: 'We are looking for innovative startups building in these key sectors.',
    vi: 'Chúng tôi tìm kiếm các startup đổi mới đang xây dựng trong những lĩnh vực then chốt này.',
  },
  area1Title: { en: 'DeFi & Digital Assets', vi: 'DeFi & Tài sản số' },
  area1Desc: {
    en: 'Next-generation decentralized finance protocols, asset management tools, and digital asset exchanges.',
    vi: 'Các giao thức tài chính phi tập trung thế hệ mới, công cụ quản lý tài sản và sàn giao dịch tài sản số.',
  },
  area2Title: { en: 'Real World Assets (RWA)', vi: 'Tài sản thực (RWA)' },
  area2Desc: {
    en: 'Tokenization of real estate, commodities, and other tangible assets to increase liquidity and accessibility.',
    vi: 'Tokenization bất động sản, hàng hóa và các tài sản hữu hình khác để tăng thanh khoản và khả năng tiếp cận.',
  },
  area3Title: { en: 'Enterprise Blockchain', vi: 'Blockchain Doanh nghiệp' },
  area3Desc: {
    en: 'Supply chain tracking, identity management, and private blockchain solutions for large-scale enterprises.',
    vi: 'Theo dõi chuỗi cung ứng, quản lý danh tính và các giải pháp private blockchain cho doanh nghiệp quy mô lớn.',
  },
  area4Title: { en: 'Blockchain Infrastructure', vi: 'Hạ tầng Blockchain' },
  area4Desc: {
    en: 'Developer tools, security solutions, and scalability layers that form the backbone of the decentralized web.',
    vi: 'Công cụ cho developer, giải pháp bảo mật và các lớp scalability — xương sống của web phi tập trung.',
  },
  ctaTitle: { en: 'Start Building the Future', vi: 'Bắt đầu xây tương lai' },
  ctaSubtitle: {
    en: 'Join the DFL Blockchain Track and get the support you need to turn your vision into reality.',
    vi: 'Tham gia DFL Blockchain Track và nhận sự hỗ trợ bạn cần để biến tầm nhìn thành hiện thực.',
  },
  ctaButton: { en: 'Apply for the Program', vi: 'Đăng ký chương trình' },
};

export default function Page() {
  const { t } = useLang();

  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");

  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30 animate-blob animation-delay-4000" />
      </div>

      <main>
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-32">
          {/* Hero Section */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl min-h-[60vh] flex items-center">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />
              <Image
                src="/assets/img/blockchain-hero.jpg"
                alt="Blockchain Future"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-20 max-w-4xl p-12 md:p-20 space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading tracking-tighter leading-tight text-white">
                {t(content.heroLead)} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-highlight">
                  {t(content.heroHighlight)}
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl leading-relaxed">
                {t(content.heroSubtitle)}
              </p>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-accent/5 transition-all duration-300 space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-heading ">{t(content.benefit1Title)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(content.benefit1Desc)}</p>
            </div>

            <div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-accent/5 transition-all duration-300 space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-heading ">{t(content.benefit2Title)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(content.benefit2Desc)}</p>
            </div>

            <div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-secondary/5 transition-all duration-300 space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" x2="23" y1="8" y2="11" />
                  <line x1="23" x2="20" y1="8" y2="11" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-heading ">{t(content.benefit3Title)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(content.benefit3Desc)}</p>
            </div>
          </div>

          {/* Focus Areas */}
          <div id="program-details" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading ">{t(content.focusTitle)}</h2>
              <p className="text-xl text-muted-foreground">{t(content.focusSubtitle)}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-6 p-8 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-colors">
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white shadow-lg">
                  <span className="text-2xl font-bold">01</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-heading ">{t(content.area1Title)}</h3>
                  <p className="text-muted-foreground text-lg">{t(content.area1Desc)}</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-colors">
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-highlight flex items-center justify-center text-white shadow-lg">
                  <span className="text-2xl font-bold">02</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-heading ">{t(content.area2Title)}</h3>
                  <p className="text-muted-foreground text-lg">{t(content.area2Desc)}</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-colors">
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-highlight to-accent flex items-center justify-center text-white shadow-lg">
                  <span className="text-2xl font-bold">03</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-heading ">{t(content.area3Title)}</h3>
                  <p className="text-muted-foreground text-lg">{t(content.area3Desc)}</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-colors">
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white shadow-lg">
                  <span className="text-2xl font-bold">04</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-heading ">{t(content.area4Title)}</h3>
                  <p className="text-muted-foreground text-lg">{t(content.area4Desc)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div id="apply" className="bg-black rounded-[2.5rem] p-12 md:p-20 text-center space-y-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/img/grid-pattern.svg')] opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">{t(content.ctaTitle)}</h2>
              <p className="text-xl text-gray-300">{t(content.ctaSubtitle)}</p>
            </div>

            <div className="relative z-10 pt-4">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-primary hover:bg-primary/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                {t(content.ctaButton)}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
