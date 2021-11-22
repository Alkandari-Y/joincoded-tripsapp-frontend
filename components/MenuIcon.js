//React
import React from "react"
//React Native
import { Pressable } from "react-native";
//Native Base
import {
    Menu,
    Box,
    Center,
  } from "native-base"
//React Native Vector Icons
import Icon from 'react-native-vector-icons/AntDesign';
//Mobx
import { observer } from "mobx-react";
//Store Imports
import authStore from "../stores/authStore"

const MenuIcon = ({ navigation }) => {
    
    const openAuthPage = (pageName) => {
        navigation.navigate(pageName)
    };

    return (
        <Center>
            <Box>
                <Menu
                    w="120"
                    trigger={(triggerProps) => {
                    return (
                        <Pressable {...triggerProps} style={{marginRight: 15}}>
                            <Icon name="setting" color='black' size={15} />
                        </Pressable>
                    )
                        }}
                >
                    {!authStore.user ?
                        <>
                            <Menu.Item onPress={() => openAuthPage("Signin")}>
                                Signin
                            </Menu.Item>
                            <Menu.Item onPress={() => openAuthPage("Signup")}>
                                Signup
                            </Menu.Item>
                        </>
                        :
                    <>
                        {authStore.user && <Menu.Item>Hello {authStore.user.username}</Menu.Item>}
                        <Pressable >
                            <Menu.Item onPress={() => authStore.signOut()}>
                                Logout!
                        </Menu.Item>
                        </Pressable>
                    </>
                    }
                </Menu>
            </Box>
            
        </Center>
    )
}

export default observer(MenuIcon)
