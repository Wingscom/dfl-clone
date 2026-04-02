import Layout from "@/common/Layout";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp, FadeIn } from "@/common/AnimationWrapper";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-32 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/generated_images/futuristic_da_nang_skyline_with_fintech_nodes.png"
            alt="Futuristic Da Nang"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 fade-in-up">
          <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md shadow-sm">
            <span className="text-sm font-bold tracking-widest uppercase text-primary">
              Sandbox your Future
            </span>
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] glow-text text-foreground">
              Your Gateway to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Fintech Innovation in Vietnam
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl font-bold max-w-3xl mx-auto leading-relaxed text-foreground">
            Sandbox-as-a-Service. Cross-border testing. Regulatory acceleration.
            Everything fintech companies need to build, test, and scale — in one
            platform.
          </p>
        </div>
      </section>

      {/* Content Sections Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 space-y-32">
        {/* SECTION 1 - Tech & Capital */}
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" x2="9" y1="1" y2="4" />
                  <line x1="15" x2="15" y1="1" y2="4" />
                  <line x1="9" x2="9" y1="20" y2="23" />
                  <line x1="15" x2="15" y1="20" y2="23" />
                  <line x1="20" x2="23" y1="9" y2="9" />
                  <line x1="20" x2="23" y1="14" y2="14" />
                  <line x1="1" x2="4" y1="9" y2="9" />
                  <line x1="1" x2="4" y1="14" y2="14" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Strategic Tech Ecosystem
              </h2>
              <div className="space-y-4 text-lg leading-relaxed font-medium text-foreground">
                <p>
                  <strong className="text-primary">Innovation Engine:</strong>{" "}
                  DFL is the core innovation engine of Da Nang&apos;s
                  International Financial Centre (IFC).
                </p>
                <p>
                  <strong className="text-primary">Fast Deployment:</strong>{" "}
                  Being housed within the Tech Park ensures technology is
                  immediately connected to financial capital and preferential
                  tax policies.
                </p>
                <p>
                  <strong className="text-primary">Accelerated Growth:</strong>{" "}
                  Our physical placement shortens the time from initial tech
                  development to full financial deployment.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-full min-h-[300px] md:min-h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent z-10 md:bg-gradient-to-r"></div>
              <Image
                src="/assets/img/danang-masterplan-1.png"
                alt="Tech Ecosystem"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2 - Trade & Logistics */}
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
            <div className="relative overflow-hidden h-full min-h-[300px] md:min-h-auto order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-l from-card via-transparent to-transparent z-10"></div>
              <Image
                src="/assets/img/generated_images/digital_network_expansion.png"
                alt="Global Trade Gateway"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-10 order-1 md:order-2">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Global Trade Gateway
              </h2>
              <div className="space-y-4 text-lg leading-relaxed font-medium text-foreground">
                <p>
                  <strong className="text-primary">Logistical Link:</strong>{" "}
                  Situated near the Free Trade Zone (FTZ) and major seaports
                  like Lien Chieu and Tien Sa.
                </p>
                <p>
                  <strong className="text-primary">Trade Finance Focus:</strong>{" "}
                  Designed for innovators developing cross-border payments,
                  supply chain finance, and digitized logistics.
                </p>
                <p>
                  <strong className="text-primary">Real-World Testing:</strong>{" "}
                  Test solutions immediately within the FTZ&apos;s simplified
                  regulatory environment to impact the East-West Economic
                  Corridor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 - Policy & Value Chain */}
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Scalable Policy Lab
              </h2>
              <div className="space-y-4 text-lg leading-relaxed font-medium text-foreground">
                <p>
                  <strong className="text-primary">Sandbox Trials:</strong> As a
                  &quot;policy laboratory,&quot; we trial new financial
                  mechanisms and digital asset sandboxes before they scale.
                </p>
                <p>
                  <strong className="text-primary">
                    Integrated Solutions:
                  </strong>{" "}
                  Companies can create Green Finance for port operations and
                  automated insurance for FTZ businesses.
                </p>
                <p>
                  <strong className="text-primary">Global Investment:</strong>{" "}
                  We attract international funds targeting Asia-Pacific supply
                  chains and the new digital economy.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-full min-h-[300px] md:min-h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent z-10 md:bg-gradient-to-r"></div>
              <Image
                src="/assets/img/enterprise-infrastructure.jpg"
                alt="Policy Lab"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* OUR PRODUCT SUITE */}
        <div className="space-y-12">
          <FadeInUp>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground glow-text tracking-tight">
                OUR PRODUCT SUITE
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInUp delay={0.1} className="h-full">
              <div className="h-full group relative rounded-4xl overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm  p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  1. Sandbox-as-a-Service
                </h3>
                <p className="text-primary font-medium mb-6">
                  Launch fast. Test safely. Scale with confidence.
                </p>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2">What you get:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-primary">
                      <li>Secure cloud sandbox environment</li>
                      <li>
                        API integrations (Payment, KYC, Banking simulation)
                      </li>
                      <li>Built-in compliance layer (KYC/AML, reporting)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Use cases:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-primary">
                      <li>Payment flow testing</li>
                      <li>Credit scoring models</li>
                      <li>Crypto on/off ramp validation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2} className="h-full">
              <div className="h-full group relative rounded-[2rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm  p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  2. Cross-border Sandbox
                </h3>
                <p className="text-accent font-medium mb-6">
                  Test across markets. Launch globally.
                </p>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2">What you get:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-accent">
                      <li>Multi-market testing (Vietnam ↔ International)</li>
                      <li>FX simulation & multi-currency flows</li>
                      <li>Regulatory advisory & pilot structuring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1} className="h-full">
              <div className="h-full group relative rounded-[2rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm  p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  3. Corporate Sandbox Program
                </h3>
                <div className="space-y-6 text-muted-foreground mt-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">What you get:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-secondary">
                      <li>Startup solution testing environment</li>
                      <li>Curated deal flow access</li>
                      <li>Pilot execution (4–12 weeks) with KPI tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Use cases:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-secondary">
                      <li>AI fraud detection (banks)</li>
                      <li>Cross-border payments (airlines)</li>
                      <li>Embedded lending (platforms)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2} className="h-full">
              <div className="h-full group relative rounded-[2rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm  p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  4. Embedded Finance Lab
                </h3>
                <p className="text-primary font-medium mb-6">
                  Monetize your platform with financial services.
                </p>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2">What you get:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-primary">
                      <li>
                        Embedded finance design (payments, lending, wallets)
                      </li>
                      <li>Sandbox testing & API integration</li>
                      <li>Go-to-market & pilot launch support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Use cases:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-primary">
                      <li>SaaS integrating payments</li>
                      <li>Marketplace offering lending</li>
                      <li>Platforms launching wallets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp
              delay={0.3}
              className="md:col-span-2 max-w-3xl mx-auto w-full"
            >
              <div className="h-full group relative rounded-[2rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm  p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  5. Compliance Sandbox
                </h3>
                <p className="text-accent font-medium mb-6">
                  Test compliance before regulators do.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2">What you get:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-accent">
                      <li>KYC / AML / transaction monitoring testing</li>
                      <li>Risk simulation & audit scenarios</li>
                      <li>Regulatory advisory & sandbox readiness</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Use cases:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-accent">
                      <li>Crypto AML testing</li>
                      <li>Compliance AI validation</li>
                      <li>RegTech product certification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* BUNDLED SOLUTIONS */}
        <div className="space-y-12">
          <FadeInUp>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground glow-text tracking-tight">
                BUNDLED SOLUTIONS
              </h2>
              <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FadeInUp delay={0.1}>
              <div className="p-8 h-full rounded-[2rem] bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Startup Package
                </h3>
                <p className="text-xl font-medium text-foreground">
                  Sandbox + Compliance
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="p-8 h-full rounded-[2rem] bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  Scale-up Package
                </h3>
                <p className="text-xl font-medium text-foreground">
                  Cross-border + Compliance
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="p-8 h-full rounded-[2rem] bg-gradient-to-b from-secondary/10 to-transparent border border-secondary/20 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Corporate Package
                </h3>
                <p className="text-xl font-medium text-foreground">
                  Sandbox + Deal Flow
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* GO-TO-MARKET: DFL COHORT 01 – 2026 */}
        <FadeInUp>
          <div className="rounded-[2.5rem] bg-gradient-to-br from-card to-background border border-white/10 shadow-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                  GO-TO-MARKET:
                  <br />
                  DFL COHORT 01 – 2026
                </h2>

                <div className="grid grid-cols-2 gap-6 mb-8 text-muted-foreground">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-primary">5</span>
                    <span className="font-medium">startups</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-accent">2</span>
                    <span className="font-medium">corporates</span>
                  </div>
                  <div className="flex flex-col col-span-2">
                    <span className="text-3xl font-black text-secondary">
                      3
                    </span>
                    <span className="font-medium">months</span>
                  </div>
                </div>
                <p className="text-lg font-bold italic text-foreground">
                  Your fast track into Vietnam’s fintech ecosystem
                </p>
              </div>

              <div className="bg-white/50 dark:bg-black/20 p-8 rounded-3xl border border-border/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  What you get:
                </h3>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <span>Full sandbox access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <span>Regulatory support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <span>Pilot execution</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <span>Investor & partner exposure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* WHY DA NANG / WHY DFL24 */}
        <div className="space-y-12">
          <FadeInUp>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground glow-text tracking-tight">
                WHY DA NANG <br className="md:hidden" />{" "}
                <span className="opacity-50 mx-2 hidden md:inline">|</span> WHY
                DFL24
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInUp delay={0.1}>
              <div className="p-6 rounded-[2rem] border border-white/5 bg-card/50 shadow-lg shrink-0 flex flex-col items-center text-center space-y-3 h-full group hover:bg-primary/5 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Speed</h3>
                <p className="text-muted-foreground">
                  Launch sandbox in weeks, not months
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="p-6 rounded-[2rem] border border-white/5 bg-card/50 shadow-lg shrink-0 flex flex-col items-center text-center space-y-3 h-full group hover:bg-accent/5 transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Regulatory Access
                </h3>
                <p className="text-muted-foreground">
                  Direct pathway into Vietnam sandbox frameworks
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="p-6 rounded-[2rem] border border-white/5 bg-card/50 shadow-lg shrink-0 flex flex-col items-center text-center space-y-3 h-full group hover:bg-secondary/5 transition-colors">
                <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Cross-border Capability
                </h3>
                <p className="text-muted-foreground">
                  Test globally from one platform
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="p-6 rounded-[2rem] border border-white/5 bg-card/50 shadow-lg shrink-0 flex flex-col items-center text-center space-y-3 h-full group hover:bg-green-500/5 transition-colors md:col-start-1 lg:col-start-2">
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Cost Advantage
                </h3>
                <p className="text-muted-foreground">
                  4–5× cheaper than Singapore
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="p-6 rounded-[2rem] border border-white/5 bg-card/50 shadow-lg shrink-0 flex flex-col items-center text-center space-y-3 h-full group hover:bg-purple-500/5 transition-colors">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Full-stack Support
                </h3>
                <p className="text-muted-foreground">
                  Tech + compliance + market entry
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Partners CTA */}
        <div className="text-center py-8">
          <Link
            href="/partners"
            className="inline-flex items-center justify-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors group"
          >
            See our Partners & Mentors
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </Link>
        </div>

        {/* CTA Section */}
        <FadeInUp>
          <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-12 md:p-20 text-center space-y-8 shadow-xl border border-border/50">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Ready to build in Vietnam?
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                Book a free consultation and enter the DFL sandbox ecosystem.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-primary hover:bg-primary/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Apply Now
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-base font-bold text-primary bg-primary/10 hover:bg-primary/20 h-14 px-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Talk to our team
              </Link>
            </div>

            <div className="pt-8 flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/company/dfl24/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only text-foreground">
                  LinkedIn Company
                </span>
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/showcase/fintech-sandbox-vietnam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <span className="sr-only text-foreground ">
                  LinkedIn Showcase
                </span>
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </FadeInUp>
      </div>
    </Layout>
  );
}
