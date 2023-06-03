import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "./Text";
import { rhs, rs } from "@/style/fonts";

type UserProps = {
  title: "About" | "Education" | "Experience" | "Skills";
  about?: string;
  university?: string;
  department?: string;
  year?: string;
};

const Option = (props: UserProps) => {
  return (
    <View style={styles.midFooter}>
      <Text
        color="Dark"
        fontFamily="PlusJakartaSans_700Bold"
        style={styles.title}
      >
        {props.title}
      </Text>
      {props.about && (
        <Text
          color="Dark50"
          fontFamily="PlusJakartaSans_400Regular"
          variant="medium"
          style={styles.context}
        >
          {props.about}
        </Text>
      )}
      {props.university && (
        <View style={styles.universityWrapper}>
          <Text
            color="Dark70"
            fontFamily="PlusJakartaSans_600SemiBold"
            variant="regular"
            style={styles.universityText}
          >
            {props.university}
          </Text>
          <Text
            color="Dark50"
            fontFamily="PlusJakartaSans_400Regular"
            variant="medium"
            style={styles.universityText}
          >
            {props.department}
          </Text>
          <Text
            color="Dark50"
            fontFamily="PlusJakartaSans_400Regular"
            variant="medium"
            style={styles.universityText}
          >
            {props.year}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  midFooter: {
    width: "100%",
    backgroundColor: "white",
    marginVertical: rhs(10),
  },
  title: {
    paddingHorizontal: rs(20),
    marginTop: rhs(15),
  },
  context: {
    paddingHorizontal: rs(20),
    paddingVertical: rhs(15),
  },
  universityText: {
    paddingHorizontal: rs(20),
    paddingVertical: rhs(3),
  },
  universityWrapper: {
    paddingVertical: rhs(15),
  },
});
