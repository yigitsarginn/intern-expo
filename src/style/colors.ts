/**
 *
 * @param color Hexadecimal color to take alpha for
 * @param opacity Desired Opacity Between [0-1]
 * @example alpha("#FFFFFF",0.5 )
 */
const alpha = (color: string, opacity: number): string =>
  `${color}${Math.floor(opacity * 255).toString(16)}`;

const ColorBlack = "#000000";
const ColorDarkBlue = "#263143";
const ColorDarkGreen = "#003441";

export default {
  Dark: ColorDarkGreen,
  Dark4: "rgba(0, 52, 65, 0.04)",
  Dark5: "rgba(0, 52, 65, 0.05)",
  Dark10: alpha(ColorDarkGreen, 0.1),
  Dark20: alpha(ColorDarkGreen, 0.2),
  Dark30: alpha(ColorDarkGreen, 0.3),
  Dark40: alpha(ColorDarkGreen, 0.4),
  Dark50: alpha(ColorDarkGreen, 0.5),
  Dark60: alpha(ColorDarkGreen, 0.6),
  Dark70: alpha(ColorDarkGreen, 0.7),
  Dark80: alpha(ColorDarkGreen, 0.8),
  Dark90: alpha(ColorDarkGreen, 0.9),

  Black: ColorBlack,
  Black5: "rgba(0, 0, 0, 0.05)",
  Black10: alpha(ColorBlack, 0.1),
  Black20: alpha(ColorBlack, 0.2),
  Black30: alpha(ColorBlack, 0.3),
  Black40: alpha(ColorBlack, 0.4),
  Black50: alpha(ColorBlack, 0.5),
  Black60: alpha(ColorBlack, 0.6),
  Black70: alpha(ColorBlack, 0.7),

  DarkBlue: ColorDarkBlue,
  DarkBlue5: "rgba(38, 49, 67, 0.05)",
  DarkBlue10: alpha(ColorDarkBlue, 0.1),
  DarkBlue20: alpha(ColorDarkBlue, 0.2),
  DarkBlue30: alpha(ColorDarkBlue, 0.3),
  DarkBlue40: alpha(ColorDarkBlue, 0.4),
  DarkBlue50: alpha(ColorDarkBlue, 0.5),
  DarkBlue60: alpha(ColorDarkBlue, 0.6),
  DarkBlue70: alpha(ColorDarkBlue, 0.7),

  White: "#FFFFFF",
  White5: "rgba(255, 255, 255, 0.05)",
  White10: alpha("#FFFFFF", 0.1),
  White20: alpha("#FFFFFF", 0.2),
  White30: alpha("#FFFFFF", 0.3),
  White40: alpha("#FFFFFF", 0.4),
  White50: alpha("#FFFFFF", 0.5),
  White60: alpha("#FFFFFF", 0.6),
  White70: alpha("#FFFFFF", 0.7),
  White80: alpha("#FFFFFF", 0.8),
  White90: alpha("#FFFFFF", 0.9),

  Background: "#F7F7F7",
  LogoBlue: "#2D99E2",
  LogoGreen: "#77C565",
  LogoRed: "#FE5553",
  PrimaryBlue: "#4D80E4",
  PrimaryDark: "#003441",
  PrimaryGreen: "#9DD030",
  SecondaryBlue: "#46B3E6",
  SecondaryGreen: "#AABE34",
  SecondaryYellow: "#FCA400",
  SecondaryOrange: "#FF743A",
  SecondaryPink: "#ED3C6A",
  TeritaryBlue: "#0014FF",
  TeritaryPink: "#F06292",
  TeritaryNeutral: "#344D67",

  Simply: "#1F1F1F",
};
