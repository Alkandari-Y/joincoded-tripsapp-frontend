//React
import React from "react"
//React Native
import { Pressable } from "react-native";
//Native Base
import {
    Actionsheet,
    Box,
    Center,
    useDisclose,
    Text,
    Button,
  } from "native-base"
//React Native Vector Icons
import Icon from 'react-native-vector-icons/AntDesign';
//Mobx
import { observer } from "mobx-react";
//Store Imports
import authStore from "../stores/authStore"

const MenuIcon = ({ navigation }) => {

    const { isOpen, onOpen, onClose } = useDisclose()

    
    const openAuthPage = (pageName) => {
        navigation.navigate(pageName)
    };

    return (
        <Center>
            <Pressable onPress={onOpen} style={{marginRight: 15}}>
                <Icon name="setting" color='black' size={15} />
            </Pressable>
                <Actionsheet isOpen={isOpen} onClose={onClose}>
                    <Actionsheet.Content>
                        <Box w="100%" px={4} justifyContent="center">
                            {!authStore.user ?
                                <>
                                    <Actionsheet.Item  onPress={() => openAuthPage("Signin")}>
                                            Signin
                                    </Actionsheet.Item>

                                    <Actionsheet.Item onPress={() => openAuthPage("Signup")}>
                                        Signup
                                    </Actionsheet.Item>
                                </>
                                :
                                <>
                                {authStore.user && <Actionsheet.Item>Hello {authStore.user.username}</Actionsheet.Item>}
                                
                                    <Actionsheet.Item >
                                        <Button >View Profile</Button>
                                    </Actionsheet.Item>
                                    
                                    <Actionsheet.Item >
                                        <Button onPress={() => authStore.signOut()} >Logout!</Button>
                                    </Actionsheet.Item>
                                    
                                </>
                            }
                        </Box>
                    </Actionsheet.Content>
                </Actionsheet>
        </Center>
    )
}

export default observer(MenuIcon)
