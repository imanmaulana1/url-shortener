import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from '@/providers/providers';
import Navbar from '@/components/containers/navbar';
import { Toaster } from '@/components/ui/toaster';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'URL Shortener Linkly | Shorten, Share, Track URLs',
  description:
    'QuickLink simplifies your links. Shorten long URLs, customize them, and track click user engagement all in one place. Ideal for professionals, marketers, and casual users.',
  openGraph: {
    title: 'URL Shortener Linkly | Shorten, Share, Track URLs',
    description:
      'QuickLink simplifies your links. Shorten long URLs, customize them, and track click user engagement all in one place. Ideal for professionals, marketers, and casual users.',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/meta-image.png`,
        width: 1200,
        height: 630,
        alt: 'Preview of Linkly URL Shortener',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'URL Shortener Linkly | Shorten, Share, Track URLs',
    description:
      'QuickLink simplifies your links. Shorten long URLs, customize them, and track click user engagement all in one place.',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/meta-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
