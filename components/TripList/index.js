import { observer } from "mobx-react";
import { View } from "react-native";
import React from "react";
import { Spinner } from "native-base";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import styles from "./styles";

const TripList = ({ navigation }) => {
  if (tripStore.isLoading) {
    return <Spinner />;
  }

  const tripList = tripStore.trips.map((trip) => (
    <TripItem navigation={navigation} trip={trip} key={trip._id} />
  ));

  return <View style={styles.container}>{tripList}</View>;
};

export default observer(TripList);
