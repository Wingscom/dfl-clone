"use client";

import Layout from '@/common/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/i18n/LanguageContext';

const content = {
  heroLead: { en: 'Building the', vi: 'Xây dựng' },
  heroHighlight: { en: 'Silicon Valley', vi: 'Thung lũng Silicon' },
  heroTrail: { en: 'of Central Vietnam', vi: 'của miền Trung Việt Nam' },
  heroSubtitle: {
    en: 'Da Nang FinTech Lab (DFL) is a strategic initiative under the International Financial Centre (IFC) Da Nang.',
    vi: 'Da Nang FinTech Lab (DFL) là sáng kiến chiến lược thuộc Trung tâm Tài chính Quốc tế (IFC) Đà Nẵng.',
  },
  sectionTitle: {
    en: 'Complementing the Ecosystems of HCMC & Singapore',
    vi: 'Bổ sung cho hệ sinh thái của TP.HCM & Singapore',
  },
  sectionP1: {
    en: 'Operated by Crossfund and Vcap Partners, DFL is designed to position Da Nang as a key node in Southeast Asia\'s financial innovation network.',
    vi: 'Được vận hành bởi Crossfund và Vcap Partners, DFL được thiết kế để đưa Đà Nẵng trở thành một mắt xích chiến lược trong mạng lưới đổi mới tài chính của Đông Nam Á.',
  },
  sectionP2: {
    en: 'We are not just building a workspace; we are constructing a regulatory sandbox and innovation hub that leverages Da Nang\'s unique advantages - high quality of life, emerging tech talent, and strategic location - to foster the next generation of green finance and digital assets.',
    vi: 'Chúng tôi không chỉ xây dựng một không gian làm việc — chúng tôi đang kiến tạo một sandbox pháp lý và trung tâm đổi mới, tận dụng lợi thế độc nhất của Đà Nẵng (chất lượng sống cao, nhân tài công nghệ trẻ, vị trí chiến lược) để nuôi dưỡng thế hệ green finance và digital assets tiếp theo.',
  },
  missionTitle: { en: 'Our 2030 Mission', vi: 'Sứ mệnh 2030' },
  missionSubtitle: {
    en: 'Ambitious targets driving real economic impact for Central Vietnam.',
    vi: 'Những mục tiêu tham vọng tạo tác động kinh tế thực sự cho miền Trung Việt Nam.',
  },
  target1Title: { en: 'Startups Incubated', vi: 'Startup được ươm tạo' },
  target1Desc: {
    en: 'Nurturing high-growth ventures in AI, Blockchain, and Green Finance.',
    vi: 'Nuôi dưỡng các dự án tăng trưởng cao trong AI, Blockchain và Green Finance.',
  },
  target2Title: { en: 'High-Quality Jobs', vi: 'Việc làm chất lượng cao' },
  target2Desc: {
    en: 'Creating careers for the next generation of Vietnamese tech talent.',
    vi: 'Tạo sự nghiệp cho thế hệ nhân tài công nghệ Việt Nam tiếp theo.',
  },
  target3Title: { en: 'Investment Attracted', vi: 'Vốn đầu tư thu hút' },
  target3Desc: {
    en: 'Direct foreign investment into Da Nang\'s digital economy.',
    vi: 'Vốn đầu tư trực tiếp nước ngoài vào kinh tế số của Đà Nẵng.',
  },
  ctaTitle: { en: 'Be Part of the Vision', vi: 'Cùng kiến tạo tầm nhìn' },
  ctaButton: { en: 'Apply for Sandbox', vi: 'Đăng ký Sandbox' },
};

export default function Vision() {
  const { t } = useLang();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-32">

        {/* Hero Section */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10"></div>
            <Image
              src="/assets/img/danang-masterplan-1.png"
              alt="Vision Workspace"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-20 max-w-4xl p-12 md:p-20 space-y-8">

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading tracking-tighter leading-tight text-white">
              {t(content.heroLead)} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t(content.heroHighlight)}
              </span> <br/>
              {t(content.heroTrail)}
            </h1>

            <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl leading-relaxed">
              {t(content.heroSubtitle)}
            </p>
          </div>
        </div>

        {/* Strategic Initiative Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground leading-tight">
              {t(content.sectionTitle)}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{t(content.sectionP1)}</p>
              <p>{t(content.sectionP2)}</p>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-square md:aspect-auto md:h-[500px] border border-black/5 dark:border-white/5 shadow-2xl">
            <Image
              src="/assets/img/generated_images/futuristic_da_nang_skyline_with_fintech_nodes.png"
              alt="Da Nang Fintech Hub"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission Targets (The Numbers) */}
        <div className="bg-gray-100 rounded-[2.5rem] p-12 md:p-20 border border-black/5 dark:border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">{t(content.missionTitle)}</h2>
            <p className="text-xl text-muted-foreground">{t(content.missionSubtitle)}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Target 1 */}
            <div className="p-8 rounded-[2rem] bg-white backdrop-blur-sm border border-black/5 dark:border-white/5 text-center space-y-4 group hover:scale-105 transition-transform duration-300">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">
                200
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground">{t(content.target1Title)}</h3>
              <p className="text-muted-foreground">{t(content.target1Desc)}</p>
            </div>

            {/* Target 2 */}
            <div className="p-8 rounded-[2rem] bg-white backdrop-blur-sm border border-black/5 dark:border-white/5 text-center space-y-4 group hover:scale-105 transition-transform duration-300 delay-100">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-highlight">
                2,000
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground">{t(content.target2Title)}</h3>
              <p className="text-muted-foreground">{t(content.target2Desc)}</p>
            </div>

            {/* Target 3 */}
            <div className="p-8 rounded-[2rem] bg-white backdrop-blur-sm border border-black/5 dark:border-white/5 text-center space-y-4 group hover:scale-105 transition-transform duration-300 delay-200">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-secondary to-highlight">
                $200M
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground">{t(content.target3Title)}</h3>
              <p className="text-muted-foreground">{t(content.target3Desc)}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-8 pt-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">{t(content.ctaTitle)}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl h-12 px-8">
              {t(content.ctaButton)}
            </Link>
          </div>
        </div>

      </div>
    </Layout>
  );
}
