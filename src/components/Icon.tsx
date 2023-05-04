import React from "react";
import IcoMoon, { IconProps } from "react-icomoon";
import { Svg, Path, SvgProps } from "react-native-svg";
import iconSet from "../../assets/icons.json";

export type NovaIconProps = Omit<IconProps, "style"> & {
  style?: SvgProps["style"];
};

export const Icon = ({ style, ...rest }: NovaIconProps) => (
  <IcoMoon
    iconSet={iconSet}
    native
    SvgComponent={Svg}
    PathComponent={Path}
    style={style as IconProps["style"]}
    {...rest}
  />
);
