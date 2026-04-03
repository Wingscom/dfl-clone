import type { Metadata } from 'next';

import Layout from '@/common/Layout';

export const metadata: Metadata = {
	title: 'DFL24 — Blockchain',
	description:
		'Where AI Meets the Future of Finance in Da Nang. DFL24 explores blockchain innovation in the heart of Da Nang International Fintech District.',
	openGraph: {
		title: 'DFL24 — Blockchain',
		description:
			'Where AI Meets the Future of Finance in Da Nang. DFL24 explores blockchain innovation in the heart of Da Nang International Fintech District.',
		type: 'website',
		images: ['/assets/img/dfl24-logo.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'DFL24 — Blockchain',
		description:
			'Where AI Meets the Future of Finance in Da Nang. DFL24 explores blockchain innovation in the heart of Da Nang International Fintech District.',
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
