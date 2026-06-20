import * as React from 'react';
/** Pill chip / use-case filter. `selectable`+`selected` for toggle pills. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'soft' | 'outline';
  selectable?: boolean;
  selected?: boolean;
  iconLeft?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
