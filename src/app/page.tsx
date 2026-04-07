import Layout from "@/common/Layout";
import Link from "next/link";
import { FadeInUp, FadeIn } from "@/common/AnimationWrapper";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section — Navy gradient with geometric pattern */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-navy via-[#0E2A52] to-navy overflow-hidden">
        {/* CSS geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232F80ED' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/50"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <FadeInUp>
            <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-sm">
              <span className="text-sm font-bold tracking-widest uppercase text-teal-light">
                Sandbox Testing in VIFC &#272;&#224; N&#7861;ng
              </span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white font-heading">
              Your Gateway to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-teal">
                Fintech Innovation
              </span>{" "}
              <br className="hidden md:block" />in Vietnam
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed text-white/80">
              Sandbox-as-a-Service. Cross-border testing. Regulatory acceleration.
              Everything fintech companies need to build, test, and scale — in one
              platform.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-blue-electric hover:bg-blue-electric/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Apply for Sandbox
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-transparent border border-white/30 hover:bg-white/10 h-14 px-10 rounded-full shadow-md transition-all duration-300"
              >
                Join DFL24 in DAVAS 2026
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ABOUT DFL24 SECTION */}
      <section className="bg-light-bg py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeInUp>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">
                About DFL24
              </h2>
              <div className="w-24 h-1.5 bg-blue-electric mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DFL24 &ndash; Danang Fintech Lab. Where innovation meets sovereignty. Where every district becomes a gateway to the future.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DFL24 is not just a fintech sandbox. It is a purpose-built innovation ecosystem, strategically anchored inside the Vietnam International Financial Centre (VIFC) in &#272;&#224; N&#7861;ng. As one of the first 10 strategic investors licensed as members of VIFC &#272;&#224; N&#7861;ng, we stand at the forefront of shaping Vietnam&apos;s new financial landscape.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sandbox 2.0 Infrastructure", desc: "A living laboratory that enables real-world testing with real data, real users, and real market dynamics.", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
              { title: "Regulatory & Legal Navigation", desc: "Direct support from experts to streamline approvals and embed compliance from day one.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Cross-Border Testing", desc: "A launchpad to Southeast Asia\u2019s most vibrant economies, enabling seamless piloting and scaling across borders.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
              { title: "Corporate Innovation Programs", desc: "Tailored collaborations with financial institutions and enterprises to co-create next-generation solutions.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { title: "End-to-End Growth Support", desc: "From incubation and acceleration to go-to-market execution, de-risking every step of the journey.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
            ].map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
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
              <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">
                The Story Behind &ldquo;24&rdquo;
              </h2>
              <div className="w-24 h-1.5 bg-teal mx-auto rounded-full"></div>
              <p className="text-lg text-white/80 leading-relaxed">
                24 is not a year. It is not a number of hours. It is a statement of identity, unity, and ambition.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                24 stands for the 24 districts and townships of &#272;&#224; N&#7861;ng &ndash; including the two island districts of Ho&#224;ng Sa (Paracel) and Tr&#432;&#7901;ng Sa (Spratly).
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Completeness", desc: "Just as 24 districts make \u0110\u00e0 N\u1eb5ng whole, DFL24 brings together every piece of the fintech puzzle: regulation, infrastructure, capital, and talent." },
              { title: "Unwavering Presence", desc: "Like the 24/7 rhythm of a city that never sleeps, we stand ready to support innovators anytime, anywhere." },
              { title: "A Vision Without Borders", desc: "The two island districts remind us that true innovation knows no boundaries." },
              { title: "Rooted Yet Global", desc: "We draw strength from our local foundation, while thinking and acting on a global scale. 24 is our anchor; Southeast Asia is our horizon." },
            ].map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-teal-light mb-3 font-heading">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp>
            <p className="text-center text-2xl md:text-3xl font-bold font-heading text-teal-light">
              More Than a Sandbox. A Launchpad with Purpose.
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
                Our Product Suite
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInUp delay={0.1} className="h-full">
              <div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
                  1. Sandbox-as-a-Service
                </h3>
                <p className="text-blue-electric font-medium mb-6">
                  Launch fast. Test safely. Scale with confidence.
                </p>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">What you get:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-primary">
                      <li>Secure cloud sandbox environment</li>
                      <li>API integrations (Payment, KYC, Banking simulation)</li>
                      <li>Built-in compliance layer (KYC/AML, reporting)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">Use cases:</h4>
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
              <div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
                  2. Cross-border Sandbox
                </h3>
                <p className="text-accent font-medium mb-6">
                  Test across markets. Launch globally.
                </p>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">What you get:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-accent">
                      <li>Multi-market testing (Vietnam &#8596; International)</li>
                      <li>FX simulation & multi-currency flows</li>
                      <li>Regulatory advisory & pilot structuring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1} className="h-full">
              <div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
                  3. Corporate Sandbox Program
                </h3>
                <div className="space-y-6 text-muted-foreground mt-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">What you get:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-secondary">
                      <li>Startup solution testing environment</li>
                      <li>Curated deal flow access</li>
                      <li>Pilot execution (4&ndash;12 weeks) with KPI tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">Use cases:</h4>
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
              <div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
                  4. Embedded Finance Lab
                </h3>
                <p className="text-primary font-medium mb-6">
                  Monetize your platform with financial services.
                </p>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">What you get:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-primary">
                      <li>Embedded finance design (payments, lending, wallets)</li>
                      <li>Sandbox testing & API integration</li>
                      <li>Go-to-market & pilot launch support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">Use cases:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-primary">
                      <li>SaaS integrating payments</li>
                      <li>Marketplace offering lending</li>
                      <li>Platforms launching wallets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3} className="md:col-span-2 max-w-3xl mx-auto w-full">
              <div className="h-full group relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold mb-3 text-foreground font-heading">
                  5. Compliance Sandbox
                </h3>
                <p className="text-accent font-medium mb-6">
                  Test compliance before regulators do.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">What you get:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 marker:text-accent">
                      <li>KYC / AML / transaction monitoring testing</li>
                      <li>Risk simulation & audit scenarios</li>
                      <li>Regulatory advisory & sandbox readiness</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">Use cases:</h4>
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
      </section>

      {/* BUNDLED SOLUTIONS */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeInUp>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">
                Bundled Solutions
              </h2>
              <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FadeInUp delay={0.1}>
              <div className="p-8 h-full rounded-3xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Startup Package</h3>
                <p className="text-xl font-medium text-foreground">Sandbox + Compliance</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="p-8 h-full rounded-3xl bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent mb-4 font-heading">Scale-up Package</h3>
                <p className="text-xl font-medium text-foreground">Cross-border + Compliance</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="p-8 h-full rounded-3xl bg-gradient-to-b from-secondary/10 to-transparent border border-secondary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">Corporate Package</h3>
                <p className="text-xl font-medium text-foreground">Sandbox + Deal Flow</p>
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
                  <h2 className="text-3xl md:text-5xl font-black font-heading mb-4">
                    Cohort 01 &mdash; 2026
                  </h2>

                  <div className="grid grid-cols-2 gap-6 mb-8 text-white/70">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-blue-electric">5</span>
                      <span className="font-medium">startups</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-teal-light">2</span>
                      <span className="font-medium">corporates</span>
                    </div>
                    <div className="flex flex-col col-span-2">
                      <span className="text-3xl font-black text-cyan">3</span>
                      <span className="font-medium">months</span>
                    </div>
                  </div>
                  <p className="text-lg font-bold italic text-teal-light">
                    Your fast track into Vietnam&apos;s fintech ecosystem
                  </p>
                </div>

                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-6 font-heading">What you get:</h3>
                  <ul className="space-y-4 text-lg text-white/80">
                    {["Full sandbox access", "Regulatory support", "Pilot execution", "Investor & partner exposure"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal/20 text-teal-light flex items-center justify-center shrink-0 text-sm font-bold">&#10003;</div>
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

      {/* WHY DFL24 */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeInUp>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">
                Why DFL24
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Speed", desc: "Launch sandbox in weeks, not months", color: "primary", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Regulatory Access", desc: "Direct pathway into Vietnam sandbox frameworks", color: "accent", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Cross-border Capability", desc: "Test globally from one platform", color: "secondary", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
              { title: "Cost Advantage", desc: "4\u20135\u00d7 cheaper than Singapore", color: "teal", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Full-stack Support", desc: "Tech + compliance + market entry", color: "blue-electric", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
            ].map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className={`p-6 rounded-3xl border border-gray-100 bg-white shadow-sm shrink-0 flex flex-col items-center text-center space-y-3 h-full group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${i === 3 ? 'md:col-start-1 lg:col-start-auto' : ''}`}>
                  <div className={`w-16 h-16 rounded-full bg-${item.color}/10 text-${item.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-heading">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="bg-white rounded-3xl p-12 md:p-20 text-center space-y-8 shadow-xl border border-gray-100">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading">
                  Ready to build in Vietnam?
                </h2>
                <p className="text-xl text-muted-foreground font-medium">
                  Book a free consultation and enter the DFL24 sandbox ecosystem.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-blue-electric hover:bg-blue-electric/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Apply Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-primary bg-primary/10 hover:bg-primary/20 h-14 px-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Talk to our team
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
