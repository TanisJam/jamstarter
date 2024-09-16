import type { Metadata } from 'next';

import './globals.css';

import { Footer } from './_components/molecules/Footer';

export const metadata: Metadata = {
  title: '{{name}}',
  description: 'Kickstarted with JamStarter',
  applicationName: '{{name}}',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="font-merriweather border-[6px] lg:border-[13px] border-base-100 flex flex-col place-content-between h-svh">
        {children}
        <Footer />
      </body>
    </html>
  );
}
