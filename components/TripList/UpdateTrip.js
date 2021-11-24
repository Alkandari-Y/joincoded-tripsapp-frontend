import { Button, FormControl, Input, useToast } from "native-base";
import React, { useState } from "react";
import { Text, View } from "react-native";

import tripStore from "../../stores/tripStore";
//Expo
import * as ImagePicker from 'expo-image-picker';

const UpdateTrip = ({ route, navigation }) => {

  const { trip } = route.params;
  
  const [_trip, setTrip] = useState({
    title: trip.title,
    image: trip.image,
    description: trip.description,
  });

  const toast = useToast()

  const _pickImage = async () => {
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            const localUri = result.uri;
            const filename = localUri.split("/").pop();
            const match = /.(\w+)$/.exec(filename);
            const image = {
                uri: localUri,
                name: filename,
                type: match ? `image/${match[1]}` : image,
            };
            setTrip({ ..._trip, image: image });
        }
    } catch (error) {
        console.log(error);
    }
  };

  const handleUpdate = async () => {
    tripStore.updateTrip(trip._id, _trip, navigation, toast);
  };
  return (
    <View>
      <FormControl>
        <FormControl.Label>updated Trip Name:</FormControl.Label>

        <Input onChangeText={(title) => setTrip({ ..._trip, title })} />
      </FormControl>
      <FormControl>
          <FormControl.Label>Choose An Image to Upload</FormControl.Label>
          <Button title="Pick an image from camera roll" onPress={_pickImage} />

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
