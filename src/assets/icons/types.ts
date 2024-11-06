// using size to preserve aspect ratio
interface SizeIconProps {
    size: number;
    width?: never;
    height?: never;
}

// props for control precise dimensions
interface DimensonIconProps {
    size?: never;
    width: number;
    height: number;
}

// props require either just size OR width and height props
export type IconProps =
    | (Partial<astroHTML.JSX.SVGAttributes> & SizeIconProps)
    | (Partial<astroHTML.JSX.SVGAttributes> & DimensonIconProps);
