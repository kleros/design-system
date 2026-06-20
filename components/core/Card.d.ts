import * as React from 'react';
/** Surface card — 16px radius, soft shadow. `interactive` adds hover-lift. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  flat?: boolean;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
export declare function CardBody(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
