import React from "react";
//Navigation
import { createStackNavigator } from "@react-navigation/stack";
//Components
import Home from "./Home";
import MenuIcon from "./MenuIcon";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import TripList from "./TripList";
import CreateTrip from "./TripList/CreateTrip";
import UserProfile from "./ProfilePage/UserProfile";
import TripDetail from "./TripDetail";
import UpdateTrip from "./TripList/UpdateTrip";
import UserUpdateProfile from "./ProfilePage/UserUpdateProfile";

import { View } from "native-base";
import Header from "./Header";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => {
        return {
          headerRight: () => <MenuIcon navigation={navigation} />,
          headerTitle: () => <Header navigation={navigation} />,
        };
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#0e7490",
          },
        }}
      />
      <Screen
        name="TripList"
        component={TripList}
        options={{
          headerStyle: {
            backgroundColor: "#155e75",
          },
        }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route }) => {
          return {
            headerStyle: {
              backgroundColor: "#164e63",
            },
            title: route.params.trip.title,
          };
        }}
      />
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Profile" component={UserProfile} />
      <Screen name="CreateTrip" component={CreateTrip} />
      <Screen name="UpdateTrip" component={UpdateTrip} />
      <Screen name="UserUpdateProfile" component={UserUpdateProfile} />
    </Navigator>
  );
};

export default Navigation;
