//React
import React, { useState } from "react";
//Native Base
import {

    Stack,
    Center,
    Heading,
    Divider,
    Container,
    Spinner,
    Button
  } from "native-base"

//Mobx
import { observer } from "mobx-react";
//Store
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
//Components

import UserAvatar from './UserAvatar'
import CreatedTripsList from './CreatedTripsList'

const UserProfile = ({ navigation, route }) => {
    
    if (!profileStore.isLoading) {
        return <Spinner />;
    }
    const selectedProfile = route.params.profile;

    return (
        <Center>
            <Container  mt="2">

                <UserAvatar image={selectedProfile.image} username={selectedProfile.user.username} profileId={ selectedProfile._id  }/>
                <Divider />
                
                <Heading size="md">Created Trips</Heading>
                <CreatedTripsList navigation={ navigation } profileId={ selectedProfile.user._id } />

                
                <Divider />
                <Heading size="md">Bio</Heading>
                <Stack mb="2.5" mt="1.5" direction="column" space={3}>
                    <Center>
                        { selectedProfile.bio }
                    </Center>

                </Stack>

                {authStore.user?._id === selectedProfile.user._id && (
                    <Stack mb="2.5" mt="1.5" direction="column" space={3}>
                        <Button
                            onPress={() =>
                            navigation.navigate("UserUpdateProfile", { userProfile: selectedProfile })
                            }
                        >
                            Update Profile
                        </Button>
                    </Stack>
                )}


            </Container>
        </Center>
    )
}

export default observer(UserProfile)