import type { Metadata } from 'next';

import Layout from '@/common/Layout';

export const metadata: Metadata = {
	title: 'Accelerator - Da Nang Fintech Lab',
	description:
		'Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.',
	openGraph: {
		title: 'Accelerator - Da Nang Fintech Lab',
		description:
			'Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.',
		type: 'website',
		images: ['/assets/img/dfl_1764273424335.png'],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@replit',
		title: 'Accelerator - Da Nang Fintech Lab',
		description:
			'Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.',
		images: ['/assets/img/dfl_1764273424335.png'],
	},
};

export default function AcceleratorLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Layout>{children}</Layout>;
}
