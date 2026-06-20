import React from 'react';

/** Checkbox with Kleros blue fill + white check. */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled, id, ...rest }) {
  return (
    <label className="k-check" data-disabled={disabled || undefined}>
      <input type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} id={id} {...rest} />
      <span className="k-check__box">
        <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M1 6.2 4.3 9.5 11 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
