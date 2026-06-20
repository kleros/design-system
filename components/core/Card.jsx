import React from 'react';

/** Content card with soft shadow + 16px radius. */
export function Card({ interactive = false, flat = false, className = '', children, ...rest }) {
  const cls = ['k-card', flat ? 'k-card--flat' : '', interactive ? 'k-card--interactive' : '', className].filter(Boolean).join(' ');
  return <div className={cls} {...rest}>{children}</div>;
}

/** Optional padded body region. */
export function CardBody({ className = '', children, ...rest }) {
  return <div className={`k-card__body ${className}`.trim()} {...rest}>{children}</div>;
}
