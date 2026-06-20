import * as React from 'react';
/** Styled native select. */
export interface SelectOption { value: string; label: React.ReactNode; }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: (string | SelectOption)[];
  containerClassName?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
