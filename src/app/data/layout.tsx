import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DFL24 — Data',
  description:
    'Where AI Meets the Future of Finance in Da Nang. DFL24 data services in the heart of Da Nang International Fintech District.',
  openGraph: {
    title: 'DFL24 — Data',
    description:
      'Where AI Meets the Future of Finance in Da Nang. DFL24 data services in the heart of Da Nang International Fintech District.',
    type: 'website',
    images: ['/assets/img/dfl24-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DFL24 — Data',
    description:
      'Where AI Meets the Future of Finance in Da Nang. DFL24 data services in the heart of Da Nang International Fintech District.',
    images: ['/assets/img/dfl24-logo.png'],
  },
};

export default function DataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
