'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className="app-header">
      <Link className="brand" href="/classroom" aria-label="TeachBack AI home">
        <span className="brand-mark">◆</span><strong>TeachBack AI</strong><span className="beta">Beta</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link className={pathname === '/classroom' ? 'nav-link active' : 'nav-link'} href="/classroom">▣ Classroom</Link>
        <Link className={pathname === '/lesson-plan' ? 'nav-link active' : 'nav-link'} href="/lesson-plan">▤ Lesson Plan</Link>
      </nav>
      <button className="avatar" onClick={() => router.push('/settings')} aria-label="Open settings">MN</button>
    </header>
  );
}
