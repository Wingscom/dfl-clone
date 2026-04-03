import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "DFL24 — Da Nang Fintech Lab | Sandbox your Future",
  description: "Your Gateway to Fintech Innovation in Vietnam. Sandbox-as-a-Service, cross-border testing, regulatory acceleration — everything fintech companies need to build, test, and scale.",
  openGraph: {
    title: "DFL24 — Da Nang Fintech Lab | Sandbox your Future",
    description: "Your Gateway to Fintech Innovation in Vietnam. Sandbox-as-a-Service, cross-border testing, regulatory acceleration — everything fintech companies need to build, test, and scale.",
    type: "website",
    images: ["/assets/img/dfl24-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DFL24 — Da Nang Fintech Lab | Sandbox your Future",
    description: "Your Gateway to Fintech Innovation in Vietnam. Sandbox-as-a-Service, cross-border testing, regulatory acceleration — everything fintech companies need to build, test, and scale.",
    images: ["/assets/img/dfl24-logo.png"],
  },
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${sora.variable} ${dmSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
