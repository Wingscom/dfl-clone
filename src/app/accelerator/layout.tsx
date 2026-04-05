import type { Metadata } from 'next';

import Layout from '@/common/Layout';

export const metadata: Metadata = {
	title: 'DFL24 — Accelerator',
	description:
		'Funding & Growth Programs at DFL24. Pre-seed to scale-up funding with sandbox access, regulatory support, and investor exposure for fintech builders.',
	openGraph: {
		title: 'DFL24 — Accelerator',
		description:
			'Funding & Growth Programs at DFL24. Pre-seed to scale-up funding with sandbox access, regulatory support, and investor exposure for fintech builders.',
		type: 'website',
		images: ['/assets/img/dfl24-logo.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'DFL24 — Accelerator',
		description:
			'Funding & Growth Programs at DFL24. Pre-seed to scale-up funding with sandbox access, regulatory support, and investor exposure for fintech builders.',
		images: ['/assets/img/dfl24-logo.png'],
	},
};

export default function AcceleratorLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Layout>{children}</Layout>;
}
