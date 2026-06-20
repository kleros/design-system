import React from 'react';

/** Pill tag / filter chip. Use `selectable` + `selected` for use-case pills. */
export function Tag({ variant = 'soft', selectable = false, selected = false, iconLeft, className = '', children, ...rest }) {
  const cls = [
    'k-tag',
    variant === 'outline' ? 'k-tag--outline' : '',
    selectable ? 'k-tag--selectable' : '',
    selected ? 'k-tag--selected' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <span className={cls} role={selectable ? 'button' : undefined} tabIndex={selectable ? 0 : undefined} {...rest}>
      {iconLeft ? <span className="k-btn__icon">{iconLeft}</span> : null}
      {children}
    </span>
  );
}
