import { StyleSheet } from "react-native";

export default StyleSheet.create({
  box: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    borderRadius: 8,
    padding: 20,
    width: "90%",
    height: 220,
    top: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    backgroundColor: "white",
    width: "100%",
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
