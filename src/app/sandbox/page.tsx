import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/common/Layout';
import { FadeInUp } from '@/common/AnimationWrapper';

export const metadata: Metadata = {
	title: 'DFL24 — Sandbox-as-a-Service',
	description:
		'Your fintech API hub. Test payment flows, crypto, lending, RegTech and more in a real-world pilot environment. Sandbox 2.0 infrastructure for startups, corporates, and cross-border innovation.',
	openGraph: {
		title: 'DFL24 — Sandbox-as-a-Service',
		description:
			'Your fintech API hub. Test payment flows, crypto, lending, RegTech and more in a real-world pilot environment.',
		type: 'website',
		images: ['/assets/img/dfl24-logo.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'DFL24 — Sandbox-as-a-Service',
		description:
			'Your fintech API hub. Test payment flows, crypto, lending, RegTech and more in a real-world pilot environment.',
		images: ['/assets/img/dfl24-logo.png'],
	},
};

export default function SandboxPage() {
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
							<span className="text-sm font-bold tracking-widest uppercase text-teal-light">Sandbox 2.0 &mdash; Real-World Pilot Environment</span>
						</div>
					</FadeInUp>

					<FadeInUp delay={0.1}>
						<h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white font-heading">
							Your Fintech <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-teal">API Hub</span>
						</h1>
					</FadeInUp>

					<FadeInUp delay={0.2}>
						<p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed text-white/80">
							Sandbox infrastructure, API integrations, and compliance layers &mdash; everything you need to build, test, and scale fintech products in a live market environment.
						</p>
					</FadeInUp>

					<FadeInUp delay={0.3}>
						<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-blue-electric hover:bg-blue-electric/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
								Apply for Sandbox
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
							</Link>
						</div>
					</FadeInUp>

					{/* Market size badge */}
					<FadeInUp delay={0.4}>
						<div className="pt-6 flex items-center justify-center gap-6 text-white/50 text-sm font-medium">
							<span>Global Sandbox Market: <strong className="text-teal-light">$3.45B</strong> (2026)</span>
							<span className="hidden sm:inline">&rarr;</span>
							<span><strong className="text-teal-light">$17.25B</strong> (2035)</span>
							<span className="hidden sm:inline">|</span>
							<span>CAGR <strong className="text-teal-light">25%+</strong></span>
						</div>
					</FadeInUp>
				</div>
			</section>

			{/* 5 PRODUCTS */}
			<section className="bg-light-bg py-24 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<FadeInUp>
						<div className="text-center space-y-4">
							<h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">Product Stack</h2>
							<div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">Five sandbox products designed for every stage &mdash; from startup MVP to corporate pilot to cross-border expansion.</p>
						</div>
					</FadeInUp>

					<div className="grid md:grid-cols-2 gap-8">
						{[
							{
								num: "01", title: "Sandbox-as-a-Service", tagline: "Launch fast. Test safely. Scale with confidence.", color: "primary",
								items: ["Secure cloud sandbox environment", "API integrations (Payment, KYC, Banking simulation)", "Built-in compliance layer (KYC/AML, reporting)"],
							},
							{
								num: "02", title: "Cross-border Sandbox", tagline: "Test across markets. Launch globally.", color: "accent",
								items: ["Multi-market testing (EU \u2194 Vietnam, Asia \u2194 EU)", "FX simulation & multi-currency flows", "Regulatory advisory & pilot structuring"],
							},
							{
								num: "03", title: "Corporate Sandbox Program", tagline: "Co-create with enterprises.", color: "secondary",
								items: ["Startup solution testing environment", "Curated deal flow access", "Pilot execution (4\u201312 weeks) with KPI tracking"],
							},
							{
								num: "04", title: "Embedded Finance Lab", tagline: "Monetize your platform with financial services.", color: "primary",
								items: ["Embedded finance design (payments, lending, wallets)", "Sandbox testing & API integration", "Go-to-market & pilot launch support"],
							},
						].map((product, i) => (
							<FadeInUp key={i} delay={i * 0.1} className="h-full">
								<div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
									<div className={`absolute top-0 right-0 w-32 h-32 bg-${product.color}/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110`}></div>
									<div className="flex items-center gap-3 mb-4">
										<span className={`text-sm font-black text-${product.color}/40`}>{product.num}</span>
										<h3 className="text-2xl font-bold text-foreground font-heading">{product.title}</h3>
									</div>
									<p className={`text-${product.color} font-medium mb-6`}>{product.tagline}</p>
									<ul className="space-y-2 text-muted-foreground">
										{product.items.map((item, j) => (
											<li key={j} className="flex items-start gap-2">
												<span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${product.color} shrink-0`}></span>
												{item}
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
									<h3 className="text-2xl font-bold text-foreground font-heading">Compliance Sandbox</h3>
								</div>
								<p className="text-accent font-medium mb-6">Test compliance before regulators do.</p>
								<div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
									<ul className="space-y-2">
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>KYC / AML / transaction monitoring testing</li>
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>Risk simulation & audit scenarios</li>
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>Regulatory advisory & sandbox readiness</li>
									</ul>
									<ul className="space-y-2">
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>Crypto AML testing</li>
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>Compliance AI validation</li>
										<li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>RegTech product certification</li>
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
							<h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">Sandbox Verticals</h2>
							<div className="w-24 h-1.5 bg-teal mx-auto rounded-full"></div>
							<p className="text-lg text-white/70 max-w-3xl mx-auto">Real-world pilot environments across five high-growth fintech verticals.</p>
						</div>
					</FadeInUp>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: "Payment / Wallet / Cross-border", desc: "Stripe ecosystem startups. Test payment flows end-to-end with built-in compliance.", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
							{ title: "Crypto / Web3", desc: "Ripple ecosystem. Regulatory testing, fiat on/off ramp validation, digital asset flows.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
							{ title: "Lending / Credit AI", desc: "Credit scoring models, risk modeling, and AI-driven lending platforms in a safe testing ground.", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" },
							{ title: "RegTech / AML / KYC", desc: "Compliance simulation, audit testing, and regulatory technology certification.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
							{ title: "Embedded Finance", desc: "Integrate financial services into SaaS, marketplaces, and platforms. Test real use cases.", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
						].map((item, i) => (
							<FadeInUp key={i} delay={i * 0.1}>
								<div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
									<div className="w-14 h-14 rounded-2xl bg-teal/20 flex items-center justify-center text-teal-light mb-5">
										<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
									</div>
									<h3 className="text-xl font-bold text-white mb-3 font-heading">{item.title}</h3>
									<p className="text-white/60 leading-relaxed">{item.desc}</p>
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
							<h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">How It Works</h2>
							<div className="w-24 h-1.5 bg-blue-electric mx-auto rounded-full"></div>
						</div>
					</FadeInUp>

					<div className="grid md:grid-cols-4 gap-8">
						{[
							{ step: "1", title: "Application & Review", desc: "Submit your proposal. We evaluate innovation, consumer benefit, and readiness." },
							{ step: "2", title: "Testing Parameters", desc: "Define scope, duration, and safeguards. Set clear KPIs for success." },
							{ step: "3", title: "Live Deployment", desc: "Launch to real users in a controlled environment with regulatory guidance." },
							{ step: "4", title: "Exit & Scale", desc: "Upon success, receive authorization to scale operations across Vietnam and beyond." },
						].map((item, i) => (
							<FadeInUp key={i} delay={i * 0.1}>
								<div className="text-center space-y-4">
									<div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-2xl font-heading">{item.step}</div>
									<h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
									<p className="text-muted-foreground text-sm">{item.desc}</p>
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
							<h2 className="text-3xl md:text-5xl font-bold text-white font-heading">Ready to Build?</h2>
							<p className="text-xl text-white/70 max-w-2xl mx-auto">Apply for DFL24 Sandbox and start testing your fintech product in a real-world pilot environment.</p>
							<div className="pt-4">
								<Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-blue-electric hover:bg-blue-electric/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
									Apply for Sandbox
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
