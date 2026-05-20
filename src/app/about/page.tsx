"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang, type LangPair } from "@/i18n/LanguageContext";

const content = {
  heroLine1: { en: 'DFL24', vi: 'DFL24' },
  heroLine2: { en: 'Danang Fintech Lab', vi: 'Danang Fintech Lab' },
  heroSubtitle: {
    en: 'Where innovation meets sovereignty. Where every district becomes a gateway to the future.',
    vi: 'Nơi đổi mới gặp chủ quyền. Nơi mỗi quận huyện trở thành cánh cửa đến tương lai.',
  },

  dflTitle: { en: 'Danang Fintech Lab', vi: 'Danang Fintech Lab' },
  dflParaBefore: {
    en: 'DFL24 is not just a fintech sandbox. It is a purpose‑built innovation ecosystem, strategically anchored inside the ',
    vi: 'DFL24 không chỉ là một sandbox fintech. Đây là một hệ sinh thái đổi mới được xây dựng có mục đích, neo đậu chiến lược bên trong ',
  },
  dflParaStrong1: {
    en: 'Vietnam International Financial Centre (VIFC)',
    vi: 'Trung tâm Tài chính Quốc tế Việt Nam (VIFC)',
  },
  dflParaMid: {
    en: ' in Danang. As one of the first 10 strategic investors licensed as members of ',
    vi: ' tại Đà Nẵng. Là một trong 10 nhà đầu tư chiến lược đầu tiên được cấp phép thành viên của ',
  },
  dflParaStrong2: { en: 'VIFC Danang', vi: 'VIFC Danang' },
  dflParaAfter: {
    en: ", we stand at the forefront of shaping Vietnam's new financial landscape.",
    vi: ', chúng tôi đứng ở tuyến đầu trong việc kiến tạo bức tranh tài chính mới của Việt Nam.',
  },

  dflH1Title: { en: 'International Team', vi: 'Đội ngũ Quốc tế' },
  dflH1Desc: {
    en: 'Bringing diverse perspectives and global experience to drive innovation in Vietnam.',
    vi: 'Mang đến góc nhìn đa dạng và kinh nghiệm toàn cầu để thúc đẩy đổi mới tại Việt Nam.',
  },
  dflH2Title: { en: 'Local Expertise', vi: 'Hiểu biết Bản địa' },
  dflH2Desc: {
    en: 'Deep understanding of the Vietnamese market, regulations, and cultural nuance.',
    vi: 'Hiểu sâu thị trường, pháp lý và tinh tế văn hoá Việt Nam.',
  },
  dflH3Title: { en: 'World Experts in Fintech x AI', vi: 'Chuyên gia hàng đầu về Fintech x AI' },
  dflH3Desc: {
    en: 'Pioneering the intersection of financial services and artificial intelligence.',
    vi: 'Tiên phong tại giao điểm giữa dịch vụ tài chính và trí tuệ nhân tạo.',
  },

  storyTitle: { en: 'The Story Behind "24"', vi: 'Câu chuyện đằng sau "24"' },
  storyLeadLine1: {
    en: '24 is not a year. It is not a number of hours.',
    vi: '24 không phải là một năm. Không phải số giờ.',
  },
  storyLeadLine2: {
    en: 'It is a statement of identity, unity, and ambition.',
    vi: 'Đó là tuyên ngôn về bản sắc, sự thống nhất và khát vọng.',
  },
  storyDesc: {
    en: '24 stands for the 24 districts and townships of Danang – including the two island districts of Hoang Sa (Paracel) and Truong Sa (Spratly). Together, they form the complete administrative map of our city, a place where the mainland meets the ocean, and where innovation carries the responsibility of sovereignty.',
    vi: '24 đại diện cho 24 quận, huyện và thị trấn của Đà Nẵng – bao gồm hai huyện đảo Hoàng Sa và Trường Sa. Cùng nhau, chúng tạo nên bản đồ hành chính hoàn chỉnh của thành phố — nơi đất liền gặp đại dương, và nơi đổi mới mang theo trách nhiệm chủ quyền.',
  },
  story1Title: { en: 'Completeness', vi: 'Sự Trọn vẹn' },
  story1Desc: {
    en: 'Just as 24 districts make Danang whole, DFL24 brings together every piece of the fintech puzzle: regulation, infrastructure, capital, and talent.',
    vi: 'Như 24 quận huyện làm nên Đà Nẵng trọn vẹn, DFL24 kết hợp mọi mảnh ghép của bức tranh fintech: pháp lý, hạ tầng, vốn và nhân tài.',
  },
  story2Title: { en: 'Unwavering Presence', vi: 'Hiện diện Không ngừng' },
  story2Desc: {
    en: 'Like the 24/7 rhythm of a city that never sleeps, we stand ready to support innovators anytime, anywhere.',
    vi: 'Như nhịp 24/7 của thành phố không bao giờ ngủ, chúng tôi luôn sẵn sàng hỗ trợ các nhà đổi mới mọi lúc, mọi nơi.',
  },
  story3Title: { en: 'A Vision Without Borders', vi: 'Tầm nhìn Không Biên giới' },
  story3Desc: {
    en: 'The two island districts remind us that true innovation knows no boundaries—whether geographical, technological, or regulatory. DFL24 is built to help fintech solutions reach every corner of the nation and beyond.',
    vi: 'Hai huyện đảo nhắc chúng tôi rằng đổi mới thực sự không có ranh giới — dù là địa lý, công nghệ hay pháp lý. DFL24 được xây dựng để giúp các giải pháp fintech vươn tới mọi ngóc ngách của đất nước và xa hơn.',
  },
  story4Title: { en: 'Rooted Yet Global', vi: 'Gốc rễ vững — Tầm vóc toàn cầu' },
  story4Desc: {
    en: 'We draw strength from our local foundation, while thinking and acting on a global scale. 24 is our anchor; Southeast Asia is our horizon.',
    vi: 'Chúng tôi lấy sức mạnh từ nền tảng địa phương, tư duy và hành động ở tầm toàn cầu. 24 là điểm tựa; Đông Nam Á là chân trời.',
  },
  storyFooterTitle: {
    en: 'More Than a Sandbox.',
    vi: 'Hơn cả một Sandbox.',
  },
  storyFooterSubtitle: {
    en: 'A Launchpad with Purpose.',
    vi: 'Một Bệ phóng có Mục đích.',
  },
  storyFooterDesc: {
    en: 'DFL24 is where fintech meets national pride, where every test case carries the spirit of a city that looks outward to the sea. We are not just building a platform—we are building a legacy of innovation that starts in Danang, embraces the islands, and radiates across the region.',
    vi: 'DFL24 là nơi fintech gặp niềm tự hào dân tộc, nơi mỗi test case mang theo tinh thần của một thành phố hướng ra biển. Chúng tôi không chỉ xây dựng một platform — chúng tôi đang xây dựng di sản đổi mới khởi nguồn từ Đà Nẵng, ôm trọn quần đảo, và lan toả khắp khu vực.',
  },

  deliverTitle: { en: 'What We Deliver', vi: 'Chúng tôi mang đến' },
  d1Title: { en: 'Sandbox 2.0 Infrastructure', vi: 'Hạ tầng Sandbox 2.0' },
  d1Desc: {
    en: 'A living laboratory that enables real‑world testing with real data, real users, and real market dynamics.',
    vi: 'Phòng thí nghiệm sống cho phép thử nghiệm thực tế với dữ liệu thật, user thật và động lực thị trường thật.',
  },
  d2Title: { en: 'Regulatory & Legal Navigation', vi: 'Định hướng Pháp lý' },
  d2Desc: {
    en: 'Direct support from experts to streamline approvals and embed compliance from day one.',
    vi: 'Hỗ trợ trực tiếp từ chuyên gia để xin phê duyệt nhanh gọn và tích hợp tuân thủ ngay từ ngày đầu.',
  },
  d3Title: { en: 'Cross‑Border Testing', vi: 'Thử nghiệm Cross-border' },
  d3Desc: {
    en: "A launchpad to Southeast Asia's most vibrant economies, enabling seamless piloting and scaling across borders.",
    vi: 'Bệ phóng đến các nền kinh tế năng động nhất Đông Nam Á, cho phép pilot và scale xuyên biên giới mượt mà.',
  },
  d4Title: { en: 'Corporate Innovation', vi: 'Đổi mới Doanh nghiệp' },
  d4Desc: {
    en: 'Tailored collaborations with financial institutions and enterprises to co‑create next‑generation solutions.',
    vi: 'Hợp tác may đo cùng các định chế tài chính và doanh nghiệp để cùng kiến tạo giải pháp thế hệ mới.',
  },
  d5Title: { en: 'End‑to‑End Growth Support', vi: 'Hỗ trợ Tăng trưởng End-to-End' },
  d5Desc: {
    en: 'From incubation and acceleration to go‑to‑market execution, de‑risking every step of the journey.',
    vi: 'Từ ươm tạo, tăng tốc đến triển khai go-to-market, giảm rủi ro mọi bước của hành trình.',
  },

  teamTitle: { en: 'Team', vi: 'Đội ngũ' },
  roleFounder: { en: 'Founder', vi: 'Nhà sáng lập' },
  bioMyHa: {
    en: 'A strategic leader driving innovation and investment between Europe and Asia. Based in France and Vietnam, she serves as President of VYBE, Partner at Da Nang International Financial Center, and VINEU Director of France',
    vi: 'Một nhà lãnh đạo chiến lược thúc đẩy đổi mới và đầu tư giữa Châu Âu và Châu Á. Sinh sống tại Pháp và Việt Nam, bà là Chủ tịch VYBE, Partner tại Da Nang International Financial Center và Giám đốc VINEU Pháp.',
  },
  roleHeadOps: { en: 'Head of Operations', vi: 'Trưởng Vận hành' },
  bioKiel: {
    en: 'Previously acted as COO of Expand and Motus Operandi, supporting business growth and China market expansion. He also co-founded SET FOR SET, an e-commerce fitness startup successfully sold in 2024.',
    vi: 'Trước đây giữ vai trò COO của Expand và Motus Operandi, hỗ trợ tăng trưởng và mở rộng thị trường Trung Quốc. Đồng sáng lập SET FOR SET, một startup fitness e-commerce đã bán thành công năm 2024.',
  },
  roleHeadTech: { en: 'Head of Technology', vi: 'Trưởng Công nghệ' },
  bioVincenzo: {
    en: 'CTO at Expand and CrossFund, with over 20 years of experience in enterprise architecture, blockchain, and AI. He also serves as a Research Collaborator at the University of Catania, bridging academic innovation with scalable commercial applications.',
    vi: 'CTO tại Expand và CrossFund, với hơn 20 năm kinh nghiệm về kiến trúc doanh nghiệp, blockchain và AI. Cộng tác viên nghiên cứu tại University of Catania, kết nối đổi mới học thuật với ứng dụng thương mại có khả năng scale.',
  },
  roleHeadFinance: { en: 'Head of Finance', vi: 'Trưởng Tài chính' },
  bioNikhil: {
    en: 'A finance executive with over a decade of experience across APAC, including CFO-level roles overseeing operations in Hong Kong, Singapore, Indonesia, India, and China. Chartered Accountant (India) and CPA Australia.',
    vi: 'Một executive tài chính với hơn một thập kỷ kinh nghiệm khắp APAC, gồm các vai trò CFO giám sát hoạt động tại Hong Kong, Singapore, Indonesia, Ấn Độ và Trung Quốc. Chartered Accountant (Ấn Độ) và CPA Australia.',
  },
  roleTechLead: { en: 'Tech Lead', vi: 'Tech Lead' },
  bioLuciano: {
    en: 'Founder of Yuusoft, based in Singapore, he brings over a decade of experience in software development and leading engineering teams at startups including Xendit, Leyan Technologies, and edugo.ai.',
    vi: 'Nhà sáng lập Yuusoft, đặt tại Singapore, mang hơn một thập kỷ kinh nghiệm về phát triển phần mềm và dẫn dắt các đội kỹ thuật tại các startup bao gồm Xendit, Leyan Technologies và edugo.ai.',
  },

  danangTitle: { en: 'Da Nang: The Innovation Hub', vi: 'Đà Nẵng: Trung tâm Đổi mới' },
  danangPara: {
    en: "Known for its stunning coastline and high quality of life, Da Nang is rapidly transforming into Vietnam's premier hub for technology and innovation. With a strategic location, modern infrastructure, and a forward-thinking government, the city attracts top talent and investment from across the globe.",
    vi: 'Nổi tiếng với bờ biển tuyệt đẹp và chất lượng sống cao, Đà Nẵng đang nhanh chóng chuyển mình thành trung tâm công nghệ và đổi mới hàng đầu Việt Nam. Với vị trí chiến lược, hạ tầng hiện đại và chính quyền tiên tiến, thành phố thu hút nhân tài và đầu tư từ khắp toàn cầu.',
  },
  dn1Title: { en: 'High Quality of Life', vi: 'Chất lượng Sống cao' },
  dn1Desc: {
    en: 'A perfect blend of urban convenience and natural beauty, attracting global talent.',
    vi: 'Sự hoà quyện hoàn hảo giữa tiện nghi đô thị và vẻ đẹp thiên nhiên, thu hút nhân tài toàn cầu.',
  },
  dn2Title: { en: 'Strategic Location', vi: 'Vị trí Chiến lược' },
  dn2Desc: {
    en: 'Central gateway connecting major Asian economies and markets.',
    vi: 'Cánh cửa trung tâm kết nối các nền kinh tế và thị trường châu Á lớn.',
  },
  dn3Title: { en: 'Skilled Educated Young Workforce', vi: 'Lực lượng lao động trẻ được đào tạo' },
  dn3Desc: {
    en: 'Access to a vibrant talent pool from top universities and technical institutes.',
    vi: 'Tiếp cận nguồn nhân tài năng động từ các trường đại học hàng đầu và viện kỹ thuật.',
  },

  infraTitle: { en: 'Infrastructure at a Glance', vi: 'Hạ tầng tổng quan' },
  infra1: { en: 'Airports', vi: 'Sân bay' },
  infra2: { en: 'Seaports', vi: 'Cảng biển' },
  infra3: { en: 'Hi-tech Park', vi: 'Khu công nghệ cao' },
  infra4: { en: 'Free Trade Zone', vi: 'Khu thương mại tự do' },
  infra5: { en: 'Open Economic Zone', vi: 'Khu kinh tế mở' },
  infra6: { en: 'Operating Industrial Zones', vi: 'Khu công nghiệp đang hoạt động' },
  infra7: { en: 'Operating ICT Parks', vi: 'Khu CNTT đang hoạt động' },

  mapTitle: { en: 'Strategic Location in Vietnam', vi: 'Vị trí Chiến lược tại Việt Nam' },
  mapSubtitle: {
    en: 'Da Nang: The Central Hub connecting North and South',
    vi: 'Đà Nẵng: Trung tâm kết nối Bắc và Nam',
  },

  vifcTitle: { en: 'Vietnam International Finance Center', vi: 'Trung tâm Tài chính Quốc tế Việt Nam' },
  vifcPara: {
    en: 'The VIFC is a policy sandbox and economic zone designed to rival global financial hubs. It offers regulatory flexibility, tax incentives, and a world-class environment for financial institutions, fintech startups, and venture capital firms to collaborate and scale.',
    vi: 'VIFC là một sandbox chính sách và khu kinh tế được thiết kế để cạnh tranh với các trung tâm tài chính toàn cầu. Mang đến sự linh hoạt pháp lý, ưu đãi thuế và môi trường đẳng cấp thế giới cho các định chế tài chính, startup fintech và quỹ đầu tư mạo hiểm cùng hợp tác và scale.',
  },
  vifc1Title: { en: 'Policy Sandbox', vi: 'Sandbox Chính sách' },
  vifc1Desc: {
    en: 'A safe environment to test and deploy innovative financial technologies.',
    vi: 'Môi trường an toàn để thử nghiệm và triển khai các công nghệ tài chính đổi mới.',
  },
  vifc2Title: { en: 'Robust Legal Framework', vi: 'Khung pháp lý Vững mạnh' },
  vifc2Desc: {
    en: 'Clear regulations and protections creating a secure environment for innovation.',
    vi: 'Quy định rõ ràng và sự bảo vệ tạo nên môi trường an toàn cho đổi mới.',
  },
  vifc3Title: { en: 'Global Connectivity', vi: 'Kết nối Toàn cầu' },
  vifc3Desc: {
    en: 'Seamless integration with international financial markets and partners.',
    vi: 'Tích hợp mượt mà với các thị trường tài chính và đối tác quốc tế.',
  },

  ctaTitle: { en: 'Join the Revolution', vi: 'Tham gia Cuộc Cách mạng' },
  ctaDesc: {
    en: 'Whether you are a startup looking to accelerate, an investor seeking opportunities, or an institution ready to innovate, DFL is your partner in Da Nang.',
    vi: 'Dù bạn là một startup muốn tăng tốc, một nhà đầu tư tìm cơ hội, hay một định chế sẵn sàng đổi mới — DFL là đối tác của bạn tại Đà Nẵng.',
  },
  ctaButton: { en: 'Get in Touch', vi: 'Liên hệ' },
};

