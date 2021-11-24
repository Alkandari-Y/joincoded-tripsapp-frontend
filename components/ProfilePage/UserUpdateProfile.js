import { observer } from "mobx-react";
import { Button, FormControl, Input, useToast } from "native-base";
import React, { useState } from "react";
import { Text, View } from "react-native";
import profileStore from "../../stores/profileStore";
//Expo
import * as ImagePicker from 'expo-image-picker';

const UserUpdateProfile = ({ route, navigation }) => {
    
    const { userProfile } = route.params;
    const [_profile, setProfile] = useState({
        image: userProfile.image,
        bio: userProfile.bio,
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
              setProfile({ ..._profile, image: image });
          }
      } catch (error) {
          console.log(error);
      }
    };
  
  const handleUpdate = () => {
      profileStore.updateProfile(_profile, userProfile._id, navigation, toast);
    };

    return (
        <View>
        <FormControl>
            <FormControl.Label>Choose An Image to Upload</FormControl.Label>
            <Button title="Pick an image from camera roll" onPress={_pickImage} />
        </FormControl>

        <FormControl>
          <FormControl.Label>Updated Bio:</FormControl.Label>
          <Input
            onChangeText={(bio) => setProfile({ ..._profile, bio })}
          />
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={handleUpdate}>
          update profile
        </Button>
      </View>
    )
}

export default observer(UserUpdateProfile)
