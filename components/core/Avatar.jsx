import React from 'react';

/** Avatar — image or initials on the brand gradient. */
export function Avatar({ src, alt = '', initials, size = 40, className = '', ...rest }) {
  return (
    <span className={`k-avatar ${className}`.trim()} style={{ width: size, height: size, fontSize: size * 0.4 }} {...rest}>
      {src ? <img src={src} alt={alt} /> : initials}
    </span>
  );
}
