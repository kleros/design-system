import * as React from 'react';

/**
 * Pill action button. Primary = cyan accent; brand = purple→blue gradient (hero CTA);
 * secondary = outline; tertiary = accent-text; ghost = subtle.
 *
 * @startingPoint section="Core" subtitle="Pill buttons in every variant & size" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'brand' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  as?: 'button' | 'a';
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
