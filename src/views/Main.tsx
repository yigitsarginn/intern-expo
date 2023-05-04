import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { t } from "@/lang";
import { rhs, rs } from "@/style/fonts";
import { Colors, Spacing } from "@/style";
import spacing from "@/style/spacing";

export const Main = () => {
  return (
    <View style={styles.container}>
      <Text
        variant="bold"
        langKey="BMI.DESCRIPTIONS.UNDERWEIGHT"
        fontFamily="PlusJakartaSans_700Bold"
        align="center"
        textTransform="uppercase"
        style={styles.text}
      />
      <Button variant="secondary" style={styles.button}>
        <Text
          variant="bold"
          langKey="bottomTab.CALCULATE"
          style={styles.textButton}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: rhs(20),
    color: Colors.Dark,
  },
  button: {
    width: Spacing.huge4x,
  },
  textButton: {
    color: Colors.White,
  },
});
