import React, {useEffect, useState} from 'react';
import Home from "./pages/Home";
import {Dimensions, SafeAreaView, View} from "react-native";
import Header from "./src/components/header/header";
import Tabs from "./src/components/tabs/tabs";
import Diviner from "./src/components/diviner/diviner";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function App() {
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
        "change",
        ({ window, screen }) => {
          setDimensions({ window, screen });
        }
    );
    return () => subscription?.remove();
  });

  return <SafeAreaView>
    <View>
      <Header/>
      <Diviner/>
      <View style={{ height: dimensions.window.height - 200 }}>
        <Home/>
      </View>
    </View>
    <Tabs/>
  </SafeAreaView>;
};
