import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Results = () => {
  return (
    <View style={styles.container}>
      <Text>CalculateResult</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
