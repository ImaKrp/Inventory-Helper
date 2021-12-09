import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import {
  Lato_400Regular,
  Lato_300Light,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_300Light,
    Lato_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#16191D"
      />
    </>
  );
}
