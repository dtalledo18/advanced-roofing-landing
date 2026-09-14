import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Advanced Roofing | Free Roof Inspections',
  description:
      'Protect your home with a free roof inspection. Advanced Roofing identifies potential issues before they become costly repairs. Gutters, shingles, leaks and more.',
  keywords: [
    'roofing',
    'roof inspection',
    'free roof inspection',
    'gutters',
    'shingles',
    'leak repair',
    'Advanced Roofing',
  ],
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Advanced Roofing | Free Roof Inspections',
    description:
        'Protect your home with a free roof inspection. No cost, no pressure, no obligation.',
    type: 'website',
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white overflow-x-hidden">
      {children}
      </body>
      </html>
  );
}