import * as React from 'react';
export interface FooterColumn { title: string; links: string[]; }
/** Kleros website footer (deep-purple). */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
}
export declare function Footer(props: FooterProps): JSX.Element;
