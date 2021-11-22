//React
import React from 'react'
//Native Base
import {
    Stack,
    Center,
    Heading,
    Divider,
    Container
  } from "native-base"
//Mobx
import { observer } from 'mobx-react'
//Store
import authStore from '../../stores/authStore'
import { baseUrl } from '../../stores/baseUrl'
//Components
import UserAvatar from './UserAvatar'
import FavPlaces from './FavPlaces'

const UserProfile = ({ navigation, props }) => {
    let userProfile;

    
    if (!props) {
        userProfile = { username: authStore.user.username, profile: authStore.profile };
    }

    // const FavList = userProfile.profile.favoriteTrips.map(trip => (<FavPlaces key={TripItem._id} trip={trip}/>))
       

    return (
        <Center>
            <Container space="1.5" mt="2">

                    <UserAvatar image={ userProfile.profile.image } username={ userProfile.username } />
                <Divider />
                
                <Heading size="md">Place To Go</Heading>
                <FavPlaces />

                
                <Divider />
                <Heading size="md">Bio</Heading>
                <Stack mb="2.5" mt="1.5" direction="column" space={3}>
                <Center>
                    { userProfile.profile.bio }
                </Center>

                </Stack>


            </Container>
        </Center>
    )
}

export default observer(UserProfile)
