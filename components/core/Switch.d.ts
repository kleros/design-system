import * as React from 'react';
/** On/off toggle switch. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}
export declare function Switch(props: SwitchProps): JSX.Element;
