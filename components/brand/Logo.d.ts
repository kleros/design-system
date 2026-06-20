import * as React from 'react';
/**
 * Kleros logo, drawn in currentColor (set `color` to recolor).
 * @startingPoint section="Brand" subtitle="Kleros wordmark & symbol" viewport="700x160"
 */
export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'wordmark' | 'symbol';
  height?: number;
  title?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
