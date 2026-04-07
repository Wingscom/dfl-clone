import type { Metadata } from 'next';
import Layout from '@/common/Layout';

export const metadata: Metadata = {
  title: "DFL24 — About",
  description: "DFL24 — Danang Fintech Lab. Purpose-built innovation ecosystem inside Vietnam International Financial Centre. Meet our team and mission.",
  openGraph: {
    title: "DFL24 — About",
    description: "DFL24 — Danang Fintech Lab. Purpose-built innovation ecosystem inside Vietnam International Financial Centre. Meet our team and mission.",
    type: "website",
    images: ["/assets/img/dfl24-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DFL24 — About",
    description: "DFL24 — Danang Fintech Lab. Purpose-built innovation ecosystem inside Vietnam International Financial Centre. Meet our team and mission.",
    images: ["/assets/img/dfl24-logo.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
