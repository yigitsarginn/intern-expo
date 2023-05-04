import { StyleSheet, Text, View } from "react-native";
import { Bootstrap } from "./Bootstrap";
import { Provider } from "react-redux";
import store from "@/store";

export default function App() {
  return (
    <Provider store={store}>
      <Bootstrap />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
