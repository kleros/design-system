import React from 'react';

/** Native select styled to the Kleros field spec, with chevron. */
export function Select({ label, options = [], id, className = '', containerClassName = '', ...rest }) {
  const selId = id || (label ? `k-sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className={`k-field ${containerClassName}`.trim()}>
      {label ? <label className="k-label" htmlFor={selId}>{label}</label> : null}
      <span className="k-select">
        <select id={selId} className={className} {...rest}>
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span className="k-select__chevron" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </span>
    </div>
  );
}
