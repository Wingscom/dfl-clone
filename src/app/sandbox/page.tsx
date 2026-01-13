import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Regulatory Sandbox - Da Nang Fintech Lab',
	description:
		'Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.',
	openGraph: {
		title: 'Regulatory Sandbox - Da Nang Fintech Lab',
		description:
			'Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.',
		type: 'website',
		images: ['/assets/img/dfl_1764273424335.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Regulatory Sandbox - Da Nang Fintech Lab',
		description:
			'Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.',
		images: ['/assets/img/dfl_1764273424335.png'],
	},
};

export default function SandboxPage() {
	return (
		<div className="relative">
			{/* Background Elements (from HTML body) */}
			<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
				<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-blob" />
				<div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-30 animate-blob animation-delay-2000" />
				<div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30 animate-blob animation-delay-4000" />
			</div>

			<div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-32">
				{/* Hero Section */}
				<div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl min-h-[60vh] flex items-center">
					<div className="absolute inset-0 z-0">
						<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />
						<img
							src="/assets/img/accelerator-hero.jpg"
							alt="Regulatory Sandbox"
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="relative z-20 max-w-4xl p-12 md:p-20 space-y-8">
						<h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">
							Vietnam&apos;s First <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
								Regulatory Sandbox
							</span>
						</h1>

						<p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl leading-relaxed">
							A secure testing environment supervised by the State Bank of Vietnam (SBV). Pilot new
							technologies - including digital assets and P2P lending - safely and legally.
						</p>
					</div>
				</div>

				{/* Key Features Grid */}
				<div className="space-y-12">
					<div className="text-center max-w-3xl mx-auto space-y-4">
						<h2 className="text-4xl md:text-5xl font-bold ">Safe Testing Ground</h2>
						<p className="text-xl text-muted-foreground">
							Test your innovations in a live market environment with regulatory guidance.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Feature 1 */}
						<div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-emerald-500/5 transition-all duration-300 space-y-6 group">
							<div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
									<path d="m9 12 2 2 4-4" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold ">SBV Oversight</h3>
							<p className="text-muted-foreground leading-relaxed">
								Direct supervision and regular feedback loops with the State Bank of Vietnam ensure your
								product meets compliance standards from day one.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-teal-500/5 transition-all duration-300 space-y-6 group">
							<div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform duration-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<rect width="20" height="14" x="2" y="3" rx="2" />
									<line x1="8" x2="16" y1="21" y2="21" />
									<line x1="12" x2="12" y1="17" y2="21" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold ">Live Testing</h3>
							<p className="text-muted-foreground leading-relaxed">
								Deploy to real users in a controlled environment. Validate your business model and
								technology with actual market data.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-green-500/5 transition-all duration-300 space-y-6 group">
							<div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
									<polyline points="3.27 6.96 12 12.01 20.73 6.96" />
									<line x1="12" y1="22.08" x2="12" y2="12" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold ">New Frontiers</h3>
							<p className="text-muted-foreground leading-relaxed">
								Specifically designed for emerging technologies including Digital Assets, P2P Lending, and
								Blockchain-based financial services.
							</p>
						</div>
					</div>
				</div>

				{/* Process Section */}
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<h2 className="text-4xl md:text-5xl font-bold  leading-tight">
							The Sandbox Process
						</h2>

						<div className="space-y-8">
							<div className="flex gap-6">
								<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
									1
								</div>
								<div className="space-y-2">
									<h3 className="text-xl font-bold ">Application &amp; Review</h3>
									<p className="text-muted-foreground">
										Submit your proposal. We evaluate based on innovation, consumer benefit, and readiness.
									</p>
								</div>
							</div>

							<div className="flex gap-6">
								<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
									2
								</div>
								<div className="space-y-2">
									<h3 className="text-xl font-bold ">Testing Parameters</h3>
									<p className="text-muted-foreground">
										Define scope, duration, and safeguards. Set clear KPIs for success.
									</p>
								</div>
							</div>

							<div className="flex gap-6">
								<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
									3
								</div>
								<div className="space-y-2">
									<h3 className="text-xl font-bold ">Live Deployment</h3>
									<p className="text-muted-foreground">
										Launch to a limited user base under supervision. Regular reporting and monitoring.
									</p>
								</div>
							</div>

							<div className="flex gap-6">
								<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
									4
								</div>
								<div className="space-y-2">
									<h3 className="text-xl font-bold ">Exit &amp; Scale</h3>
									<p className="text-muted-foreground">
										Upon successful completion, receive authorization to scale operations across Vietnam.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative rounded-[2.5rem] overflow-hidden aspect-square md:aspect-auto md:h-[600px] border border-black/5 dark:border-white/5 shadow-2xl">
						<div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/20 to-transparent z-10" />
						<img
							src="/assets/img/generated_images/digital_network_expansion.png"
							alt="Sandbox Process"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* CTA */}
				<div className="bg-emerald-900/10 dark:bg-emerald-900/20 rounded-[2.5rem] p-12 md:p-20 text-center space-y-8 border border-emerald-500/20 shadow-xl">
					<div className="max-w-3xl mx-auto space-y-6">
						<h2 className="text-3xl md:text-5xl font-bold ">Ready to Innovate Safely?</h2>
						<p className="text-xl text-muted-foreground">
							Apply for the Regulatory Sandbox and pioneer the future of finance in a secure environment.
						</p>
					</div>

					<div className="pt-4">
						<Link
							href="/contact"
							className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-primary hover:bg-primary/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
						>
							Contact Us
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
