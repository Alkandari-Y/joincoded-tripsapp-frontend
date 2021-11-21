import React from 'react'
//Navigation
import { createStackNavigator } from "@react-navigation/stack";
//Components
import Home from './Home/Home';
import MenuIcon from './MenuIcon';

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
            <Screen name="Home" component={Home} />
            
        </Navigator>
    )
}

export default Navigation
