import type { BaseComponentProps } from "../types";

// using size to preserve aspect ratio
interface SizeIconProps extends BaseComponentProps {
    size: number;
    width?: never;
    height?: never;
}

// props for control precise dimensions
interface DimensonIconProps extends BaseComponentProps {
    size?: never;
    width: number;
    height: number;
}

// props require either just size OR width and height props
export type IconProps = SizeIconProps | DimensonIconProps;
