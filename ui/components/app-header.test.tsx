import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppHeader } from './app-header';

vi.mock('next/navigation', () => ({ usePathname: () => '/classroom', useRouter: () => ({ push: vi.fn() }) }));

describe('AppHeader', () => {
  it('shows exactly the approved primary destinations', () => {
    render(<AppHeader />);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toHaveTextContent('Classroom');
    expect(navigation).toHaveTextContent('Lesson Plan');
    expect(navigation).not.toHaveTextContent('Settings');
  });
});
