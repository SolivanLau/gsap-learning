// size prop: percentage allows css to override
type IconSizeValue = number | `${number}%`;
// using size to preserve aspect ratio
interface SizeIconProps {
    size: IconSizeValue;
    width?: never;
    height?: never;
}

// props for control precise dimensions
interface DimensonIconProps {
    size?: never;
    width: IconSizeValue;
    height: IconSizeValue;
}

// props require either just size OR width and height props
export type IconProps =
    | (Partial<astroHTML.JSX.SVGAttributes> & SizeIconProps)
    | (Partial<astroHTML.JSX.SVGAttributes> & DimensonIconProps);
