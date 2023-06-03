import { StyleSheet, View } from "react-native";
import React from "react";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@/components/Icon";

export const WalkthroughFirst = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text color="Dark90">Walkthrough 1</Text>
      <Button
        onPress={() => {
          navigation.navigate("Walkthrough", { screen: "Second" });
        }}
        style={styles.button}
      >
        <Text>Next</Text>
      </Button>
      <Icon icon="home" size={30} />
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
