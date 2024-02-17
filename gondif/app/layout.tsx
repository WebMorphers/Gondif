import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'
import Home from './page';
import { getServerSession } from 'next-auth' 
import SessionProvider from './SessionProvider/page';
import { authOptions } from '@/pages/api/auth/[...nextauth]';


  
export const viewport: Viewport = {
  themeColor: 'media: "(prefers-color-scheme: dark)", color: "#fff"',
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
}

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
    <link rel="manifest" href="/manifest.json" />
    <body className={urbanist.className}>
      <SessionProvider session={session}>
        {!session ? children : <Home />}
        
      </SessionProvider>
    </body>
  </html>
  );
}
