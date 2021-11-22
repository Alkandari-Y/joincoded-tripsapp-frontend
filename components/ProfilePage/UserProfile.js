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
import FavPlaces from './FavPlaces'

const UserProfile = ({ navigation, props }) => {

    let selectedProfile;

    // const FavList = userProfile.profile.favoriteTrips.map(trip => (<FavPlaces key={TripItem._id} trip={trip}/>))
    
    if (profileStore.isLoading) {
        return <Spinner />;
    }
    console.log(profileStore.accountProfile)
    selectedProfile = profileStore.accountProfile;


    return (
        <Center>
            <Container  mt="2">

                    <UserAvatar image={ selectedProfile.image } username={ selectedProfile.username } />
                <Divider />
                
                <Heading size="md">Place To Go</Heading>
                <FavPlaces />

                
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
