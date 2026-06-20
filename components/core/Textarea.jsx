import React from 'react';

/** Multi-line text input. */
export function Textarea({ label, helpText, error = false, id, className = '', containerClassName = '', ...rest }) {
  const taId = id || (label ? `k-ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className={`k-field ${containerClassName}`.trim()}>
      {label ? <label className="k-label" htmlFor={taId}>{label}</label> : null}
      <textarea id={taId} className={`k-textarea ${error ? 'k-textarea--error' : ''} ${className}`.trim()} aria-invalid={error || undefined} {...rest} />
      {helpText ? <span className={`k-help ${error ? 'k-help--error' : ''}`.trim()}>{helpText}</span> : null}
    </div>
  );
}
