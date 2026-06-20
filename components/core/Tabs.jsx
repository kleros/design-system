import React from 'react';

/** Underline tab bar. Controlled via `value` + `onChange`. */
export function Tabs({ items = [], value, onChange, className = '' }) {
  return (
    <div className={`k-tabs ${className}`.trim()} role="tablist">
      {items.map((it) => {
        const key = typeof it === 'string' ? it : it.value;
        const label = typeof it === 'string' ? it : it.label;
        const active = key === value;
        return (
          <button key={key} role="tab" aria-selected={active} className={`k-tab ${active ? 'k-tab--active' : ''}`.trim()} onClick={() => onChange && onChange(key)}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
