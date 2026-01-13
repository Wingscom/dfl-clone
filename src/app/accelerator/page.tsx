import Image from 'next/image';
import Link from 'next/link';

const TARGET_AREAS = [
	'Green Lending',
	'Payments',
	'SME Credit',
	'Fraud Detection',
	'RegTech',
	'Tokenization',
] as const;

export default function AcceleratorPage() {
	return (
		<div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-24">
			{/* Hero Section */}
			<section className="grid md:grid-cols-2 gap-12 items-center fade-in-up">
				<div className="space-y-6">
					<h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight glow-text ">
						A Data-Backed Accelerator for <br />
						<span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-500">
							AI-Fintech Builders
						</span>
					</h1>
					<p className="text-xl font-medium text-muted-foreground">
						A 6-month accelerator with governed data access, secure compute, and direct regulator touchpoints.
					</p>
				</div>

				<div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl min-h-100">
					<Image
						src="/assets/img/generated_images/digital_network_expansion.png"
						alt="Accelerator Team"
						fill
						className="absolute inset-0 w-full h-full object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-transparent z-10"></div>
				</div>
			</section>

			{/* Target Areas */}
			<section className="space-y-12">
				<div className="text-center max-w-3xl mx-auto space-y-4">
					<h2 className="text-3xl md:text-4xl font-bold ">Designed for Builders In</h2>
					<p className="text-lg text-muted-foreground">We focus on high-impact areas where data and regulation intersect.</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
					{TARGET_AREAS.map((area) => (
						<div
							key={area}
							className="group p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-primary/5 transition-colors text-center"
						>
							<h3 className="text-lg font-bold  group-hover:text-primary transition-colors">
								{area}
							</h3>
						</div>
					))}
				</div>
			</section>

			{/* What Founders Get */}
			<section className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl p-8 md:p-16 space-y-12">
				<div className="text-center max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-bold mb-6 ">What Founders Get</h2>
					<p className="text-lg text-muted-foreground">
						We provide the unfair advantages you need to go from prototype to pilot.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Feature 1 */}
					<div className="flex gap-4 p-6 rounded-2xl bg-background/40 border border-black/5 dark:border-white/5">
						<div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
								<path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
								<path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
							</svg>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-2 ">Data Access</h3>
							<p className="text-muted-foreground">
								Direct access to the Financial Data Warehouse - governed, sanitized, and ready for model training.
							</p>
						</div>
					</div>

					{/* Feature 2 */}
					<div className="flex gap-4 p-6 rounded-2xl bg-background/40 border border-black/5 dark:border-white/5">
						<div className="shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
								<path d="M8.5 8.5v.01" />
								<path d="M16 15.5v.01" />
								<path d="M12 12v.01" />
								<path d="M11 17v.01" />
								<path d="M7 14v.01" />
							</svg>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-2 ">Compute &amp; Validation</h3>
							<p className="text-muted-foreground">
								High-performance GPU compute resources, model validation frameworks, and sandbox support.
							</p>
						</div>
					</div>

					{/* Feature 3 */}
					<div className="flex gap-4 p-6 rounded-2xl bg-background/40 border border-black/5 dark:border-white/5">
						<div className="shrink-0 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
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
						<div>
							<h3 className="text-xl font-bold mb-2 ">Regulator Access</h3>
							<p className="text-muted-foreground">
								Structured office hours with regulators every 4 weeks to ensure compliance from day one.
							</p>
						</div>
					</div>

					{/* Feature 4 */}
					<div className="flex gap-4 p-6 rounded-2xl bg-background/40 border border-black/5 dark:border-white/5">
						<div className="shrink-0 w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
								<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
								<path d="M4 22h16" />
								<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
								<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
								<path d="M18 2h-6c-1.1 0-2 .9-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2Z" />
							</svg>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-2 ">Demo Day</h3>
							<p className="text-muted-foreground">
								Showcase your pilot to IFC representatives, global partners, and potential investors.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="text-center space-y-8 py-12">
				<h2 className="text-3xl md:text-4xl font-bold glow-text ">Ready to Accelerate?</h2>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Join the next cohort of fintech innovators and build the future of finance in Da Nang.
				</p>
				<Link
					href="/contact"
					className="inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full bg-primary text-white shadow hover:bg-primary/90 h-11 px-8"
				>
					Apply Now
				</Link>
			</section>
		</div>
	);
}
