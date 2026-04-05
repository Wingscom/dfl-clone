import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DFL24 — Data',
  description:
    "DFL24 Financial Data Warehouse — Vietnam's first sovereign, privacy-preserving data platform. PDPD-aligned, synthetic data, differential privacy.",
  openGraph: {
    title: 'DFL24 — Data',
    description:
      "DFL24 Financial Data Warehouse — Vietnam's first sovereign, privacy-preserving data platform. PDPD-aligned, synthetic data, differential privacy.",
    type: 'website',
    images: ['/assets/img/dfl24-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DFL24 — Data',
    description:
      "DFL24 Financial Data Warehouse — Vietnam's first sovereign, privacy-preserving data platform. PDPD-aligned, synthetic data, differential privacy.",
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
