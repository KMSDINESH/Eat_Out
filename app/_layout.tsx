import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';
import "./globals.css";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'QuickSand-Light': require('../assets/fonts/Quicksand-Light.ttf')
  })

  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error]);


  return <Stack screenOptions={{headerShown: false}}/>;
}
