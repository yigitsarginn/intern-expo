import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import SearchScreen from "@/components/SearchBar/SearchBar";
import { Divider } from "@rneui/themed";

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
