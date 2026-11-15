import type { Metadata } from 'next';
import './globals.css';
import { AppHeader } from '@/components/app-header';

export const metadata: Metadata = {
  title: 'TeachBack AI',
  description: 'Learn by teaching AI students.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        <main>{children}</main>
        <div className="phone-blocker">
          <div>🎓</div>
          <h1>A little more room, please</h1>
          <p>TeachBack AI Beta works on desktop and landscape tablets.</p>
        </div>
      </body>
    </html>
  );
}
