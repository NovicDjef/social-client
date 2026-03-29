import type { Metadata } from 'next';
import { Providers } from '../lib/providers/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'NmSolution — Dashboard Marketing Digital',
  description: 'Plateforme marketing digital tout-en-un pour PME canadiennes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
