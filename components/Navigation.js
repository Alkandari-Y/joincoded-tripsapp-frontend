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
            backgroundColor: "#0075C4",
          },
        }}
      />
      <Screen
        name="TripList"
        component={TripList}
        options={{
          headerStyle: {
            backgroundColor: "#FFBA08",
          },
        }}
      />
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
      <Screen name="UserUpdateProfile" component={UserUpdateProfile} />
    </Navigator>
  );
};

export default Navigation;
