import React from "react";
import { Pressable, Text } from "react-native";

import { HStack, Image, View } from "native-base";

import { baseUrl } from "../../stores/baseUrl";

const TripItem = ({ trip, navigation }) => {
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
      <Pressable
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
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
    </View>
  );
};

export default TripItem;
