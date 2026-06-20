import * as React from 'react';
/** Multi-line text field with label + helper/error. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helpText?: string;
  error?: boolean;
  containerClassName?: string;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
