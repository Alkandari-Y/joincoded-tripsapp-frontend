import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //Main Profile Styling

  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ecfeff",
  },
  color: { color: "black" },
  bio: {
    marginVertical: "5%",
    marginHorizontal: "5%",
    height: "70%",
  },
  //Avatar Styling
  profilePic: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  username: {
    color: "black",
    marginTop: "15%",
  },

  //Trip List Styling
  tripList: {
    display: "flex",
    height: 200,
    marginBottom: "25%",
  },
  tripItem: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  tripName: { color: "black" },
});

export default styles;
