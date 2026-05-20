"use client";

import Layout from '@/common/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/i18n/LanguageContext';

const content = {
  heroLead: { en: 'Secure, Compliant Data for', vi: 'Dữ liệu an toàn, tuân thủ cho' },
  heroHighlight: {
    en: 'Real Financial Innovation',
    vi: 'Đổi mới Tài chính thực sự',
  },
  heroSubtitle: {
    en: 'Access Vietnam’s first sovereign, privacy-preserving Financial Data Warehouse - blending anonymized banking telemetry, ESG datasets, credit inputs, and public market data.',
    vi: 'Truy cập Kho Dữ liệu Tài chính chủ quyền và bảo vệ riêng tư đầu tiên của Việt Nam — kết hợp telemetry ngân hàng đã ẩn danh, dataset ESG, dữ liệu credit và dữ liệu thị trường công khai.',
  },
  requestAccess: { en: 'Request Access', vi: 'Yêu cầu truy cập' },
  feat1Title: { en: 'PDPD-Aligned', vi: 'Tuân thủ PDPD' },
  feat1Desc: {
    en: 'Built with governance that aligns with personal data protection decrees.',
    vi: 'Được thiết kế với governance phù hợp các nghị định bảo vệ dữ liệu cá nhân.',
  },
  feat2Title: { en: 'Synthetic Options', vi: 'Tùy chọn synthetic' },
  feat2Desc: {
    en: 'Use high-fidelity synthetic data for training without privacy risks.',
    vi: 'Dùng synthetic data độ trung thực cao để training mà không lo rủi ro riêng tư.',
  },
  feat3Title: { en: 'Differential Privacy', vi: 'Differential Privacy' },
  feat3Desc: {
    en: 'Mathematical guarantees of privacy for statistical analysis.',
    vi: 'Đảm bảo riêng tư bằng toán học cho phân tích thống kê.',
  },
  feat4Title: { en: 'Secure Enclaves', vi: 'Secure Enclaves' },
  feat4Desc: {
    en: 'Train models in trusted execution environments.',
    vi: 'Huấn luyện model trong môi trường thực thi tin cậy.',
  },
  whyTitle: { en: 'Why It Matters', vi: 'Tại sao điều này quan trọng' },
  benefit1Title: { en: 'Lower Cost', vi: 'Giảm chi phí' },
  benefit1Desc: {
    en: 'Significantly reduce the barrier to entry for compliant data access.',
    vi: 'Giảm đáng kể rào cản để truy cập dữ liệu tuân thủ.',
  },
  benefit2Title: { en: 'Accelerate Innovation', vi: 'Thúc đẩy đổi mới' },
  benefit2Desc: {
    en: 'Speed up development of green finance, lending, payments, and regtech models.',
    vi: 'Tăng tốc phát triển model green finance, lending, payments và regtech.',
  },
  benefit3Title: { en: 'Reduce Risk', vi: 'Giảm rủi ro' },
  benefit3Desc: {
    en: 'Minimize policy risk with transparent audit trails and regulator-ready validation.',
    vi: 'Giảm rủi ro chính sách bằng audit trail minh bạch và validation sẵn sàng cho cơ quan quản lý.',
  },
};

export default function DataPage() {
  const { t } = useLang();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-24">

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center fade-in-up">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight glow-text text-foreground">
              {t(content.heroLead)} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t(content.heroHighlight)}
              </span>
            </h1>
            <p className="text-xl font-medium text-muted-foreground">
              {t(content.heroSubtitle)}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full bg-primary text-white shadow hover:bg-primary/90 h-11 px-8 hover:shadow-xl transition-all duration-300">
                {t(content.requestAccess)}
              </Link>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl min-h-[400px]">
            <Image
              src="/assets/img/enterprise-infrastructure.jpg"
              alt="Secure Financial Data"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent z-10"></div>
          </div>
        </div>

        {/* Tech Specs / Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300">
            <h3 className="text-lg font-bold  mb-2 group-hover:text-primary transition-colors">{t(content.feat1Title)}</h3>
            <p className="text-sm text-muted-foreground">{t(content.feat1Desc)}</p>
          </div>

          <div className="group p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300">
            <h3 className="text-lg font-bold  mb-2 group-hover:text-primary transition-colors">{t(content.feat2Title)}</h3>
            <p className="text-sm text-muted-foreground">{t(content.feat2Desc)}</p>
          </div>

          <div className="group p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300">
            <h3 className="text-lg font-bold  mb-2 group-hover:text-primary transition-colors">{t(content.feat3Title)}</h3>
            <p className="text-sm text-muted-foreground">{t(content.feat3Desc)}</p>
          </div>

          <div className="group p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300">
            <h3 className="text-lg font-bold  mb-2 group-hover:text-primary transition-colors">{t(content.feat4Title)}</h3>
            <p className="text-sm text-muted-foreground">{t(content.feat4Desc)}</p>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl p-8 md:p-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center ">{t(content.whyTitle)}</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 className="text-xl font-bold">{t(content.benefit1Title)}</h3>
                <p className="text-muted-foreground">{t(content.benefit1Desc)}</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3 className="text-xl font-bold ">{t(content.benefit2Title)}</h3>
                <p className="text-muted-foreground">{t(content.benefit2Desc)}</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="text-xl font-bold ">{t(content.benefit3Title)}</h3>
                <p className="text-muted-foreground">{t(content.benefit3Desc)}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
