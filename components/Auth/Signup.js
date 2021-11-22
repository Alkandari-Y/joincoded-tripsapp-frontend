//React
import React, { useState } from "react"
//React Native
import { ScrollView, Alert } from "react-native";
//Native Base
import {
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
    useToast,
  } from "native-base"
//Mobx
import { observer } from "mobx-react";
//Stores
import authStore from '../../stores/authStore'


const Signup = ({ navigation }) => {
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        email: ''
    })
    const toast = useToast()

    const handleSubmit = () => {
            authStore.signUp(newUser, navigation, toast);
    }


    return (
        <Box safeArea p="2" w="100%" py="8">
            <ScrollView >
                <Heading
                size="lg"
                color="coolGray.800"
                _dark={{
                    color: "warmGray.50",
                }}
                fontWeight="semibold"
            >
                Welcome
            </Heading>
            <Heading
                mt="1"
                color="coolGray.600"
                _dark={{
                    color: "warmGray.200",
                }}
                fontWeight="medium"
                size="xs"
                >
                Sign up to continue!
            </Heading>
                <VStack space={3} mt="5">
                    
                <FormControl>
                    <FormControl.Label>UserName</FormControl.Label>
                        <Input onChangeText={(username) => setNewUser({ ...newUser, username })}/>
                    </FormControl>
                    
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input onChangeText={(email) => setNewUser({...newUser, email }) } />
                    </FormControl>
                    
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" value={newUser.password}
                        onChangeText={(password) => setNewUser({...newUser, password }) } />
                </FormControl>
                    
                <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
                    Sign up
                </Button>
                
                </VStack>
        </ScrollView>
      </Box>
    )
}

export default observer(Signup)
