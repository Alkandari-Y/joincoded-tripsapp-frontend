import React from "react";
import { Text } from "react-native";
import { HStack, Image, Pressable } from "native-base";
import { baseUrl } from "../../stores/baseUrl";

const TripItem = ({ trip, navigation }) => {
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
    </Pressable>
  );
};

export default TripItem;
