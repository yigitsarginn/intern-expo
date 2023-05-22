import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import SafeViewAndroid from "@/components/SafeViewAndroid";
import Divider from "@/components/CustomDivider/CustomDivider";

export const Results = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <SearchBar />
        <Divider />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
