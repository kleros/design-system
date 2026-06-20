import * as React from 'react';
export type IconName =
  | "IconsArrowChevronDown"
  | "IconsChallenge"
  | "IconsCheck"
  | "IconsCheckCircleFull"
  | "IconsCloseCircleOutline"
  | "IconsCoins"
  | "IconsCollective"
  | "IconsCurator"
  | "IconsDocument"
  | "IconsGavel"
  | "IconsGlobe"
  | "IconsGovernance"
  | "IconsIncentives"
  | "IconsJuror"
  | "IconsMailOutline"
  | "IconsMenu"
  | "IconsMoon"
  | "IconsPNK"
  | "IconsReport"
  | "IconsReward"
  | "IconsSun"
  | "IconsTransparency"
  | "IconsVote";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
