import React from 'react';

/** Toggle switch; turns cyan when on. */
export function Switch({ checked, defaultChecked, onChange, disabled, label, id, ...rest }) {
  return (
    <label className="k-switch" data-disabled={disabled || undefined} style={label ? { gap: 10 } : undefined}>
      <input type="checkbox" role="switch" checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} id={id} {...rest} />
      <span className="k-switch__track" />
      <span className="k-switch__thumb" />
      {label ? <span style={{ marginLeft: 28 }}>{label}</span> : null}
    </label>
  );
}
