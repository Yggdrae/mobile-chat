import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import "@/global.css";
import { Image, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto: require("../../assets/fonts/RobotoFlex.ttf"),
    SpaceMono: require("../../assets/fonts/FiraCode-Regular.ttf"),
    RobotoRegular: require("../../assets/fonts/Roboto-Regular.ttf"),
    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratRegular: require("../../assets/fonts/Montserrat-Regular.ttf"),
    MontserratSemibold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync(); /* 
      const timer = setTimeout(() => setShowSplash(false), 2000);
      return () => clearTimeout(timer); */
    }
  }, [loaded]);

  /* if (showSplash) {
    return (
      <View className="flex-1 items-center justify-center">
        <Image
          source={require("../../assets/flowers.png")}
          alt=""
          className="w-full h-[110%]"
        />
      </View>
    );
  } */

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
