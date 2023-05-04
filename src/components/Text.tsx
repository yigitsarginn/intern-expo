import React, { PropsWithChildren } from "react";
import { TextProps, TextStyle } from "react-native";
import Animated, { AnimateProps } from "react-native-reanimated";
import { Colors, Fonts } from "@/style";
import { t } from "@/lang/";

export type InternTextProps = PropsWithChildren<{
  langKey?: DottedLanguageObjectStringPaths;
  fontFamily?:
    | "PlusJakartaSans_200ExtraLight"
    | "PlusJakartaSans_300Light"
    | "PlusJakartaSans_400Regular"
    | "PlusJakartaSans_500Medium"
    | "PlusJakartaSans_600SemiBold"
    | "PlusJakartaSans_700Bold";

  color?: keyof typeof Colors;
  variant?: keyof typeof Fonts.style;
  align?: TextStyle["textAlign"];
  textTransform?: TextStyle["textTransform"];
}> &
  AnimateProps<Omit<TextProps, "children">>;

export function Text({
  children,
  langKey,
  fontFamily = "PlusJakartaSans_500Medium",
  color = "White",
  variant = "normal",
  align = "auto",
  textTransform = "none",
  style,
  ...rest
}: InternTextProps) {
  const content = langKey ? t(langKey) : children;
  return (
    <Animated.Text
      style={[
        { textAlign: align, textTransform },
        { fontFamily, color: Colors[color] },
        Fonts.style[variant],
        style,
      ]}
      {...rest}
    >
      {content}
    </Animated.Text>
  );
}
