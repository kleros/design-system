import * as React from 'react';
/** Round avatar — image when `src`, else `initials` on the brand gradient. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: number;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
