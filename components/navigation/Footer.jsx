import React from 'react';
import { Logo } from '../brand/Logo.jsx';

const COLS = [
  { title: 'Learn', links: ['Earn', 'Web3', 'Enterprise'] },
  { title: 'Build', links: ['Documentation', 'White Paper', 'Yellow Paper', 'Brand Assets', 'Cooperative'] },
  { title: 'Token', links: ['PNK Token', 'Forum', 'Voting', 'Community'] },
  { title: 'Company', links: ['R&D', 'Careers', 'Blog'] },
];

const Social = ({ d, label }) => (
  <a href="#" aria-label={label} style={{ color: '#BECCE5', display: 'inline-flex' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
  </a>
);

/** Kleros website footer — deep-purple, four link columns, social row + legal bar. */
export function Footer({ columns = COLS, className = '', ...rest }) {
  return (
    <footer className={`k-footer ${className}`.trim()} style={{ background: 'var(--k-bg-1)', color: '#fff', padding: '64px 64px 0' }} {...rest}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, maxWidth: 1184, margin: '0 auto' }}>
        {columns.map((col) => (
          <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#DAF0FF', marginBottom: 4 }}>{col.title}</div>
            {col.links.map((l) => (
              <a key={l} href="#" style={{ fontSize: 15, color: '#BECCE5', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, padding: '48px 0', maxWidth: 1184, margin: '0 auto' }}>
        <Social label="Telegram" d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
        <Social label="X" d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93zM17.6 20.64h2.04L6.49 3.24H4.3z" />
        <Social label="GitHub" d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.61 8.2 11.17.6.11.82-.25.82-.56v-2c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.73-1.34-1.73-1.08-.73.08-.72.08-.72 1.2.08 1.83 1.21 1.83 1.21 1.07 1.8 2.8 1.28 3.49.98.1-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.24-3.17-.13-.3-.54-1.52.11-3.16 0 0 1.01-.32 3.3 1.2.96-.26 1.98-.39 3-.4 1.02 0 2.04.14 3 .4 2.28-1.52 3.29-1.2 3.29-1.2.65 1.64.24 2.86.12 3.16.77.83 1.23 1.88 1.23 3.17 0 4.54-2.81 5.53-5.49 5.83.43.36.81 1.08.81 2.18v3.23c0 .31.22.68.83.56C20.57 21.9 24 17.49 24 12.29 24 5.78 18.63.5 12 .5z" />
        <Social label="LinkedIn" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
      </div>
      <div style={{ borderTop: '1px solid var(--k-on-dark-border)', padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1184, margin: '0 auto', color: '#BECCE5', fontSize: 14 }}>
        <span style={{ color: '#fff', display: 'inline-flex' }}><Logo height={22} /></span>
        <span>Copyright © {new Date().getFullYear()} · Kleros</span>
      </div>
    </footer>
  );
}
