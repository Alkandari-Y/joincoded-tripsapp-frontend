import React from 'react'
//Navigation
import { createStackNavigator } from "@react-navigation/stack";
//Components
import Home from './Home/Home';
import MenuIcon from './MenuIcon';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';

const Navigation = () => {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <Navigator initialRouteName="Home"
            screenOptions={
                ({navigation }) => {
                    return ({
                        headerStyle: {
                            backgroundColor: "#DBF9F0"
                        },
                        headerRight: () => 
                            <MenuIcon navigation={navigation} />
                        
                    });
                }
            }
        >
            <Screen name="Signup" component={Signup} />
            <Screen name="Signin" component={Signin} />
            <Screen name="Home" component={Home} />

        </Navigator>
    )
}

export default Navigation
