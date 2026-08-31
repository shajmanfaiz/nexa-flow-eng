import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexa Flow Engineering — Industrial Piping, Fittings & Valve Stockist GCC',
  description:
    'API 5L line pipes, ASTM flanges, buttweld fittings and valves with full EN 10204 3.1 MTR traceability. Fast RFQ for UAE, KSA, Oman, Qatar and Kuwait.',
  icons: {
    icon: '/nexaflow-icon.png',
    apple: '/nexaflow-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07214C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
