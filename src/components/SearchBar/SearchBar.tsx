import { Text, TextInput, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./SearchBar.style";

const SearchScreen = () => {
  return (
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        placeholder="Search for your next intern"
      />
      <TextInput style={styles.input} placeholder="Location" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
