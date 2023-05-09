import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchScreen from "@/components/SearchBar";

export const Results = () => {
  return (
    <View style={styles.container}>
      <SearchScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f0f0f0",
  },
});
