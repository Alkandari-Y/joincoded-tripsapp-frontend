import React from "react";
import { Text } from "react-native";
// Fe-CRUDS
import { Button} from "native-base";

import { Center, Container, HStack, Image, Pressable, View } from "native-base";

import { baseUrl } from "../../stores/baseUrl";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

const TripItem = ({ trip, navigation }) => {
  const handleDelete = () => {
    tripStore.deleteTrip(trip._id);
  };

  return (
    <View
      style={{
        backgroundColor: "cyan",
        margin: "1%",
        width: "50%",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >

      <HStack w="100%" alignItems="center" space="3">
        {trip.image && (
          <Image
            source={{
              uri: baseUrl + trip.image,
            }}
            alt="image"
            style={{ width: 100, height: 100 }}
          />
        )}
        <Text>{trip.title}</Text>
      </HStack>

      {authStore.user?._id === trip.owner && (
        <Button onPress={handleDelete}>Delete Trip</Button>
      )}
      {/* {authStore.user?._id === trip.owner && (
        <Button onPress={navigation.navigate('UpdateTrip')}>update Trip</Button>
      )}
      {authStore.user?._id === trip.owner && (
        <Button
          onPress={
            (() => navigation.navigate("UpdateTrip"), { trip: trip })
          }
        >
          update Trip
        </Button>
      )} */}
    </View>

  );
};

export default observer(TripItem);
// maybe we can use an icon instead of a button for deleting?
// //  {authStore.user
// ? authStore.user._id === trip.owner && (
//   <Button onPress={handleDelete}>Delete Trip</Button>
// )
// : null}
