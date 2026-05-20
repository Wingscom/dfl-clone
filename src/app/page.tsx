"use client";

import Layout from "@/common/Layout";
import Link from "next/link";
import { FadeInUp } from "@/common/AnimationWrapper";
import { useLang, type LangPair } from "@/i18n/LanguageContext";

const content = {
  heroBadge: { en: 'Sandbox Testing in VIFC Danang', vi: 'Thử nghiệm Sandbox tại VIFC Danang' },
  heroLead: { en: 'Your Gateway to', vi: 'Cánh cửa của bạn đến' },
  heroHighlight: { en: 'Fintech Innovation', vi: 'Đổi mới Fintech' },
  heroTrail: { en: 'in Vietnam', vi: 'tại Việt Nam' },
  heroSubtitle: {
    en: 'Sandbox-as-a-Service. Cross-border testing. Regulatory acceleration. Everything fintech companies need to build, test, and scale — in one platform.',
    vi: 'Sandbox-as-a-Service. Thử nghiệm cross-border. Tăng tốc pháp lý. Tất cả những gì các công ty fintech cần để build, test và scale — trên một nền tảng duy nhất.',
  },
  applySandbox: { en: 'Apply for Sandbox', vi: 'Đăng ký Sandbox' },
  joinDavas: { en: 'Join DFL24 in DAVAS 2026', vi: 'Gặp DFL24 tại DAVAS 2026' },

  aboutTitle: { en: 'About DFL24', vi: 'Về DFL24' },
  aboutP1: {
    en: 'DFL24 – Danang Fintech Lab. Where innovation meets sovereignty. Where every district becomes a gateway to the future.',
    vi: 'DFL24 – Danang Fintech Lab. Nơi đổi mới gặp chủ quyền. Nơi mỗi quận huyện trở thành cánh cửa đến tương lai.',
  },
  aboutP2Before: {
    en: 'DFL24 is not just a fintech sandbox. It is a purpose-built innovation ecosystem, strategically anchored inside the ',
    vi: 'DFL24 không chỉ là một sandbox fintech. Đây là một hệ sinh thái đổi mới được xây dựng có mục đích, neo đậu chiến lược bên trong ',
  },
  aboutP2Strong1: {
    en: 'Vietnam International Financial Centre (VIFC)',
    vi: 'Trung tâm Tài chính Quốc tế Việt Nam (VIFC)',
  },
  aboutP2Mid: {
    en: ' in Danang. As one of the first 10 strategic investors licensed as members of ',
    vi: ' tại Đà Nẵng. Là một trong 10 nhà đầu tư chiến lược đầu tiên được cấp phép thành viên của ',
  },
  aboutP2Strong2: { en: 'VIFC Danang', vi: 'VIFC Danang' },
  aboutP2After: {
    en: ", we stand at the forefront of shaping Vietnam's new financial landscape.",
    vi: ', chúng tôi đứng ở tuyến đầu trong việc kiến tạo bức tranh tài chính mới của Việt Nam.',
  },

  feat1Title: { en: 'Sandbox 2.0 Infrastructure', vi: 'Hạ tầng Sandbox 2.0' },
  feat1Desc: {
    en: 'A living laboratory that enables real-world testing with real data, real users, and real market dynamics.',
    vi: 'Một phòng thí nghiệm sống cho phép thử nghiệm thực tế với dữ liệu thật, user thật và động lực thị trường thật.',
  },
  feat2Title: { en: 'Regulatory & Legal Navigation', vi: 'Định hướng Pháp lý' },
  feat2Desc: {
    en: 'Direct support from experts to streamline approvals and embed compliance from day one.',
    vi: 'Hỗ trợ trực tiếp từ chuyên gia để xin phê duyệt nhanh gọn và tích hợp tuân thủ ngay từ ngày đầu.',
  },
  feat3Title: { en: 'Cross-Border Testing', vi: 'Thử nghiệm Cross-border' },
  feat3Desc: {
    en: "A launchpad to Southeast Asia's most vibrant economies, enabling seamless piloting and scaling across borders.",
    vi: 'Bệ phóng đến các nền kinh tế năng động nhất Đông Nam Á, cho phép pilot và scale xuyên biên giới một cách mượt mà.',
  },
  feat4Title: { en: 'Corporate Innovation Programs', vi: 'Chương trình Đổi mới Doanh nghiệp' },
  feat4Desc: {
    en: 'Tailored collaborations with financial institutions and enterprises to co-create next-generation solutions.',
    vi: 'Hợp tác may đo cùng các định chế tài chính và doanh nghiệp để cùng kiến tạo giải pháp thế hệ mới.',
  },
  feat5Title: { en: 'End-to-End Growth Support', vi: 'Hỗ trợ Tăng trưởng End-to-End' },
  feat5Desc: {
    en: 'From incubation and acceleration to go-to-market execution, de-risking every step of the journey.',
    vi: 'Từ ươm tạo, tăng tốc đến triển khai go-to-market, giảm rủi ro ở mọi bước của hành trình.',
  },

  storyTitle: { en: 'The Story Behind "24"', vi: 'Câu chuyện đằng sau "24"' },
  storyP1: {
    en: '24 is not a year. It is not a number of hours. It is a statement of identity, unity, and ambition.',
    vi: '24 không phải là một năm. Không phải số giờ. Đó là tuyên ngôn về bản sắc, sự thống nhất và khát vọng.',
  },
  storyP2: {
    en: '24 stands for the 24 districts and townships of Danang – including the two island districts of Hoàng Sa (Paracel) and Trường Sa (Spratly).',
    vi: '24 đại diện cho 24 quận, huyện và thị trấn của Đà Nẵng – bao gồm hai huyện đảo Hoàng Sa và Trường Sa.',
  },
  story1Title: { en: 'Completeness', vi: 'Sự Trọn vẹn' },
  story1Desc: {
    en: 'Just as 24 districts make Đà Nẵng whole, DFL24 brings together every piece of the fintech puzzle: regulation, infrastructure, capital, and talent.',
    vi: 'Như 24 quận huyện làm nên Đà Nẵng trọn vẹn, DFL24 kết hợp mọi mảnh ghép của bức tranh fintech: pháp lý, hạ tầng, vốn và nhân tài.',
  },
  story2Title: { en: 'Unwavering Presence', vi: 'Hiện diện Không ngừng' },
  story2Desc: {
    en: 'Like the 24/7 rhythm of a city that never sleeps, we stand ready to support innovators anytime, anywhere.',
    vi: 'Như nhịp 24/7 của một thành phố không bao giờ ngủ, chúng tôi luôn sẵn sàng hỗ trợ các nhà đổi mới mọi lúc, mọi nơi.',
  },
  story3Title: { en: 'A Vision Without Borders', vi: 'Tầm nhìn Không Biên giới' },
  story3Desc: {
    en: 'The two island districts remind us that true innovation knows no boundaries.',
    vi: 'Hai huyện đảo nhắc chúng tôi rằng đổi mới thực sự không có ranh giới.',
  },
  story4Title: { en: 'Rooted Yet Global', vi: 'Gốc rễ vững — Tầm vóc toàn cầu' },
  story4Desc: {
    en: 'We draw strength from our local foundation, while thinking and acting on a global scale. 24 is our anchor; Southeast Asia is our horizon.',
    vi: 'Chúng tôi lấy sức mạnh từ nền tảng địa phương, đồng thời tư duy và hành động ở tầm toàn cầu. 24 là điểm tựa; Đông Nam Á là chân trời.',
  },
  storyTagline: {
    en: 'More Than a Sandbox. A Launchpad with Purpose.',
    vi: 'Hơn cả một Sandbox. Một Bệ phóng có Mục đích.',
  },

  productSuiteTitle: { en: 'Our Product Suite', vi: 'Bộ sản phẩm của chúng tôi' },
  whatYouGet: { en: 'What you get:', vi: 'Bạn nhận được:' },
  useCases: { en: 'Use cases:', vi: 'Trường hợp sử dụng:' },

  ps1Title: { en: '1. Sandbox-as-a-Service', vi: '1. Sandbox-as-a-Service' },
  ps1Tagline: { en: 'Launch fast. Test safely. Scale with confidence.', vi: 'Triển khai nhanh. Thử nghiệm an toàn. Scale tự tin.' },
  ps1Item1: { en: 'Secure cloud sandbox environment', vi: 'Môi trường sandbox cloud an toàn' },
  ps1Item2: { en: 'API integrations (Payment, KYC, Banking simulation)', vi: 'Tích hợp API (Payment, KYC, mô phỏng ngân hàng)' },
  ps1Item3: { en: 'Built-in compliance layer (KYC/AML, reporting)', vi: 'Lớp tuân thủ tích hợp sẵn (KYC/AML, báo cáo)' },
  ps1Use1: { en: 'Payment flow testing', vi: 'Thử nghiệm luồng thanh toán' },
  ps1Use2: { en: 'Credit scoring models', vi: 'Mô hình credit scoring' },
  ps1Use3: { en: 'Crypto on/off ramp validation', vi: 'Validation crypto on/off ramp' },

  ps2Title: { en: '2. Cross-border Sandbox', vi: '2. Sandbox Cross-border' },
  ps2Tagline: { en: 'Test across markets. Launch globally.', vi: 'Thử nghiệm xuyên thị trường. Triển khai toàn cầu.' },
  ps2Item1: { en: 'Multi-market testing (Vietnam ↔ International)', vi: 'Thử nghiệm đa thị trường (Việt Nam ↔ Quốc tế)' },
  ps2Item2: { en: 'FX simulation & multi-currency flows', vi: 'Mô phỏng FX & luồng đa tiền tệ' },
  ps2Item3: { en: 'Regulatory advisory & pilot structuring', vi: 'Tư vấn pháp lý & thiết kế pilot' },

  ps3Title: { en: '3. Corporate Sandbox Program', vi: '3. Chương trình Sandbox Doanh nghiệp' },
  ps3Item1: { en: 'Startup solution testing environment', vi: 'Môi trường thử nghiệm giải pháp startup' },
  ps3Item2: { en: 'Curated deal flow access', vi: 'Truy cập deal flow được chọn lọc' },
  ps3Item3: { en: 'Pilot execution (4–12 weeks) with KPI tracking', vi: 'Triển khai pilot (4–12 tuần) với theo dõi KPI' },
  ps3Use1: { en: 'AI fraud detection (banks)', vi: 'Phát hiện gian lận bằng AI (ngân hàng)' },
  ps3Use2: { en: 'Cross-border payments (airlines)', vi: 'Thanh toán cross-border (hàng không)' },
  ps3Use3: { en: 'Embedded lending (platforms)', vi: 'Embedded lending (platform)' },

  ps4Title: { en: '4. Embedded Finance Lab', vi: '4. Embedded Finance Lab' },
  ps4Tagline: { en: 'Monetize your platform with financial services.', vi: 'Khai thác doanh thu từ platform của bạn bằng dịch vụ tài chính.' },
  ps4Item1: { en: 'Embedded finance design (payments, lending, wallets)', vi: 'Thiết kế embedded finance (thanh toán, lending, ví)' },
  ps4Item2: { en: 'Sandbox testing & API integration', vi: 'Thử nghiệm sandbox & tích hợp API' },
  ps4Item3: { en: 'Go-to-market & pilot launch support', vi: 'Hỗ trợ go-to-market & triển khai pilot' },
  ps4Use1: { en: 'SaaS integrating payments', vi: 'SaaS tích hợp thanh toán' },
  ps4Use2: { en: 'Marketplace offering lending', vi: 'Marketplace cung cấp lending' },
  ps4Use3: { en: 'Platforms launching wallets', vi: 'Platform ra mắt ví' },

  ps5Title: { en: '5. Compliance Sandbox', vi: '5. Sandbox Tuân thủ' },
  ps5Tagline: { en: 'Test compliance before regulators do.', vi: 'Kiểm thử tuân thủ trước khi cơ quan quản lý làm.' },
  ps5Item1: { en: 'KYC / AML / transaction monitoring testing', vi: 'Thử nghiệm KYC / AML / giám sát giao dịch' },
  ps5Item2: { en: 'Risk simulation & audit scenarios', vi: 'Mô phỏng rủi ro & kịch bản kiểm toán' },
  ps5Item3: { en: 'Regulatory advisory & sandbox readiness', vi: 'Tư vấn pháp lý & sẵn sàng cho sandbox' },
  ps5Use1: { en: 'Crypto AML testing', vi: 'Kiểm thử AML cho crypto' },
  ps5Use2: { en: 'Compliance AI validation', vi: 'Validation AI tuân thủ' },
  ps5Use3: { en: 'RegTech product certification', vi: 'Chứng nhận sản phẩm RegTech' },

  bundlesTitle: { en: 'Bundled Solutions', vi: 'Gói giải pháp' },
  bundle1Title: { en: 'Startup Package', vi: 'Gói Startup' },
  bundle1Desc: { en: 'Sandbox + Compliance', vi: 'Sandbox + Tuân thủ' },
  bundle2Title: { en: 'Scale-up Package', vi: 'Gói Scale-up' },
  bundle2Desc: { en: 'Cross-border + Compliance', vi: 'Cross-border + Tuân thủ' },
  bundle3Title: { en: 'Corporate Package', vi: 'Gói Doanh nghiệp' },
  bundle3Desc: { en: 'Sandbox + Deal Flow', vi: 'Sandbox + Deal Flow' },

  cohortTitle: { en: 'Cohort 01 — 2026', vi: 'Cohort 01 — 2026' },
  statStartups: { en: 'startups', vi: 'startup' },
  statCorporates: { en: 'corporates', vi: 'doanh nghiệp' },
  statMonths: { en: 'months', vi: 'tháng' },
  cohortTagline: {
    en: "Your fast track into Vietnam's fintech ecosystem",
    vi: 'Lối tắt nhanh vào hệ sinh thái fintech Việt Nam',
  },
  cohortBenefit1: { en: 'Full sandbox access', vi: 'Truy cập sandbox đầy đủ' },
  cohortBenefit2: { en: 'Regulatory support', vi: 'Hỗ trợ pháp lý' },
  cohortBenefit3: { en: 'Pilot execution', vi: 'Triển khai pilot' },
  cohortBenefit4: { en: 'Investor & partner exposure', vi: 'Cơ hội tiếp xúc nhà đầu tư & đối tác' },

  whyTitle: { en: 'Why DFL24', vi: 'Vì sao chọn DFL24' },
  why1Title: { en: 'Speed', vi: 'Tốc độ' },
  why1Desc: { en: 'Launch sandbox in weeks, not months', vi: 'Triển khai sandbox trong vài tuần, không phải vài tháng' },
  why2Title: { en: 'Regulatory Access', vi: 'Tiếp cận Pháp lý' },
  why2Desc: { en: 'Direct pathway into Vietnam sandbox frameworks', vi: 'Lối đi trực tiếp vào các khung sandbox Việt Nam' },
  why3Title: { en: 'Cross-border Capability', vi: 'Năng lực Cross-border' },
  why3Desc: { en: 'Test globally from one platform', vi: 'Thử nghiệm toàn cầu từ một platform' },
  why4Title: { en: 'Cost Advantage', vi: 'Lợi thế Chi phí' },
  why4Desc: { en: '4–5× cheaper than Singapore', vi: 'Rẻ hơn Singapore 4–5 lần' },
  why5Title: { en: 'Full-stack Support', vi: 'Hỗ trợ Full-stack' },
  why5Desc: { en: 'Tech + compliance + market entry', vi: 'Công nghệ + tuân thủ + thâm nhập thị trường' },

  ctaTitle: { en: 'Ready to build in Vietnam?', vi: 'Sẵn sàng build tại Việt Nam?' },
  ctaSubtitle: {
    en: 'Book a free consultation and enter the DFL24 sandbox ecosystem.',
    vi: 'Đặt lịch tư vấn miễn phí và bước vào hệ sinh thái sandbox DFL24.',
  },
  ctaApply: { en: 'Apply Now', vi: 'Đăng ký ngay' },
  ctaTalk: { en: 'Talk to our team', vi: 'Nói chuyện với đội ngũ' },
};

