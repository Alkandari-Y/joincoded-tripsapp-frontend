import { observer } from "mobx-react";
import {
  Spinner,
  Image,
  Button,
  Box,
  ScrollView,
  Pressable,
  Heading,
} from "native-base";
import React from "react";
import { Text, View } from "react-native";
import tripStore from "../../stores/tripStore";
import { baseUrl } from "../../stores/baseUrl";
import authStore from "../../stores/authStore";
import styles from "./styles";
import profileStore from "../..//stores/profileStore";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;

  const userProfile = profileStore.profiles.find(
    (profile) => profile._id === trip.owner.profile
  );

  if (tripStore.isLoading) {
    return <Spinner />;
  }
  const handleDelete = () => {
    tripStore.deleteTrip(trip._id);
    navigation.navigate("TripList");
  };

  return (
    <View style={styles.background}>
      <Image
        style={styles.Image}
        source={{ uri: baseUrl + trip.image }}
        alt="image"
      />
      <Box style={styles.profileContainer}>
        <Pressable
          onPress={() =>
            navigation.navigate("Profile", { profile: userProfile })
          }
        >
          <Image
            style={styles.profilePic}
            source={{ uri: baseUrl + userProfile.image }}
          />
          <Heading style={styles.username}>{userProfile.user.username}</Heading>
        </Pressable>
        <Box style={styles.buttons}>
          {authStore.user?._id === trip.owner._id && (
            <>
              <Button
                onPress={() =>
                  navigation.navigate("UpdateTrip", { trip: trip })
                }
                variant="outline"
                colorScheme="info"
              >
                Update Trip
              </Button>
              <Box style={styles.buttonSpace}></Box>
              <Button
                onPress={handleDelete}
                variant="outline"
                colorScheme="danger"
              >
                Delete Trip
              </Button>
            </>
          )}
        </Box>
      </Box>
      <ScrollView style={styles.descriptionContainer}>
        <Text>{trip.description}</Text>
      </ScrollView>
    </View>
  );
};
export default observer(TripDetail);
