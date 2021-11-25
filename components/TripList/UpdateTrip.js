import { Button, FormControl, Input } from "native-base";
import React, { useState } from "react";
import { Text, View } from "react-native";

import tripStore from "../../stores/tripStore";

const UpdateTrip = ({ route, navigation }) => {
  const { trip } = route.params;
  const [_trip, setTrip] = useState({
    title: trip.title,
    image: trip.image,
    description: trip.description,
  });

  const handleUpdate = async () => {
    tripStore.updateTrip(trip._id, _trip);
    navigation.goBack("TripDetail", { trip: _trip });
  };
  return (
    <View>
      <FormControl>
        <FormControl.Label>updated Trip Name:</FormControl.Label>

        <Input onChangeText={(title) => setTrip({ ..._trip, title })} />
      </FormControl>
      <FormControl>
        <FormControl.Label>updated Image:</FormControl.Label>
        <Input onChangeText={(image) => setTrip({ ..._trip, image })} />
      </FormControl>
      <FormControl>
        <FormControl.Label>updated Description:</FormControl.Label>
        <Input
          onChangeText={(description) => setTrip({ ..._trip, description })}
        />
      </FormControl>
      <Button mt="2" colorScheme="indigo" onPress={handleUpdate}>
        update Trip
      </Button>
    </View>
  );
};

export default UpdateTrip;
