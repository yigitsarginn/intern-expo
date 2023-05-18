import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import SearchScreen from "@/components/SearchBar/SearchBar";
import { Divider } from "@rneui/themed";

export const Results = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchScreen />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
});
