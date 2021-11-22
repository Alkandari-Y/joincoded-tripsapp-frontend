//React
import React from 'react'
//React Native
import { View, Text } from 'react-native'
//Native Base
import {
    Center,
    HStack,
  } from "native-base"

const FavPlaces = () => {
    return (
        <HStack  mb="2.5" mt="1.5" space={3}>
            <Center
                size="16"
                bg="primary.500"
                rounded="sm"
                _text={{
                color: "warmGray.50",
                fontWeight: "medium",
                }}
                shadow={"3"}
            >
                Box 1
            </Center>
            <Center
                size="16"
                bg="primary.500"
                rounded="sm"
                _text={{
                color: "warmGray.50",
                fontWeight: "medium",
                }}
                shadow={"3"}
            >
                Box 2
            </Center>
            <Center
                size="16"
                bg="primary.500"
                rounded="sm"
                _text={{
                color: "warmGray.50",
                fontWeight: "medium",
                }}
                shadow={"3"}
            >
                Box 3
            </Center>
        </HStack>
    )
}

export default FavPlaces
