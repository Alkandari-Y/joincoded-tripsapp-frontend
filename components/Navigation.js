import React from "react";
//Navigation
import { createStackNavigator } from "@react-navigation/stack";
//Components
import Home from "./Home/Home";
import MenuIcon from "./MenuIcon";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import TripList from "./TripList";
import CreateTrip from "./TripList/CreateTrip";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="TripList"
      screenOptions={({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: "#DBF9F0",
          },
          headerRight: () => <MenuIcon navigation={navigation} />,
        };
      }}
    >
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Home" component={Home} />
      <Screen name="TripList" component={TripList} />
      <Screen name="CreateTrip" component={CreateTrip} />
    </Navigator>
  );
};

export default Navigation;
