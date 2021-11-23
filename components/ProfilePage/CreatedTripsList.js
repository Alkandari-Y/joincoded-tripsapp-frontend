//React
import React from 'react'
//React Native
import { Text } from 'react-native'
//Native Base
import {
    Center,
    HStack,
    Image,
    Stack,
} from "native-base"
//Mobx
import { observer } from 'mobx-react'
//Axios
import { baseUrl } from '../../stores/baseUrl'
//Stores
import tripStore from '../../stores/tripStore'

const CreatedTripsList = ({ navigation, profileId }) => {

    const userCreatedTrip = tripStore.trips.filter(trip =>
        trip.owner === profileId
    );
    
    //Need to Add onPress to the mapped component to redirect user to detail page
    //Need to Wrap the list in a horizontal scroll
    
    const createdTrips = userCreatedTrip.map(trip => (
        <Stack key={trip._id}>
            <Image
                source={{ uri: trip.image }}
                width={100}
                height={100}
                resizeMode="cover"
                borderRadius={10}
                alt={trip.title}
            />
            <Text>{trip.title}</Text>
        </Stack>
    ))
    return (
        <HStack mb="2.5" mt="1.5" space={4}>
            {createdTrips}
        </HStack>
    )
}

export default observer(CreatedTripsList)
