import { observer } from "mobx-react";
import { Spinner, Image } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tripStore from "../../stores/tripStore";
import { baseUrl } from "../../stores/baseUrl";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

  if (tripStore.isLoading) {
    return <Spinner />;
  }

  return (
    <View style={styles.tripDetailWrapper}>
      <Image
        style={styles.tripDetailImage}
        source={{ uri: baseUrl + trip.image }}
        alt="image"
      />
      <Text style={styles.tripDetailTitle}>{trip.description}</Text>
    </View>
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
