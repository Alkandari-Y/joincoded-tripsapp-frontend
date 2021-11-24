import { observer } from "mobx-react";
import {
  Spinner,
  Image,
  Pressable,
  Button,
  Box,
  ScrollView,
} from "native-base";
import React from "react";
import { Text, View } from "react-native";
import tripStore from "../../stores/tripStore";
import { baseUrl } from "../../stores/baseUrl";
import authStore from "../../stores/authStore";
import styles from "./styles";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;

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
      <Box>
        <Box style={styles.profilePic}>Profile Picture</Box>
        <Box style={styles.buttons}>
          {authStore.user?._id === trip.owner && (
            <>
              <Button
                onPress={() =>
                  navigation.navigate("UpdateTrip", { trip: trip })
                }
              >
                Update Trip
              </Button>
              <Button onPress={handleDelete}>Delete Trip</Button>
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
