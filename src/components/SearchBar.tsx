import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

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

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    width: "90%",
    position: "absolute",
    top: 50,
    left: "5%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default SearchScreen;
