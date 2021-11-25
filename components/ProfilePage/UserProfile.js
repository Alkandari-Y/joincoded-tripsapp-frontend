//React
import React from "react";
//Native Base
import {
  Stack,
  Center,
  Heading,
  Spinner,
  Button,
  View,
  ScrollView,
} from "native-base";
//Mobx
import { observer } from "mobx-react";
//Store
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
//Components
import UserAvatar from "./UserAvatar";
import CreatedTripsList from "./CreatedTripsList";
import styles from "./styles";

const UserProfile = ({ navigation, route }) => {
  if (!profileStore.isLoading) {
    return <Spinner />;
  }
  const selectedProfile = route.params.profile;
  return (
    <View style={styles.background}>
      <UserAvatar
        image={selectedProfile.image}
        username={selectedProfile.user.username}
        profileId={selectedProfile._id}
      />

      <Heading style={styles.color} size="md" marginLeft="5" marginBottom="5">
        Created Trips:
      </Heading>
      <CreatedTripsList
        navigation={navigation}
        profileId={selectedProfile._id}
      />

      <Heading style={styles.color} size="md" marginLeft="5" marginBottom="5">
        About Me:
      </Heading>
      <ScrollView>
        <Center style={styles.bio}>{selectedProfile.bio}</Center>
      </ScrollView>

      {authStore.user?._id === selectedProfile.user._id && (
        <Stack>
          <Button
            onPress={() =>
              navigation.navigate("UserUpdateProfile", {
                userProfile: selectedProfile,
              })
            }
            marginTop="5"
          >
            Update Profile
          </Button>
        </Stack>
      )}
    </View>
  );
};

export default observer(UserProfile);
