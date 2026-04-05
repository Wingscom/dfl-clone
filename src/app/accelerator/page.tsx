import Link from 'next/link';
import Layout from '@/common/Layout';
import { FadeInUp } from '@/common/AnimationWrapper';

export default function FundingPage() {
	return (
		<Layout>
			{/* Hero */}
			<section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-navy via-[#0E2A52] to-navy overflow-hidden">
				<div className="absolute inset-0 opacity-5" style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300D4FF' fill-opacity='0.3'%3E%3Cpath d='M0 20L20 0l20 20-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
				}}></div>

				<div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
					<FadeInUp>
						<div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
							<span className="text-sm font-bold tracking-widest uppercase text-teal-light">Cohort 01 &mdash; 2026</span>
						</div>
					</FadeInUp>

					<FadeInUp delay={0.1}>
						<h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white font-heading">
							Funding &<br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-teal">Growth Programs</span>
						</h1>
					</FadeInUp>

					<FadeInUp delay={0.2}>
						<p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed text-white/80">
							From pre-seed to scale-up &mdash; we connect fintech builders with capital, regulatory support, and go-to-market infrastructure in Vietnam and Southeast Asia.
						</p>
					</FadeInUp>

					<FadeInUp delay={0.3}>
						<Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-blue-electric hover:bg-blue-electric/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
							Apply for Funding
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
						</Link>
					</FadeInUp>
				</div>
			</section>

			{/* Cohort Stats */}
			<section className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<FadeInUp>
						<div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-10 md:p-16">
							<div className="grid md:grid-cols-2 gap-12 items-center">
								<div>
									<h2 className="text-3xl md:text-5xl font-black font-heading mb-6 text-foreground">
										Cohort 01 &mdash; 2026
									</h2>
									<div className="grid grid-cols-3 gap-6 mb-8">
										<div className="flex flex-col">
											<span className="text-4xl font-black text-blue-electric">5</span>
											<span className="font-medium text-muted-foreground">startups</span>
										</div>
										<div className="flex flex-col">
											<span className="text-4xl font-black text-teal">2</span>
											<span className="font-medium text-muted-foreground">corporates</span>
										</div>
										<div className="flex flex-col">
											<span className="text-4xl font-black text-cyan">3</span>
											<span className="font-medium text-muted-foreground">months</span>
										</div>
									</div>
									<p className="text-lg font-bold italic text-teal">
										Your fast track into Vietnam&apos;s fintech ecosystem
									</p>
								</div>

								<div className="bg-light-bg p-8 rounded-3xl border border-gray-100">
									<h3 className="text-2xl font-bold mb-6 font-heading text-foreground">What you get:</h3>
									<ul className="space-y-4 text-lg text-muted-foreground">
										{["Full sandbox access", "Regulatory support & compliance advisory", "Pilot execution with real users", "Investor & partner exposure", "Demo Day with IFC representatives"].map((item, i) => (
											<li key={i} className="flex items-center gap-3">
												<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-sm font-bold">&#10003;</div>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</FadeInUp>
				</div>
			</section>

			{/* Funding Stages */}
			<section className="bg-light-bg py-24 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<FadeInUp>
						<div className="text-center space-y-4">
							<h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">Funding Stages</h2>
							<div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">We support fintech companies at every stage of their growth journey.</p>
						</div>
					</FadeInUp>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								stage: "Pre-Seed", range: "$50K \u2013 $150K", color: "primary",
								desc: "Early-stage founders with a strong thesis. We provide sandbox access, initial capital, and regulatory guidance to validate your concept.",
								includes: ["Sandbox-as-a-Service access", "Compliance advisory", "Expert advisory network"],
							},
							{
								stage: "Seed", range: "$150K \u2013 $500K", color: "accent",
								desc: "Post-MVP companies ready for market testing. Cross-border sandbox, pilot execution, and investor introductions.",
								includes: ["Cross-border sandbox testing", "Pilot execution (4\u201312 weeks)", "Investor & partner matchmaking"],
							},
							{
								stage: "Growth", range: "$500K+", color: "secondary",
								desc: "Scaling companies entering new markets. Corporate partnerships, embedded finance integration, and market expansion support.",
								includes: ["Corporate sandbox partnerships", "Market entry strategy (Vietnam \u2194 SEA \u2194 EU)", "Regulatory licensing support"],
							},
						].map((item, i) => (
							<FadeInUp key={i} delay={i * 0.1}>
								<div className="h-full p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
									<div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-${item.color}/10 text-${item.color} font-bold text-sm mb-4`}>
										{item.stage}
									</div>
									<p className={`text-2xl font-black text-${item.color} mb-4 font-heading`}>{item.range}</p>
									<p className="text-muted-foreground mb-6">{item.desc}</p>
									<ul className="space-y-2 text-sm text-muted-foreground">
										{item.includes.map((inc, j) => (
											<li key={j} className="flex items-start gap-2">
												<span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${item.color} shrink-0`}></span>
												{inc}
											</li>
										))}
									</ul>
								</div>
							</FadeInUp>
						))}
					</div>
				</div>
			</section>

			{/* Target Areas */}
			<section className="py-24 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<FadeInUp>
						<div className="text-center space-y-4">
							<h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">Target Areas</h2>
							<div className="w-24 h-1.5 bg-teal mx-auto rounded-full"></div>
							<p className="text-lg text-muted-foreground">We focus on high-impact areas where data, regulation, and fintech intersect.</p>
						</div>
					</FadeInUp>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
						{["Payments & Wallets", "Crypto & Web3", "Lending & Credit AI", "RegTech & AML", "Green Finance & ESG", "Embedded Finance"].map((area, i) => (
							<FadeInUp key={i} delay={i * 0.05}>
								<div className="group p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:bg-primary/5 transition-all duration-300 text-center">
									<h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{area}</h3>
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
							<h2 className="text-3xl md:text-5xl font-bold text-white font-heading">Ready to Get Funded?</h2>
							<p className="text-xl text-white/70 max-w-2xl mx-auto">
								Join Cohort 01 and accelerate your fintech journey with sandbox access, regulatory support, and investor exposure.
							</p>
							<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
								<Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-blue-electric hover:bg-blue-electric/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
									Apply for Funding
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
								</Link>
								<Link href="/sandbox" className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-transparent border border-white/30 hover:bg-white/10 h-14 px-10 rounded-full transition-all duration-300">
									Explore Sandbox
								</Link>
							</div>
						</div>
					</FadeInUp>
				</div>
			</section>
		</Layout>
	);
}
