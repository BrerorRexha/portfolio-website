import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import ThemeRegistry from '@/lib/registry';
import PageLayout from '@/components/layout/PageLayout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Breror Rexha — Frontend Engineer',
  description:
    'Frontend engineer based in Prishtina, Kosova. Building scalable web systems with React, TypeScript, MUI, and TanStack.',
  openGraph: {
    title: 'Breror Rexha — Frontend Engineer',
    description: 'Frontend engineer building systems meant to outlast the hands that made them.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ThemeRegistry>
          <PageLayout>{children}</PageLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
