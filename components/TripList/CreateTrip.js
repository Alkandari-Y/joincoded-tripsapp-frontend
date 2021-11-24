import { Button, FormControl, useToast, Input } from "native-base";
import React, { useState } from "react";
import { View } from "react-native";
import tripStore from "../../stores/tripStore";
//Expo
import * as ImagePicker from 'expo-image-picker';

const CreateTrip = ({ navigation }) => {
  const toast = useToast();

  const [trip, setTrip] = useState({
    title: "",
    image: "",
    description: "",
  });


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
            setTrip({ ...trip, image: image });
        }
    } catch (error) {
        console.log(error);
    }
  };

  const handleSubmit = () => {
    tripStore.createTrip(trip, navigation, toast);
    setTrip({
      title: "",
      image: "",
      description: "",
    })
    navigation.navigate("TripList");
  };

  return (
    <View>
      <FormControl>
        <FormControl.Label>Trip Name:</FormControl.Label>
        <Input onChangeText={(title) => setTrip({ ...trip, title })} />
      </FormControl>
      <FormControl>
          <FormControl.Label>Choose An Image to Upload</FormControl.Label>
            <Button title="Pick an image from camera roll" onPress={_pickImage} />
            {/* {newImage && <Image source={{ uri: newImage }} style={{ width: 200, height: 200 }} />} */}
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
      {/* <FormControl>
        <FormControl.Label>Image:</FormControl.Label>
        <Input onChangeText={(image) => setTrip({ ...trip, image })} />
      </FormControl> */}