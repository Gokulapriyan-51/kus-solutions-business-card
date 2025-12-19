import type { Metadata } from 'next';
import { Coiny, Dongle, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const coiny = Coiny({ variable: '--font-coiny', weight: '400', subsets: ['latin'] });
const dongle = Dongle({ variable: '--font-dongle', weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Gokulapriyan",
  description: "Protfolio of Gokulapriyan",
  viewport: 'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=0',
  // Add these to explicitly remove all icons
  icons: {
    icon: [
      { url: '', rel: 'icon' }
    ],
    apple: [
      { url: '', rel: 'apple-touch-icon' }
    ],
    shortcut: ['']
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        {/* Explicitly remove link tags */}
        <link rel="icon" href="data:," />
      </head>
      <body className={`${inter.className} ${coiny.variable} ${dongle.variable}`}>{children}</body>
    </html>
  );
}