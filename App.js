import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// Component
import List from "./components/List";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste</Text>
      <List />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold",
  },
});
