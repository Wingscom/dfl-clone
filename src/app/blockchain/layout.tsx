import type { Metadata } from 'next';

import Layout from '@/common/Layout';

export const metadata: Metadata = {
	title: 'DFL24 — Blockchain',
	description:
		"Build blockchain innovations in DFL24's regulatory sandbox. DeFi, digital assets, RWA tokenization, and enterprise blockchain in Vietnam.",
	openGraph: {
		title: 'DFL24 — Blockchain',
		description:
			"Build blockchain innovations in DFL24's regulatory sandbox. DeFi, digital assets, RWA tokenization, and enterprise blockchain in Vietnam.",
		type: 'website',
		images: ['/assets/img/dfl24-logo.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'DFL24 — Blockchain',
		description:
			"Build blockchain innovations in DFL24's regulatory sandbox. DeFi, digital assets, RWA tokenization, and enterprise blockchain in Vietnam.",
		images: ['/assets/img/dfl24-logo.png'],
	},
};

export default function BlockchainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Layout>{children}</Layout>;
}
