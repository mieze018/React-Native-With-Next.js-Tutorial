import React from "react";
import { StyleSheet, Text,  } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (

    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋 First Change</Text>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
