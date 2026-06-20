import React from 'react';

/** Radio control. Group several with the same `name`. */
export function Radio({ label, checked, defaultChecked, onChange, name, value, disabled, id, ...rest }) {
  return (
    <label className="k-check" data-disabled={disabled || undefined}>
      <input type="radio" name={name} value={value} checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} id={id} {...rest} />
      <span className="k-check__box k-check__box--radio"><span className="k-radio-dot" /></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
