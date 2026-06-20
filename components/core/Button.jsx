import React from 'react';

/**
 * Kleros Button — pill-shaped action. Cyan primary on the brand's
 * deep-purple surfaces; also a gradient "brand" variant for hero CTAs.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = `k-btn k-btn--${variant} k-btn--${size} ${className}`.trim();
  return (
    <Tag className={cls} disabled={Tag === 'button' ? disabled : undefined} aria-disabled={disabled || undefined} {...rest}>
      {iconLeft ? <span className="k-btn__icon">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span className="k-btn__icon">{iconRight}</span> : null}
    </Tag>
  );
}
