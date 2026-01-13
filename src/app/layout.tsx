import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DFL - Da Nang Fintech Lab",
  description: "Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.",
  openGraph: {
    title: "DFL - Da Nang Fintech Lab",
    description: "Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.",
    type: "website",
    images: ["/assets/img/dfl_1764273424335.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@replit",
    title: "DFL - Da Nang Fintech Lab",
    description: "Where AI Meets the Future of Finance in Da Nang. A premiere startup accelerator in the heart of Da Nang International Fintech District.",
    images: ["/assets/img/dfl_1764273424335.png"],
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
        className={`${nunito.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

