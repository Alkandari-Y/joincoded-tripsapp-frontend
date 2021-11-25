import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: { height: "100%", width: "100%", backgroundColor: "#ecfeff" },
  Image: {
    width: "75%",
    height: "40%",
    marginTop: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 5,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
  },
  profilePic: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "grey",
    width: 100,
    height: 100,
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "5%",
    marginRight: "5%",
  },

  username: { color: "black", marginLeft: "10%" },
  buttons: {
    display: "flex",
    marginTop: "7%",
  },
  buttonSpace: {
    marginTop: "5%",
  },
  descriptionContainer: {
    width: "95%",
    height: "20%",
    marginTop: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5%",
  },
});

export default styles;
