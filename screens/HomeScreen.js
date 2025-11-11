import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Snow Fox Lab 🚀</Text>
      <Button
        label="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 20, fontWeight: "600", marginBottom: 20 },
});
