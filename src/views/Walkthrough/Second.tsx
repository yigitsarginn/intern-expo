import { StyleSheet, View } from "react-native";
import React from "react";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { useNavigation } from "@react-navigation/native";

export const WalkthroughSecond = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text color="Dark90">Walkthrough 2</Text>
      <Button
        onPress={() => {
          navigation.navigate("Main", { screen: "Calculate" });
        }}
        style={styles.button}
      >
        <Text>Next</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "90%",
  },
});
