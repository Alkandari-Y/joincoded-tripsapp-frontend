//React
import React from "react";
//React Native
import { Text } from "react-native";
//Native Base
import { HStack, Image, ScrollView, View, Heading, Pressable } from "native-base";
//Mobx
import { observer } from "mobx-react";
//Axios
import { baseUrl } from "../../stores/baseUrl";
//Stores
import tripStore from "../../stores/tripStore";
import styles from "./styles";

const CreatedTripsList = ({ navigation, profileId }) => {
  const userCreatedTrip = tripStore.trips.filter(
    (trip) => trip.owner.profile === profileId
  );

  //Need to Add onPress to the mapped component to redirect user to detail page
  //Need to Wrap the list in a horizontal scroll

  const createdTrips = userCreatedTrip.map((trip) => (
    <View style={styles.tripItem}>
      <Pressable onPress={()=>navigation.navigate("TripDetail", {trip: trip})}>
        <Image
          style={styles.image}
          source={{ uri: baseUrl + trip.image }}
          alt={trip.title}
        />
      </Pressable>
      <Heading style={styles.tripName}>{trip.title}</Heading>
    </View>
  ));
  return (
    <ScrollView horizontal={true}>
      <HStack style={styles.tripList}>{createdTrips}</HStack>
    </ScrollView>
  );
};

export default observer(CreatedTripsList);