type Feature = { title: LangPair; desc: LangPair; icon: string };
type WhyItem = { title: LangPair; desc: LangPair; color: string; icon: string };

export default function Home() {
  const { t } = useLang();

  const features: Feature[] = [
    { title: content.feat1Title, desc: content.feat1Desc, icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
    { title: content.feat2Title, desc: content.feat2Desc, icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { title: content.feat3Title, desc: content.feat3Desc, icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
    { title: content.feat4Title, desc: content.feat4Desc, icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { title: content.feat5Title, desc: content.feat5Desc, icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  ];

  const storyItems: { title: LangPair; desc: LangPair }[] = [
    { title: content.story1Title, desc: content.story1Desc },
    { title: content.story2Title, desc: content.story2Desc },
    { title: content.story3Title, desc: content.story3Desc },
    { title: content.story4Title, desc: content.story4Desc },
  ];

  const cohortBenefits: LangPair[] = [
    content.cohortBenefit1, content.cohortBenefit2, content.cohortBenefit3, content.cohortBenefit4,
  ];

  const whyItems: WhyItem[] = [
    { title: content.why1Title, desc: content.why1Desc, color: 'primary', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { title: content.why2Title, desc: content.why2Desc, color: 'accent', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { title: content.why3Title, desc: content.why3Desc, color: 'secondary', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
    { title: content.why4Title, desc: content.why4Desc, color: 'teal', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: content.why5Title, desc: content.why5Desc, color: 'blue-electric', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-navy via-[#0E2A52] to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232F80ED' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/50"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <FadeInUp>
            <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-sm">
              <span className="text-sm font-bold tracking-widest uppercase text-teal-light">{t(content.heroBadge)}</span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white font-heading">
              {t(content.heroLead)} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-teal">
                {t(content.heroHighlight)}
              </span>{" "}
              <br className="hidden md:block" />{t(content.heroTrail)}
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed text-white/80">
              {t(content.heroSubtitle)}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-blue-electric hover:bg-blue-electric/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                {t(content.applySandbox)}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <a href="https://davas.vc/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-transparent border border-white/30 hover:bg-white/10 h-14 px-10 rounded-full shadow-md transition-all duration-300">
                {t(content.joinDavas)}
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ABOUT DFL24 */}
      <section className="bg-light-bg py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeInUp>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">
                {t(content.aboutTitle)}
              </h2>
              <div className="w-24 h-1.5 bg-blue-electric mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">{t(content.aboutP1)}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(content.aboutP2Before)}<strong className="text-foreground">{t(content.aboutP2Strong1)}</strong>{t(content.aboutP2Mid)}<strong className="text-foreground">{t(content.aboutP2Strong2)}</strong>{t(content.aboutP2After)}
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {features.map((item, i) => (
              <FadeInUp
                key={i}
                delay={i * 0.1}
                className={`lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}
              >
                <div className="h-full p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{t(item.title)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(item.desc)}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY BEHIND "24" */}
      <section className="bg-gradient-to-br from-navy via-[#0E2A52] to-navy py-24 px-4 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300D4FF' fill-opacity='0.3'%3E%3Cpath d='M0 20L20 0l20 20-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <FadeInUp>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">{t(content.storyTitle)}</h2>
              <div className="w-24 h-1.5 bg-teal mx-auto rounded-full"></div>
              <p className="text-lg text-white/80 leading-relaxed">{t(content.storyP1)}</p>
              <p className="text-lg text-white/80 leading-relaxed">{t(content.storyP2)}</p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {storyItems.map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-teal-light mb-3 font-heading">{t(item.title)}</h3>
                  <p className="text-white/70 leading-relaxed">{t(item.desc)}</p>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp>
            <p className="text-center text-2xl md:text-3xl font-bold font-heading text-teal-light">
              {t(content.storyTagline)}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* PRODUCT SUITE */}
      <section className="bg-light-bg py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeInUp>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">
                {t(content.productSuiteTitle)}
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInUp delay={0.1} className="h-full">
              <div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">{t(content.ps1Title)}</h3>
                <p className="text-blue-electric font-medium mb-6">{t(content.ps1Tagline)}</p>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">{t(content.whatYouGet)}</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-primary">
                      <li>{t(content.ps1Item1)}</li>
                      <li>{t(content.ps1Item2)}</li>
                      <li>{t(content.ps1Item3)}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">{t(content.useCases)}</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-primary">
                      <li>{t(content.ps1Use1)}</li>
                      <li>{t(content.ps1Use2)}</li>
                      <li>{t(content.ps1Use3)}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2} className="h-full">
              <div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">{t(content.ps2Title)}</h3>
                <p className="text-accent font-medium mb-6">{t(content.ps2Tagline)}</p>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">{t(content.whatYouGet)}</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-accent">
                      <li>{t(content.ps2Item1)}</li>
                      <li>{t(content.ps2Item2)}</li>
                      <li>{t(content.ps2Item3)}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1} className="h-full">
              <div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">{t(content.ps3Title)}</h3>
                <div className="space-y-6 text-muted-foreground mt-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">{t(content.whatYouGet)}</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-secondary">
                      <li>{t(content.ps3Item1)}</li>
                      <li>{t(content.ps3Item2)}</li>
                      <li>{t(content.ps3Item3)}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">{t(content.useCases)}</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-secondary">
                      <li>{t(content.ps3Use1)}</li>
                      <li>{t(content.ps3Use2)}</li>
                      <li>{t(content.ps3Use3)}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2} className="h-full">
              <div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">{t(content.ps4Title)}</h3>
                <p className="text-primary font-medium mb-6">{t(content.ps4Tagline)}</p>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">{t(content.whatYouGet)}</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-primary">
                      <li>{t(content.ps4Item1)}</li>
                      <li>{t(content.ps4Item2)}</li>
                      <li>{t(content.ps4Item3)}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">{t(content.useCases)}</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-primary">
                      <li>{t(content.ps4Use1)}</li>
                      <li>{t(content.ps4Use2)}</li>
                      <li>{t(content.ps4Use3)}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3} className="md:col-span-2 max-w-3xl mx-auto w-full">
              <div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">{t(content.ps5Title)}</h3>
                <p className="text-accent font-medium mb-6">{t(content.ps5Tagline)}</p>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">{t(content.whatYouGet)}</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-accent">
                      <li>{t(content.ps5Item1)}</li>
                      <li>{t(content.ps5Item2)}</li>
                      <li>{t(content.ps5Item3)}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">{t(content.useCases)}</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-accent">
                      <li>{t(content.ps5Use1)}</li>
                      <li>{t(content.ps5Use2)}</li>
                      <li>{t(content.ps5Use3)}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* BUNDLED SOLUTIONS */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeInUp>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">{t(content.bundlesTitle)}</h2>
              <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FadeInUp delay={0.1}>
              <div className="p-8 h-full rounded-3xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">{t(content.bundle1Title)}</h3>
                <p className="text-xl font-medium text-foreground">{t(content.bundle1Desc)}</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="p-8 h-full rounded-3xl bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent mb-4 font-heading">{t(content.bundle2Title)}</h3>
                <p className="text-xl font-medium text-foreground">{t(content.bundle2Desc)}</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="p-8 h-full rounded-3xl bg-gradient-to-b from-secondary/10 to-transparent border border-secondary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">{t(content.bundle3Title)}</h3>
                <p className="text-xl font-medium text-foreground">{t(content.bundle3Desc)}</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* COHORT 01 — 2026 */}
      <section className="bg-gradient-to-br from-navy via-[#0E2A52] to-navy py-24 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-electric/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl -z-10"></div>

              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black font-heading mb-4">{t(content.cohortTitle)}</h2>

                  <div className="grid grid-cols-2 gap-6 mb-8 text-white/70">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-blue-electric">5</span>
                      <span className="font-medium">{t(content.statStartups)}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-teal-light">2</span>
                      <span className="font-medium">{t(content.statCorporates)}</span>
                    </div>
                    <div className="flex flex-col col-span-2">
                      <span className="text-3xl font-black text-cyan">3</span>
                      <span className="font-medium">{t(content.statMonths)}</span>
                    </div>
                  </div>
                  <p className="text-lg font-bold italic text-teal-light">{t(content.cohortTagline)}</p>
                </div>

                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-6 font-heading">{t(content.whatYouGet)}</h3>
                  <ul className="space-y-4 text-lg text-white/80">
                    {cohortBenefits.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal/20 text-teal-light flex items-center justify-center shrink-0 text-sm font-bold">&#10003;</div>
                        <span>{t(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* WHY DFL24 */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeInUp>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">{t(content.whyTitle)}</h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {whyItems.map((item, i) => (
              <FadeInUp
                key={i}
                delay={i * 0.1}
                className={`lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}
              >
                <div className="p-6 rounded-3xl border border-gray-100 bg-white shadow-sm shrink-0 flex flex-col items-center text-center space-y-3 h-full group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-full bg-${item.color}/10 text-${item.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-heading">{t(item.title)}</h3>
                  <p className="text-muted-foreground">{t(item.desc)}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="bg-white rounded-3xl p-12 md:p-20 text-center space-y-8 shadow-xl border border-gray-100">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading">{t(content.ctaTitle)}</h2>
                <p className="text-xl text-muted-foreground font-medium">{t(content.ctaSubtitle)}</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-blue-electric hover:bg-blue-electric/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  {t(content.ctaApply)}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-primary bg-primary/10 hover:bg-primary/20 h-14 px-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  {t(content.ctaTalk)}
                </Link>
              </div>

              <div className="pt-8 flex items-center justify-center gap-6">
                <a href="https://www.linkedin.com/company/dfl24/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn Company</span>
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://www.linkedin.com/showcase/fintech-sandbox-vietnam/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal transition-colors">
                  <span className="sr-only">LinkedIn Showcase</span>
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </Layout>
  );
}
