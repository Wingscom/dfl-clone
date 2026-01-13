"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");

    const style = document.createElement("style");
    style.innerHTML = `
      .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }
      .fade-in-delayed { animation: fadeIn 0.8s ease-out 0.4s forwards; opacity: 0; }
      @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
      @keyframes fadeIn { to { opacity: 1; } }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  function handleMobileLinkClick() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30 animate-blob animation-delay-4000" />
      </div>

      <main>
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-32">
          {/* Hero Section */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl min-h-[60vh] flex items-center">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />
              <img
                src="/assets/img/blockchain-hero.jpg"
                alt="Blockchain Future"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-20 max-w-4xl p-12 md:p-20 space-y-8">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">
                The Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  Blockchain Innovation
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl leading-relaxed">
                Build, test, and scale your blockchain solutions in
                Vietnam&apos;s premier regulatory sandbox. We provide the legal
                framework, you provide the innovation.
              </p>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
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
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold ">
                Regulatory Sandbox
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Operate with confidence under a clear legal framework supervised
                by local authorities. Test tokenization, DeFi, and digital
                assets safely.
              </p>
            </div>

            {/* Benefit 2 */}
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold ">
                Speed to Market
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Fast-track licensing and business setup. Get your product in
                front of users faster with our streamlined compliance processes.
              </p>
            </div>

            {/* Benefit 3 */}
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" x2="23" y1="8" y2="11" />
                  <line x1="23" x2="20" y1="8" y2="11" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold ">
                Access to Talent
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tap into Vietnam&apos;s deep pool of blockchain developers and
                engineers. Leverage high-quality technical talent at competitive
                costs.
              </p>
            </div>
          </div>

          {/* Focus Areas */}
          <div id="program-details" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold ">
                Core Focus Areas
              </h2>
              <p className="text-xl text-muted-foreground">
                We are looking for innovative startups building in these key
                sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Area 1 */}
              <div className="flex gap-6 p-8 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-colors">
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
                  <span className="text-2xl font-bold">01</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold ">
                    DeFi & Digital Assets
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Next-generation decentralized finance protocols, asset
                    management tools, and digital asset exchanges.
                  </p>
                </div>
              </div>

              {/* Area 2 */}
              <div className="flex gap-6 p-8 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-colors">
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-lg">
                  <span className="text-2xl font-bold">02</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold ">
                    Real World Assets (RWA)
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Tokenization of real estate, commodities, and other tangible
                    assets to increase liquidity and accessibility.
                  </p>
                </div>
              </div>

              {/* Area 3 */}
              <div className="flex gap-6 p-8 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-colors">
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                  <span className="text-2xl font-bold">03</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold ">
                    Enterprise Blockchain
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Supply chain tracking, identity management, and private
                    blockchain solutions for large-scale enterprises.
                  </p>
                </div>
              </div>

              {/* Area 4 */}
              <div className="flex gap-6 p-8 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-colors">
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
                  <span className="text-2xl font-bold">04</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold ">
                    Blockchain Infrastructure
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Developer tools, security solutions, and scalability layers
                    that form the backbone of the decentralized web.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            id="apply"
            className="bg-gradient-to-br from-black to-gray-900 dark:from-white/10 dark:to-white/5 rounded-[2.5rem] p-12 md:p-20 text-center space-y-8 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/assets/img/grid-pattern.svg')] opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold ">
                Start Building the Future
              </h2>
              <p className="text-xl text-gray-300">
                Join the DFL Blockchain Track and get the support you need to
                turn your vision into reality.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-primary hover:bg-primary/90 h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Apply for the Program
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
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
