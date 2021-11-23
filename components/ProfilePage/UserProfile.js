//React
import React from 'react'
//Native Base
import {
    Stack,
    Center,
    Heading,
    Divider,
    Container,
    Spinner
  } from "native-base"
//Mobx
import { observer } from 'mobx-react'
//Store
import authStore from '../../stores/authStore'
import profileStore from '../../stores/profileStore'
//Components
import UserAvatar from './UserAvatar'
import CreatedTripsList from './CreatedTripsList'

const UserProfile = ({ navigation, route }) => {
    
    if (!profileStore.isLoading) {
        return <Spinner />;
    }
    const selectedProfile = route.params.profile;

    console.log(selectedProfile);

    return (
        <Center>
            <Container  mt="2">

                    <UserAvatar image={ selectedProfile.image } username={ selectedProfile.user.username } />
                <Divider />
                
                <Heading size="md">Created Trips</Heading>
                <CreatedTripsList />

                
                <Divider />
                <Heading size="md">Bio</Heading>
                <Stack mb="2.5" mt="1.5" direction="column" space={3}>
                <Center>
                    { selectedProfile.bio }
                </Center>

                </Stack>


            </Container>
        </Center>
    )
}

export default observer(UserProfile)
