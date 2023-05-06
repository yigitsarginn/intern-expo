import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchScreen from "@/components/SearchBar";

export const Results = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
      }}
    >
      <SearchScreen />
    </View>
  );
};
