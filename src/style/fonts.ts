import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

/**
 * @param size size given in the design
 * @returns responsive size of the text
 */
function responsiveSize(size: number) {
  return wp((size / 375) * 100);
}

function responsiveHeightSize(size: number) {
  return hp((size / 812) * 100);
}

const size = {
  h1: responsiveSize(50),
  h2: responsiveSize(40),
  h3: responsiveSize(33),
  h4: responsiveSize(26),
  h5: responsiveSize(20),
  regular: responsiveSize(18),
  normal: responsiveSize(16),
  medium: responsiveSize(14),
  small: responsiveSize(12),
  xsmall: responsiveSize(10),
};

const style = StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
    fontWeight: "500",
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontSize: size.h4,
    fontWeight: "500",
  },
  h5: {
    fontSize: size.h5,
  },
  normal: {
    fontSize: size.normal,
    fontWeight: "400",
  },
  regular: {
    fontSize: size.regular,
  },
  medium: {
    fontSize: size.medium,
  },
  small: {
    fontSize: size.small,
  },
  xsmall: {
    fontSize: size.xsmall,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default {
  size,
  style,
};

export { responsiveSize as rs };
export { responsiveHeightSize as rhs };
