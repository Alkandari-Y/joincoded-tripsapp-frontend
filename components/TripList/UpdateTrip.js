import { Button, FormControl, Input } from "native-base";
import React, { useState } from "react";
import { View } from "react-native";
import tripStore from "../../stores/tripStore";

// i'm still working on this, i'm taking a break- will continue later.
const UpdateTrip = (props) => {
  const [trip, setTrip] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleUpdate = async () => tripStore.updateTrip(props.trip._id, trip);
  return (
    <View>
      <FormControl>
        <FormControl.Label>updated Trip Name:</FormControl.Label>
        <Input onChangeText={(title) => setTrip({ ...trip, title })} />
      </FormControl>
      <FormControl>
        <FormControl.Label>updated Image:</FormControl.Label>
        <Input onChangeText={(image) => setTrip({ ...trip, image })} />
      </FormControl>
      <FormControl>
        <FormControl.Label>updated Description:</FormControl.Label>
        <Input
          onChangeText={(description) => setTrip({ ...trip, description })}
        />
      </FormControl>
      <Button mt="2" colorScheme="indigo" onPress={handleUpdate}>
        update Trip
      </Button>
    </View>
  );
};

export default UpdateTrip;
