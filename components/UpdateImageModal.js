//React
import React, { useState, useEffect } from "react"
//React Native
import {
    Image,
} from 'react-native'
//Native Base
import {
  Button,
  Modal,
  FormControl,
  Input,
} from "native-base"
//Mobx
import { observer } from "mobx-react";
//Stores
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";
import tripStore from "../stores/tripStore";
//Expo
import * as ImagePicker from 'expo-image-picker';

const UpdateImageModal = ({ showModal, setShowModal, typeOfUpdate, profileId }) => {
    //https://docs.expo.dev/versions/v43.0.0/sdk/imagepicker/ Resource Link for Uploading Image

    const [image, setImage] = useState(null);
    // useEffect(() => {
    //     (async () => {
    //       if (Platform.OS !== 'web') {
    //         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //         if (status !== 'granted') {
    //           alert('Sorry, we need camera roll permissions to make this work!');
    //         }
    //       }
    //     })();
    //   }, []);
    
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
        if (!result.cancelled) {
          const localUri = result.uri;
          const filename = localUri.split("/").pop();
          const match = /\.(\w+)$/.exec(filename);
          const image = {
              uri: localUri,
              name: filename,
              type: match ? `image/${match[1]}` : `image`,
          };
          setImage({image: image});
        }
    };
    
    const handleSubmit = () => {
        if (typeOfUpdate === 'profile') {
            console.log(image)
            profileStore.updateProfile(image, profileId)
        } else if (typeOfUpdate === 'trip') {
            console.log('trip')
        } else {
            console.log('alert')
        }
    }
  
  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Update Image?</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Choose An Image to Upload</FormControl.Label>
              <Button title="Pick an image from camera roll" onPress={pickImage} />
                {/* {newImage && <Image source={{ uri: newImage }} style={{ width: 200, height: 200 }} />} */}
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                    handleSubmit()
                  setShowModal(false)
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default observer(UpdateImageModal)