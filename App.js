//React
import React from "react"
//Components
import Navigation from "./components/Navigation";
//Native Base
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {

  return (
    <NavigationContainer >
      <NativeBaseProvider>
        <Navigation/>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App

