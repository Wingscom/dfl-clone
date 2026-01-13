import type { Metadata } from 'next';

import Layout from '@/common/Layout';

export const metadata: Metadata = {
	title: 'Sandbox - Da Nang Fintech Lab',
	description:
		'Test and validate fintech solutions with secure compute, governed data access, and regulatory touchpoints.',
};

export default function SandboxLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Layout>{children}</Layout>;
}
