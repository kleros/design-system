import React from 'react';

/** Labelled text input with optional helper / error text. */
export function Input({ label, helpText, error = false, id, className = '', containerClassName = '', ...rest }) {
  const inputId = id || (label ? `k-in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className={`k-field ${containerClassName}`.trim()}>
      {label ? <label className="k-label" htmlFor={inputId}>{label}</label> : null}
      <input id={inputId} className={`k-input ${error ? 'k-input--error' : ''} ${className}`.trim()} aria-invalid={error || undefined} {...rest} />
      {helpText ? <span className={`k-help ${error ? 'k-help--error' : ''}`.trim()}>{helpText}</span> : null}
    </div>
  );
}
