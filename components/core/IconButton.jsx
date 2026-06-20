import React from 'react';

/** Circular icon-only button. Pass an icon (SVG / <Icon/>) as children. */
export function IconButton({ outline = false, label, className = '', children, ...rest }) {
  return (
    <button type="button" aria-label={label} className={`k-iconbtn ${outline ? 'k-iconbtn--outline' : ''} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
