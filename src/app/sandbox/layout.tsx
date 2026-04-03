import type { Metadata } from 'next';

import Layout from '@/common/Layout';

export const metadata: Metadata = {
	title: 'DFL24 — Sandbox',
	description:
		'Test and validate fintech solutions with DFL24 secure compute, governed data access, and regulatory touchpoints.',
	openGraph: {
		title: 'DFL24 — Sandbox',
		description:
			'Test and validate fintech solutions with DFL24 secure compute, governed data access, and regulatory touchpoints.',
		type: 'website',
		images: ['/assets/img/dfl24-logo.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'DFL24 — Sandbox',
		description:
			'Test and validate fintech solutions with DFL24 secure compute, governed data access, and regulatory touchpoints.',
		images: ['/assets/img/dfl24-logo.png'],
	},
};

export default function SandboxLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Layout>{children}</Layout>;
}
