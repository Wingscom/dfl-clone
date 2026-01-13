import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}
