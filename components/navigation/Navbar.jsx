import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Button } from '../core/Button.jsx';

const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ opacity: .8 }}>
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Kleros website navigation bar (deep-purple, transparent over the hero).
 * Drop inside a `.k-dark` context. `links` default to the live site menu.
 */
export function Navbar({
  links = [
    { label: 'Apps', hasMenu: true },
    { label: 'Web3', hasMenu: true },
    { label: 'Enterprise', hasMenu: true },
    { label: 'Resources', hasMenu: true },
    { label: 'Docs' },
    { label: 'More', hasMenu: true },
  ],
  cta = 'Enter Court',
  onCta,
  className = '',
  ...rest
}) {
  return (
    <header className={`k-navbar ${className}`.trim()} style={{
      height: 'var(--navbar-height)', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 64px', gap: 32, color: '#fff',
    }} {...rest}>
      <a href="#" aria-label="Kleros home" style={{ color: '#fff', display: 'inline-flex' }}><Logo height={28} /></a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 32, flex: 1, justifyContent: 'center' }}>
        {links.map((l) => (
          <a key={l.label} href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, color: '#fff',
            textDecoration: 'none', fontSize: 16, fontWeight: 400, opacity: .92,
          }}>{l.label}{l.hasMenu ? <Chevron /> : null}</a>
        ))}
      </nav>
      <Button variant="primary" onClick={onCta}>{cta}</Button>
    </header>
  );
}
