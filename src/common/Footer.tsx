import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-300 bg-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image src="/assets/img/dfl_1764273424335.png" alt="DFL Logo" width={100} height={32} className="h-8 w-auto" />
            </div>
            <p className="text-gray-600 text-sm">
              The Future of Green Finance & Digital Innovation
            </p>
            <div className="pt-2">
              <p className="text-xs text-gray-600 font-medium border-l-2 border-primary pl-3">
                Strategic Initiative under Resolution 259/NQ-CP<br/>
                Creating Vietnam&apos;s Global Financial Center
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/110184383" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary transition-colors cursor-pointer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div className="col-span-1 space-y-4">
            <h4 className="font-bold text-base text-gray-900">About</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">DFL</Link></li>
              <li><Link href="/vision" className="hover:text-primary transition-colors">Vision</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div className="col-span-1 space-y-4">
            <h4 className="font-bold text-base text-gray-900">Programs</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link href="/accelerator" className="hover:text-primary transition-colors">Accelerator</Link></li>
              <li><Link href="/sandbox" className="hover:text-primary transition-colors">Sandbox</Link></li>
              <li><Link href="/blockchain" className="hover:text-primary transition-colors">Blockchain</Link></li>
            </ul>
          </div>

          <div className="col-span-1 space-y-4">
            <h4 className="font-bold text-base text-gray-900">Ecosystem</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link href="/data" className="hover:text-primary transition-colors">Market Data</Link></li>
              <li><Link href="/green-finance" className="hover:text-primary transition-colors">Green Finance</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>
        <div className="border-t border-gray-300 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 flex gap-4 flex-wrap">
            <span>© {currentYear} Da Nang Fintech Lab. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