type TeamMember = {
  name: string;
  image: string;
  linkedin: string;
  role: LangPair;
  bio: LangPair;
  gradient: string;
};

export default function AboutPage() {
  const { t } = useLang();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.6;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const team: TeamMember[] = [
    { name: 'My Ha Tran', image: '/assets/img/my-ha-tran.png', linkedin: 'https://www.linkedin.com/in/tranhmy/', role: content.roleFounder, bio: content.bioMyHa, gradient: 'from-accent/5' },
    { name: 'Kiel DiGiovanni', image: '/assets/img/kiel_digiovanni.png', linkedin: 'https://www.linkedin.com/in/kiel-digiovanni/', role: content.roleHeadOps, bio: content.bioKiel, gradient: 'from-secondary/5' },
    { name: 'Vincenzo Cartelli', image: '/assets/img/vincenzo_cartelli.png', linkedin: 'https://www.linkedin.com/in/vincenzo-cartelli/', role: content.roleHeadTech, bio: content.bioVincenzo, gradient: 'from-accent/5' },
    { name: 'Nikhil Porwal', image: '/assets/img/nikhil_porwal.png', linkedin: 'https://www.linkedin.com/in/nikhilporwal/', role: content.roleHeadFinance, bio: content.bioNikhil, gradient: 'from-accent/5' },
    { name: 'Luciano Wu', image: '/assets/img/luciano_wu.png', linkedin: 'https://www.linkedin.com/in/han4wluc/', role: content.roleTechLead, bio: content.bioLuciano, gradient: 'from-primary/5' },
  ];

  const linkedInSvg = (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-40 pb-20 space-y-32">
      {/* Hero / Intro */}
      <div className="text-center space-y-6 max-w-4xl mx-auto fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading tracking-tighter glow-text ">
          {t(content.heroLine1)}
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
            {t(content.heroLine2)}
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-muted-foreground">
          {t(content.heroSubtitle)}
        </p>
      </div>

      {/* Section 1: DFL */}
      <div id="dfl" className="space-y-8 scroll-mt-32">
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0 min-h-125">
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-10 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight ">
                {t(content.dflTitle)}
              </h2>
              <p className="text-lg leading-relaxed font-medium text-muted-foreground">
                {t(content.dflParaBefore)}<strong>{t(content.dflParaStrong1)}</strong>{t(content.dflParaMid)}<strong>{t(content.dflParaStrong2)}</strong>{t(content.dflParaAfter)}
              </p>
            </div>
            <div className="relative overflow-hidden h-full min-h-75 md:min-h-auto order-1 md:order-2">
              <div className="absolute inset-0 bg-linear-to-l from-card via-transparent to-transparent z-10"></div>
              <Image src="/assets/img/danang-night-bridge.jpg" alt="Da Nang Night Bridge" fill className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* DFL Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2 ">{t(content.dflH1Title)}</h3>
            <p className="text-muted-foreground">{t(content.dflH1Desc)}</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2 ">{t(content.dflH2Title)}</h3>
            <p className="text-muted-foreground">{t(content.dflH2Desc)}</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2 ">{t(content.dflH3Title)}</h3>
            <p className="text-muted-foreground">{t(content.dflH3Desc)}</p>
          </div>
        </div>
      </div>

      {/* The Story Behind "24" Section */}
      <div className="space-y-12 scroll-mt-32">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-heading">{t(content.storyTitle)}</h2>
          <p className="text-xl md:text-3xl font-medium text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
            {t(content.storyLeadLine1)}<br/>
            {t(content.storyLeadLine2)}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t(content.storyDesc)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 md:p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold font-heading mb-3 text-primary">{t(content.story1Title)}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{t(content.story1Desc)}</p>
          </div>
          <div className="p-8 md:p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold font-heading mb-3 text-primary">{t(content.story2Title)}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{t(content.story2Desc)}</p>
          </div>
          <div className="p-8 md:p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold font-heading mb-3 text-primary">{t(content.story3Title)}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{t(content.story3Desc)}</p>
          </div>
          <div className="p-8 md:p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold font-heading mb-3 text-primary">{t(content.story4Title)}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{t(content.story4Desc)}</p>
          </div>
        </div>

        <div className="relative rounded-[2.5rem] p-10 md:p-16 text-center space-y-6 bg-primary/5 border border-primary/10">
          <h3 className="text-2xl md:text-4xl font-bold font-heading">{t(content.storyFooterTitle)}<br/>{t(content.storyFooterSubtitle)}</h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t(content.storyFooterDesc)}
          </p>
        </div>
      </div>

      {/* What We Deliver Section */}
      <div className="space-y-12 scroll-mt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-heading">{t(content.deliverTitle)}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
          <div className="lg:col-span-2 p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-all group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-3">{t(content.d1Title)}</h3>
            <p className="text-muted-foreground text-lg">{t(content.d1Desc)}</p>
          </div>
          <div className="lg:col-span-2 p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-all group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-3">{t(content.d2Title)}</h3>
            <p className="text-muted-foreground text-lg">{t(content.d2Desc)}</p>
          </div>
          <div className="lg:col-span-2 p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-all group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-3">{t(content.d3Title)}</h3>
            <p className="text-muted-foreground text-lg">{t(content.d3Desc)}</p>
          </div>
          <div className="lg:col-span-2 lg:col-start-2 p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-all group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-3">{t(content.d4Title)}</h3>
            <p className="text-muted-foreground text-lg">{t(content.d4Desc)}</p>
          </div>
          <div className="lg:col-span-2 p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-all group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-3">{t(content.d5Title)}</h3>
            <p className="text-muted-foreground text-lg">{t(content.d5Desc)}</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-12">
        <div className="flex items-end justify-between border-b border-black/5 dark:border-white/5 pb-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading ">{t(content.teamTitle)}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 min-h-75 flex flex-col justify-between">
              <div className={`absolute inset-0 bg-linear-to-br ${member.gradient} via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-black/5 dark:border-white/10 relative">
                  <Image src={member.image} alt={member.name} fill className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-3xl font-bold font-heading ">{member.name}</h3>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-highlight transition-colors">
                    {linkedInSvg}
                  </a>
                </div>
                <p className=" font-bold mb-4">{t(member.role)}</p>
                <p className="text-lg text-muted-foreground">{t(member.bio)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Da Nang */}
      <div id="danang" className="space-y-8 scroll-mt-32">
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0 min-h-125">
            <div className="relative overflow-hidden h-full min-h-75 md:min-h-auto">
              <div className="absolute inset-0 bg-linear-to-r from-card via-transparent to-transparent z-10"></div>
              <Image src="/assets/img/da_nang_vietnam_skyl_ad6bb21a.jpg" alt="Da Nang Skyline" fill className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight ">{t(content.danangTitle)}</h2>
              <p className="text-lg leading-relaxed font-medium text-muted-foreground">
                {t(content.danangPara)}
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
            <h3 className="text-xl font-bold font-heading mb-2 ">{t(content.dn1Title)}</h3>
            <p className="text-muted-foreground">{t(content.dn1Desc)}</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2 ">{t(content.dn2Title)}</h3>
            <p className="text-muted-foreground">{t(content.dn2Desc)}</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2 ">{t(content.dn3Title)}</h3>
            <p className="text-muted-foreground">{t(content.dn3Desc)}</p>
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

          <button onClick={() => scroll("left")} id="prev-slide" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md flex items-center justify-center text-white transition-all opacity-0 group-hover/carousel:opacity-100 md:-left-6 shadow-lg border border-white/10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={() => scroll("right")} id="next-slide" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md flex items-center justify-center text-white transition-all opacity-0 group-hover/carousel:opacity-100 md:-right-6 shadow-lg border border-white/10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* Infrastructure Stats */}
        <div className="bg-gray-100 rounded-[2.5rem] p-8 md:p-12 border border-black/5 dark:border-white/5">
          <h3 className="text-2xl font-bold font-heading  mb-8 text-center">
            {t(content.infraTitle)}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-primary">2</div>
              <p className="text-sm font-bold ">{t(content.infra1)}</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-primary">3</div>
              <p className="text-sm font-bold ">{t(content.infra2)}</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-secondary">1</div>
              <p className="text-sm font-bold ">{t(content.infra3)}</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-accent">1</div>
              <p className="text-sm font-bold ">{t(content.infra4)}</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-secondary">1</div>
              <p className="text-sm font-bold ">{t(content.infra5)}</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-indigo-500">9</div>
              <p className="text-sm font-bold ">{t(content.infra6)}</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-highlight">4</div>
              <p className="text-sm font-bold ">{t(content.infra7)}</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="pt-16 pb-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-heading glow-text  mb-4">
              {t(content.mapTitle)}
            </h3>
            <p className="text-lg text-muted-foreground">
              {t(content.mapSubtitle)}
            </p>
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
              <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight ">{t(content.vifcTitle)}</h2>
              <p className="text-lg leading-relaxed font-medium text-muted-foreground">
                {t(content.vifcPara)}
              </p>
            </div>
            <div className="relative overflow-hidden h-full min-h-75 md:min-h-auto order-1 md:order-2">
              <div className="absolute inset-0 bg-linear-to-l from-card via-transparent to-transparent z-10"></div>
              <Image src="/assets/img/modern_futuristic_fi_8e5bd67a.jpg" alt="Vietnam International Finance Center" fill className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* VIFC Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2 ">{t(content.vifc1Title)}</h3>
            <p className="text-muted-foreground">{t(content.vifc1Desc)}</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2 ">{t(content.vifc2Title)}</h3>
            <p className="text-muted-foreground">{t(content.vifc2Desc)}</p>
          </div>
          <div className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2 ">{t(content.vifc3Title)}</h3>
            <p className="text-muted-foreground">{t(content.vifc3Desc)}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center space-y-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading glow-text ">{t(content.ctaTitle)}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t(content.ctaDesc)}</p>
        <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full bg-primary text-white shadow hover:bg-primary/90 h-11 px-8">
          {t(content.ctaButton)}
        </Link>
      </div>
    </div>
  );
}
