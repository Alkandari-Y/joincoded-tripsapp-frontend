import { observer } from "mobx-react";
import React from "react";
import { ScrollView, Spinner } from "native-base";
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

  return <ScrollView style={styles.container}>{tripList}</ScrollView>;
};

export default observer(TripList);
