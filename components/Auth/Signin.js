import React, { useState } from "react"
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
    useToast,
} from "native-base"
//Mobx
import { observer } from "mobx-react";
//Store
import authStore from '../../stores/authStore'

const Signin = ({ navigation }) => {
  
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const toast = useToast()

    const handleSubmit = () => {
        authStore.signIn(credentials, navigation, toast)
    }

    return (
      <Box safeArea p="2" py="8" w="100%">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Sign in
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
                      <Input 
                          onChangeText={username => setCredentials({...credentials, username})}
                      />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
                      <Input type="password"
                          onChangeText={password => setCredentials({...credentials, password})}
                      />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={()=> navigation.replace('Signup')}
            >
              Sign Up
            </Link>
        </HStack>
      </VStack>
    </Box>
    )
}

export default observer(Signin)
