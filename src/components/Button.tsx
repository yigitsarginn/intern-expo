import React, { PropsWithChildren } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Colors } from "@/style";

type Props = PropsWithChildren<{
  variant?: "primary" | "secondary" | "text";
}> &
  TouchableOpacityProps;

export function Button({
  children,
  variant = "primary",
  style,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, styles[variant], style]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    paddingVertical: 20,
  },
  primary: {
    backgroundColor: Colors.Dark,
  },
  secondary: {
    backgroundColor: Colors.Dark10,
  },
  text: {
    backgroundColor: "transparent",
  },
});
