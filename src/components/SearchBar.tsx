import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="search for your next intern"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#3d33fa",
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  searchBar: {
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});
export default SearchScreen;
