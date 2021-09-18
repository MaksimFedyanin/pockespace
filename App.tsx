import React from 'react';
import Home from "./pages/Home";
import { SafeAreaView } from "react-native";
import PockeSpaceApp from "./pages/_app";

export default function App() {
  return <SafeAreaView>
    {PockeSpaceApp({ Component: Home, pageProps: {} })}
  </SafeAreaView>;
};
