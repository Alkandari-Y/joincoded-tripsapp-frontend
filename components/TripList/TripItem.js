import React from "react";
import { Text } from "react-native";
import { Button, HStack, Image, Pressable } from "native-base";
import { baseUrl } from "../../stores/baseUrl";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

const TripItem = ({ trip, navigation }) => {
  const handleDelete = () => {
    tripStore.deleteTrip(trip._id);
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("TripDetail", { trip: trip });
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
      {authStore.user?._id === trip.owner && (
        <Button onPress={handleUpdate}>update Trip</Button>
      )}
      {authStore.user?._id === trip.owner && (
        <Button
          onPress={
            (() => navigation.navigate("UpdateTrip"), { trip: props.trip })
          }
        >
          update Trip
        </Button>
      )}
    </Pressable>
  );
};

export default observer(TripItem);
// maybe we can use an icon instead of a button for deleting?
// //  {authStore.user
// ? authStore.user._id === trip.owner && (
//   <Button onPress={handleDelete}>Delete Trip</Button>
// )
// : null}
