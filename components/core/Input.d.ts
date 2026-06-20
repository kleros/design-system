import * as React from 'react';
/** Text field with label + helper/error. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
  error?: boolean;
  containerClassName?: string;
}
export declare function Input(props: InputProps): JSX.Element;
