import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import icons from "react-native-vector-icons/FontAwesome";
import { height, style } from "dom-helpers";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Icon
        style={styles.iconlist}
        size={28}
        name="list"
        onPress={() => navigation.navigate("TripList")}
      />
      <View style={styles.header}>
        <Icon
          style={styles.iconHome}
          size={28}
          name="home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: `100%`,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconlist: {
    position: "absolute",

    left: "100%",
  },

  iconHome: {
    position: "absolute",
    right: "90%",
  },
});
