import { observer } from "mobx-react";
import { Spinner, Image, Pressable, Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tripStore from "../../stores/tripStore";
import { baseUrl } from "../../stores/baseUrl";
import authStore from "../../stores/authStore";
// import { Pressable } from "react-native";

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
    <Pressable
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <View style={styles.tripDetailWrapper}>
        <Image
          style={styles.tripDetailImage}
          source={{ uri: baseUrl + trip.image }}
          alt="image"
        />
        <Text style={styles.tripDetailTitle}>{trip.description}</Text>

        {authStore.user?._id === trip.owner && (
          <Button onPress={handleDelete}>Delete Trip</Button>
        )}

        {authStore.user?._id === trip.owner && (
          <Button
            onPress={() => navigation.navigate("UpdateTrip", { trip: trip })}
          >
            update Trip
          </Button>
        )}
      </View>
    </Pressable>
  );
};
export default observer(TripDetail);

const styles = StyleSheet.create({
  tripDetailWrapper: {
    marginTop: 50,
  },
  tripDetailImage: {
    width: 150,
    height: 150,
  },
  tripDetailTitle: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
