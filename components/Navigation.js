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

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => {
        return {
          headerRight: () => <MenuIcon navigation={navigation} />,
        };
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#21D19F",
          },
        }}
      />
      <Screen name="TripList" component={TripList} />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ navigation, route }) => {
          return {
            headerStyle: {
              backgroundColor: "#356290",
            },
            title: route.params.trip.title,
          };
        }}
      />
      <Screen name="Profile" component={UserProfile} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
      <Screen name="CreateTrip" component={CreateTrip} />
      <Screen name="UpdateTrip" component={UpdateTrip} />
    </Navigator>
  );
};

export default Navigation;
