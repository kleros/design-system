import * as React from 'react';
/** Underline tab bar with active cyan indicator. */
export interface TabItem { value: string; label: React.ReactNode; }
export interface TabsProps {
  items: (string | TabItem)[];
  value: string;
  onChange?: (value: string) => void;
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;
