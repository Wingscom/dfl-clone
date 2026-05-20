"use client";

import Link from 'next/link';
import Layout from '@/common/Layout';
import { FadeInUp } from '@/common/AnimationWrapper';
import { useLang, type LangPair } from '@/i18n/LanguageContext';

const content = {
	heroBadge: { en: 'Sandbox 2.0 — Testing inside VIFC Danang', vi: 'Sandbox 2.0 — Thử nghiệm bên trong VIFC Danang' },
	heroLead: { en: 'Your Fintech', vi: 'Fintech' },
	heroHighlight: { en: 'API Hub', vi: 'API Hub của bạn' },
	heroSubtitleBefore: {
		en: 'Sandbox infrastructure, API integrations, and compliance layers — everything you need to build, test, and scale fintech products. Powered inside ',
		vi: 'Hạ tầng sandbox, tích hợp API và lớp tuân thủ — tất cả những gì bạn cần để build, test và scale sản phẩm fintech. Được vận hành bên trong ',
	},
	heroSubtitleStrong: {
		en: 'VIFC — Vietnam International Financial Centre, Danang',
		vi: 'VIFC — Trung tâm Tài chính Quốc tế Việt Nam, Đà Nẵng',
	},
	heroSubtitleAfter: { en: '.', vi: '.' },
	applySandbox: { en: 'Apply for Sandbox', vi: 'Đăng ký Sandbox' },
	marketSize1: { en: 'Global Sandbox Market:', vi: 'Thị trường Sandbox toàn cầu:' },
	marketSize2: { en: '(2026)', vi: '(2026)' },
	marketSize3: { en: '(2035)', vi: '(2035)' },
	marketSizeCagr: { en: 'CAGR', vi: 'CAGR' },
	productStack: { en: 'Product Stack', vi: 'Bộ sản phẩm' },
	productStackDesc: {
		en: 'Five sandbox products designed for every stage — from startup MVP to corporate pilot to cross-border expansion.',
		vi: 'Năm sản phẩm sandbox được thiết kế cho mọi giai đoạn — từ MVP startup đến pilot doanh nghiệp đến mở rộng cross-border.',
	},
	p1Title: { en: 'Sandbox-as-a-Service', vi: 'Sandbox-as-a-Service' },
	p1Tagline: { en: 'Launch fast. Test safely. Scale with confidence.', vi: 'Triển khai nhanh. Thử nghiệm an toàn. Scale tự tin.' },
	p1Item1: { en: 'Secure cloud sandbox environment', vi: 'Môi trường sandbox cloud an toàn' },
	p1Item2: { en: 'API integrations (Payment, KYC, Banking simulation)', vi: 'Tích hợp API (Payment, KYC, mô phỏng ngân hàng)' },
	p1Item3: { en: 'Built-in compliance layer (KYC/AML, reporting)', vi: 'Lớp tuân thủ tích hợp sẵn (KYC/AML, báo cáo)' },
	p2Title: { en: 'Cross-border Sandbox', vi: 'Sandbox Cross-border' },
	p2Tagline: { en: 'Test across markets. Launch globally.', vi: 'Thử nghiệm xuyên thị trường. Triển khai toàn cầu.' },
	p2Item1: { en: 'Multi-market testing (EU ↔ Vietnam, Asia ↔ EU)', vi: 'Thử nghiệm đa thị trường (EU ↔ Việt Nam, Châu Á ↔ EU)' },
	p2Item2: { en: 'FX simulation & multi-currency flows', vi: 'Mô phỏng FX & luồng đa tiền tệ' },
	p2Item3: { en: 'Regulatory advisory & pilot structuring', vi: 'Tư vấn pháp lý & thiết kế pilot' },
	p3Title: { en: 'Corporate Sandbox Program', vi: 'Chương trình Sandbox Doanh nghiệp' },
	p3Tagline: { en: 'Co-create with enterprises.', vi: 'Cùng kiến tạo với doanh nghiệp.' },
	p3Item1: { en: 'Startup solution testing environment', vi: 'Môi trường thử nghiệm giải pháp startup' },
	p3Item2: { en: 'Curated deal flow access', vi: 'Truy cập deal flow được chọn lọc' },
	p3Item3: { en: 'Pilot execution (4–12 weeks) with KPI tracking', vi: 'Triển khai pilot (4–12 tuần) với theo dõi KPI' },
	p4Title: { en: 'Embedded Finance Lab', vi: 'Embedded Finance Lab' },
	p4Tagline: { en: 'Monetize your platform with financial services.', vi: 'Khai thác doanh thu từ nền tảng của bạn bằng dịch vụ tài chính.' },
	p4Item1: { en: 'Embedded finance design (payments, lending, wallets)', vi: 'Thiết kế embedded finance (thanh toán, cho vay, ví)' },
	p4Item2: { en: 'Sandbox testing & API integration', vi: 'Thử nghiệm sandbox & tích hợp API' },
	p4Item3: { en: 'Go-to-market & pilot launch support', vi: 'Hỗ trợ go-to-market & triển khai pilot' },
	p5Title: { en: 'Compliance Sandbox', vi: 'Sandbox Tuân thủ' },
	p5Tagline: { en: 'Test compliance before regulators do.', vi: 'Kiểm thử tuân thủ trước khi cơ quan quản lý làm.' },
	p5Item1: { en: 'KYC / AML / transaction monitoring testing', vi: 'Thử nghiệm KYC / AML / giám sát giao dịch' },
	p5Item2: { en: 'Risk simulation & audit scenarios', vi: 'Mô phỏng rủi ro & kịch bản kiểm toán' },
	p5Item3: { en: 'Regulatory advisory & sandbox readiness', vi: 'Tư vấn pháp lý & sẵn sàng cho sandbox' },
	p5Item4: { en: 'Crypto AML testing', vi: 'Kiểm thử AML cho Crypto' },
	p5Item5: { en: 'Compliance AI validation', vi: 'Validation AI tuân thủ' },
	p5Item6: { en: 'RegTech product certification', vi: 'Chứng nhận sản phẩm RegTech' },
	verticalsTitle: { en: 'Sandbox Verticals', vi: 'Các mảng Sandbox' },
	verticalsDesc: {
		en: 'Real-world pilot environments across five high-growth fintech verticals.',
		vi: 'Môi trường pilot thực tế trên năm mảng fintech tăng trưởng cao.',
	},
	v1Title: { en: 'Payment / Wallet / Cross-border', vi: 'Thanh toán / Ví / Cross-border' },
	v1Desc: {
		en: 'Stripe ecosystem startups. Test payment flows end-to-end with built-in compliance.',
		vi: 'Startup thuộc hệ sinh thái Stripe. Thử nghiệm luồng thanh toán end-to-end với tuân thủ tích hợp sẵn.',
	},
	v2Title: { en: 'Crypto / Web3', vi: 'Crypto / Web3' },
	v2Desc: {
		en: 'Ripple ecosystem. Regulatory testing, fiat on/off ramp validation, digital asset flows.',
		vi: 'Hệ sinh thái Ripple. Thử nghiệm pháp lý, validation fiat on/off ramp, luồng tài sản số.',
	},
	v3Title: { en: 'Lending / Credit AI', vi: 'Lending / Credit AI' },
	v3Desc: {
		en: 'Credit scoring models, risk modeling, and AI-driven lending platforms in a safe testing ground.',
		vi: 'Mô hình credit scoring, modeling rủi ro và nền tảng lending dùng AI trong môi trường thử nghiệm an toàn.',
	},
	v4Title: { en: 'RegTech / AML / KYC', vi: 'RegTech / AML / KYC' },
	v4Desc: {
		en: 'Compliance simulation, audit testing, and regulatory technology certification.',
		vi: 'Mô phỏng tuân thủ, kiểm thử audit và chứng nhận công nghệ pháp lý.',
	},
	v5Title: { en: 'Embedded Finance', vi: 'Embedded Finance' },
	v5Desc: {
		en: 'Integrate financial services into SaaS, marketplaces, and platforms. Test real use cases.',
		vi: 'Tích hợp dịch vụ tài chính vào SaaS, marketplace và platform. Thử nghiệm use case thật.',
	},
	howTitle: { en: 'How It Works', vi: 'Cách hoạt động' },
	step1Title: { en: 'Application & Review', vi: 'Đăng ký & Đánh giá' },
	step1Desc: {
		en: 'Submit your proposal. We evaluate innovation, consumer benefit, and readiness.',
		vi: 'Gửi đề xuất của bạn. Chúng tôi đánh giá tính đổi mới, lợi ích người dùng và mức độ sẵn sàng.',
	},
	step2Title: { en: 'Testing Parameters', vi: 'Thông số Thử nghiệm' },
	step2Desc: {
		en: 'Define scope, duration, and safeguards. Set clear KPIs for success.',
		vi: 'Xác định phạm vi, thời gian và biện pháp an toàn. Đặt KPI rõ ràng cho thành công.',
	},
	step3Title: { en: 'Live Deployment', vi: 'Triển khai Thực tế' },
	step3Desc: {
		en: 'Launch to real users in a controlled environment with regulatory guidance.',
		vi: 'Triển khai cho user thật trong môi trường được kiểm soát với hướng dẫn pháp lý.',
	},
	step4Title: { en: 'Exit & Scale', vi: 'Thoát & Mở rộng' },
	step4Desc: {
		en: 'Upon success, receive authorization to scale operations across Vietnam and beyond.',
		vi: 'Khi thành công, nhận giấy phép để mở rộng hoạt động khắp Việt Nam và xa hơn.',
	},
	ctaTitle: { en: 'Ready to Build?', vi: 'Sẵn sàng để build?' },
	ctaSubtitle: {
		en: 'Apply for DFL24 Sandbox and start testing your fintech product in a real-world pilot environment.',
		vi: 'Đăng ký DFL24 Sandbox và bắt đầu thử nghiệm sản phẩm fintech của bạn trong môi trường pilot thực tế.',
	},
};

