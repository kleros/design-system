import * as React from 'react';
/** Checkbox; fills Kleros info-blue when checked. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
