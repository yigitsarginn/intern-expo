import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import SearchScreen from "@/components/SearchBar/SearchBar";
import { Divider } from "@rneui/themed";

export const Results = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "red",
    width: "90%",
    height: "40%",
  },
});