type Product = {
	num: string;
	title: LangPair;
	tagline: LangPair;
	color: string;
	items: LangPair[];
};

type Vertical = {
	title: LangPair;
	desc: LangPair;
	icon: string;
};

type Step = {
	step: string;
	title: LangPair;
	desc: LangPair;
};

export default function SandboxPage() {
	const { t } = useLang();

	const products: Product[] = [
		{ num: '01', title: content.p1Title, tagline: content.p1Tagline, color: 'primary', items: [content.p1Item1, content.p1Item2, content.p1Item3] },
		{ num: '02', title: content.p2Title, tagline: content.p2Tagline, color: 'accent', items: [content.p2Item1, content.p2Item2, content.p2Item3] },
		{ num: '03', title: content.p3Title, tagline: content.p3Tagline, color: 'secondary', items: [content.p3Item1, content.p3Item2, content.p3Item3] },
		{ num: '04', title: content.p4Title, tagline: content.p4Tagline, color: 'primary', items: [content.p4Item1, content.p4Item2, content.p4Item3] },
	];

	const verticals: Vertical[] = [
		{ title: content.v1Title, desc: content.v1Desc, icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
		{ title: content.v2Title, desc: content.v2Desc, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
		{ title: content.v3Title, desc: content.v3Desc, icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z' },
		{ title: content.v4Title, desc: content.v4Desc, icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
		{ title: content.v5Title, desc: content.v5Desc, icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
	];

	const steps: Step[] = [
		{ step: '1', title: content.step1Title, desc: content.step1Desc },
		{ step: '2', title: content.step2Title, desc: content.step2Desc },
		{ step: '3', title: content.step3Title, desc: content.step3Desc },
		{ step: '4', title: content.step4Title, desc: content.step4Desc },
	];

	return (
		<Layout>
			{/* Hero */}
			<section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-navy via-[#0E2A52] to-navy overflow-hidden">
				<div className="absolute inset-0 opacity-10" style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232F80ED' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				}}></div>

				<div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
					<FadeInUp>
						<div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
							<span className="text-sm font-bold tracking-widest uppercase text-teal-light">{t(content.heroBadge)}</span>
						</div>
					</FadeInUp>

					<FadeInUp delay={0.1}>
						<h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white font-heading">
							{t(content.heroLead)} <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-teal">{t(content.heroHighlight)}</span>
						</h1>
					</FadeInUp>

					<FadeInUp delay={0.2}>
						<p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed text-white/80">
							{t(content.heroSubtitleBefore)}<strong className="text-teal-light">{t(content.heroSubtitleStrong)}</strong>{t(content.heroSubtitleAfter)}
						</p>
					</FadeInUp>

					<FadeInUp delay={0.3}>
						<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-blue-electric hover:bg-blue-electric/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
								{t(content.applySandbox)}
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
							</Link>
						</div>
					</FadeInUp>

					{/* Market size badge */}
					<FadeInUp delay={0.4}>
						<div className="pt-6 flex items-center justify-center gap-6 text-white/50 text-sm font-medium">
							<span>{t(content.marketSize1)} <strong className="text-teal-light">$3.45B</strong> {t(content.marketSize2)}</span>
							<span className="hidden sm:inline">&rarr;</span>
							<span><strong className="text-teal-light">$17.25B</strong> {t(content.marketSize3)}</span>
							<span className="hidden sm:inline">|</span>
							<span>{t(content.marketSizeCagr)} <strong className="text-teal-light">25%+</strong></span>
						</div>
					</FadeInUp>
				</div>
			</section>

			{/* 5 PRODUCTS */}
			<section className="bg-light-bg py-24 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<FadeInUp>
						<div className="text-center space-y-4">
							<h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">{t(content.productStack)}</h2>
							<div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t(content.productStackDesc)}</p>
						</div>
					</FadeInUp>

					<div className="grid md:grid-cols-2 gap-8">
						{products.map((product, i) => (
							<FadeInUp key={i} delay={i * 0.1} className="h-full">
								<div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
									<div className={`absolute top-0 right-0 w-32 h-32 bg-${product.color}/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110`}></div>
									<div className="flex items-center gap-3 mb-4">
										<span className={`text-sm font-black text-${product.color}/40`}>{product.num}</span>
										<h3 className="text-2xl font-bold text-foreground font-heading">{t(product.title)}</h3>
									</div>
									<p className={`text-${product.color} font-medium mb-6`}>{t(product.tagline)}</p>
									<ul className="space-y-2 text-muted-foreground">
										{product.items.map((item, j) => (
											<li key={j} className="flex items-start gap-2">
												<span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${product.color} shrink-0`}></span>
												{t(item)}
											</li>
										))}
									</ul>
								</div>
							</FadeInUp>
						))}

						<FadeInUp delay={0.4} className="md:col-span-2 max-w-3xl mx-auto w-full">
							<div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
								<div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
								<div className="flex items-center gap-3 mb-4">
									<span className="text-sm font-black text-accent/40">05</span>
									<h3 className="text-2xl font-bold text-foreground font-heading">{t(content.p5Title)}</h3>
								</div>
								<p className="text-accent font-medium mb-6">{t(content.p5Tagline)}</p>
								<div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
									<ul className="space-y-2">
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>{t(content.p5Item1)}</li>
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>{t(content.p5Item2)}</li>
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>{t(content.p5Item3)}</li>
									</ul>
									<ul className="space-y-2">
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>{t(content.p5Item4)}</li>
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>{t(content.p5Item5)}</li>
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>{t(content.p5Item6)}</li>
									</ul>
								</div>
							</div>
						</FadeInUp>
					</div>
				</div>
			</section>

			{/* 5 VERTICALS */}
			<section className="bg-gradient-to-br from-navy via-[#0E2A52] to-navy py-24 px-4 text-white">
				<div className="max-w-7xl mx-auto space-y-12">
					<FadeInUp>
						<div className="text-center space-y-4">
							<h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">{t(content.verticalsTitle)}</h2>
							<div className="w-24 h-1.5 bg-teal mx-auto rounded-full"></div>
							<p className="text-lg text-white/70 max-w-3xl mx-auto">{t(content.verticalsDesc)}</p>
						</div>
					</FadeInUp>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{verticals.map((item, i) => (
							<FadeInUp key={i} delay={i * 0.1}>
								<div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
									<div className="w-14 h-14 rounded-2xl bg-teal/20 flex items-center justify-center text-teal-light mb-5">
										<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
									</div>
									<h3 className="text-xl font-bold text-white mb-3 font-heading">{t(item.title)}</h3>
									<p className="text-white/60 leading-relaxed">{t(item.desc)}</p>
								</div>
							</FadeInUp>
						))}
					</div>
				</div>
			</section>

			{/* HOW IT WORKS */}
			<section className="py-24 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<FadeInUp>
						<div className="text-center space-y-4">
							<h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">{t(content.howTitle)}</h2>
							<div className="w-24 h-1.5 bg-blue-electric mx-auto rounded-full"></div>
						</div>
					</FadeInUp>

					<div className="grid md:grid-cols-4 gap-8">
						{steps.map((item, i) => (
							<FadeInUp key={i} delay={i * 0.1}>
								<div className="text-center space-y-4">
									<div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-2xl font-heading">{item.step}</div>
									<h3 className="text-lg font-bold text-foreground font-heading">{t(item.title)}</h3>
									<p className="text-muted-foreground text-sm">{t(item.desc)}</p>
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
						<div className="bg-gradient-to-br from-navy to-[#0E2A52] rounded-3xl p-12 md:p-20 text-center space-y-8 shadow-xl">
							<h2 className="text-3xl md:text-5xl font-bold text-white font-heading">{t(content.ctaTitle)}</h2>
							<p className="text-xl text-white/70 max-w-2xl mx-auto">{t(content.ctaSubtitle)}</p>
							<div className="pt-4">
								<Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-blue-electric hover:bg-blue-electric/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
									{t(content.applySandbox)}
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
								</Link>
							</div>
						</div>
					</FadeInUp>
				</div>
			</section>
		</Layout>
	);
}
