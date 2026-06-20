import * as React from 'react';
export interface NavLink { label: string; hasMenu?: boolean; href?: string; }
/**
 * Website top navigation. Place in a `.k-dark` container.
 * @startingPoint section="Navigation" subtitle="Kleros website navbar" viewport="1440x80"
 */
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  links?: NavLink[];
  cta?: string;
  onCta?: () => void;
}
export declare function Navbar(props: NavbarProps): JSX.Element;
