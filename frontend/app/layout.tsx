import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ContentForge',
  description: 'AI content creation for students and professionals',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
