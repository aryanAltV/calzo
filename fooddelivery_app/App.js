import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import SignupScreen from "./lib/Screens/SignupScreen";
import HomeScreen from "./lib/Screens/HomeScreen";
export default function App() {
  return <HomeScreen / > ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});