import { observer } from "mobx-react";
import { View } from "react-native";
import React from "react";
import { Spinner, Text } from "native-base";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";

const TripList = ({ navigation }) => {
  if (tripStore.isLoading) {
    return <Spinner />;
  }

  const tripList = tripStore.trips.map((trip) => (
    <TripItem navigation={navigation} trip={trip} key={trip._id} />
  ));

  return <View>{tripList}</View>;
};

export default observer(TripList);
