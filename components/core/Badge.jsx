import React from 'react';

/** Status badge. */
export function Badge({ variant = 'neutral', dot = false, className = '', children, ...rest }) {
  return (
    <span className={`k-badge k-badge--${variant} ${dot ? 'k-badge--dot' : ''} ${className}`.trim()} {...rest}>
      {children}
    </span>
  );
}
