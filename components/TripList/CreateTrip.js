import { Button, FormControl, useToast, Input } from "native-base";
import React, { useState } from "react";
import { View } from "react-native";
import tripStore from "../../stores/tripStore";

const CreateTrip = ({ navigation }) => {
  const toast = useToast;

  const [trip, setTrip] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleSubmit = () => {
    tripStore.createTrip(trip, navigation, toast);
  };

  return (
    <View>
      <FormControl>
        <FormControl.Label>Trip Name:</FormControl.Label>
        <Input onChangeText={(title) => setTrip({ ...trip, title })} />
      </FormControl>
      <FormControl>
        <FormControl.Label>Image:</FormControl.Label>
        <Input onChangeText={(image) => setTrip({ ...trip, image })} />
      </FormControl>
      <FormControl>
        <FormControl.Label>Description:</FormControl.Label>
        <Input
          onChangeText={(description) => setTrip({ ...trip, description })}
        />
      </FormControl>
      <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
        Create Trip
      </Button>
    </View>
  );
};

export default CreateTrip;
