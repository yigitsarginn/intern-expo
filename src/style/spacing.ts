import { rs } from "./fonts";

export const tiny = rs(5);
export const small = tiny * 2; // 10
export const normal = tiny * 3; // 15
export const medium = small * 2; // 20
export const mediumPlus = tiny * 5; // 25
export const large = normal * 2; // 30
export const xlarge = tiny * 7; // 35
export const xxlarge = medium * 2; // 40
export const huge = mediumPlus * 2; // 50
export const huge2x = huge * 2; // 100
export const huge3x = huge2x * 2; // 200
export const huge4x = huge2x * 3; // 300

export default {
  tiny,
  small,
  normal,
  medium,
  mediumPlus,
  large,
  xlarge,
  xxlarge,
  huge,
  huge2x,
  huge3x,
  huge4x,
};
