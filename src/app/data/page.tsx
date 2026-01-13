import Layout from '@/common/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sovereign Financial Data - Da Nang Fintech Lab",
  description: "Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.",
  openGraph: {
    title: "Sovereign Financial Data - Da Nang Fintech Lab",
    description: "Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.",
    type: "website",
    images: ["/assets/img/dfl_1764273424335.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@replit",
    title: "Sovereign Financial Data - Da Nang Fintech Lab",
    description: "Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.",
    images: ["/assets/img/dfl_1764273424335.png"],
  }
};

export default function DataPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-24">
        
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center fade-in-up">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight glow-text text-black dark:text-white">
              Secure, Compliant Data for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
                Real Financial Innovation
              </span>
            </h1>
            <p className="text-xl font-medium text-muted-foreground">
              Access Vietnam’s first sovereign, privacy-preserving Financial Data Warehouse - blending anonymized banking telemetry, ESG datasets, credit inputs, and public market data.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full bg-primary text-white shadow hover:bg-primary/90 h-11 px-8 hover:shadow-xl transition-all duration-300">
                Request Access
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
            <h3 className="text-lg font-bold  mb-2 group-hover:text-primary transition-colors">PDPD-Aligned</h3>
            <p className="text-sm text-muted-foreground">Built with governance that aligns with personal data protection decrees.</p>
          </div>
          
          <div className="group p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300">
            <h3 className="text-lg font-bold  mb-2 group-hover:text-primary transition-colors">Synthetic Options</h3>
            <p className="text-sm text-muted-foreground">Use high-fidelity synthetic data for training without privacy risks.</p>
          </div>
          
          <div className="group p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300">
            <h3 className="text-lg font-bold  mb-2 group-hover:text-primary transition-colors">Differential Privacy</h3>
            <p className="text-sm text-muted-foreground">Mathematical guarantees of privacy for statistical analysis.</p>
          </div>
          
          <div className="group p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-card/30 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300">
            <h3 className="text-lg font-bold  mb-2 group-hover:text-primary transition-colors">Secure Enclaves</h3>
            <p className="text-sm text-muted-foreground">Train models in trusted execution environments.</p>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl p-8 md:p-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center ">Why It Matters</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 className="text-xl font-bold ">Lower Cost</h3>
                <p className="text-muted-foreground">Significantly reduce the barrier to entry for compliant data access.</p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3 className="text-xl font-bold ">Accelerate Innovation</h3>
                <p className="text-muted-foreground">Speed up development of green finance, lending, payments, and regtech models.</p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="text-xl font-bold ">Reduce Risk</h3>
                <p className="text-muted-foreground">Minimize policy risk with transparent audit trails and regulator-ready validation.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
