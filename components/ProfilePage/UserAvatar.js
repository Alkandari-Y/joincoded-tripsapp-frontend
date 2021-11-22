import React from 'react'
//Native Base
import {
    Stack,
    Center,
    Heading,
    Avatar,
  } from "native-base"

const UserAvatar = ({ image, username }) => {
    return (
        <Stack direction="row" mb="2.5" m={2} mt="1.5" space={3}>
            <Avatar
                bg="purple.600"
                alignSelf="center"
                size="2xl"
                source={{ uri: image }}
            />
            <Center m={4}>
                <Heading>{ username}</Heading>
            </Center>
                
        </Stack>
    )
}

export default UserAvatar
