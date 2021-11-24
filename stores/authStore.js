//JWT
import decode from "jwt-decode";
//Mobx
import { makeAutoObservable } from "mobx";
//Axios Instance
import instance from "./instance";
//AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  user = null;

  setUser = async (token) => {
    // QUESTION: Why are you stringifying the token?
    const userToken = JSON.stringify(token);
    await AsyncStorage.setItem("userToken", userToken);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("userToken");
    // REVIEW: Remove comments
    // console.log(token);
    if (token) {
      const tempUser = decode(token);
      // console.log(token)
      const exp = tempUser.exp * 1000;
      if (exp > Date.now()) {
        this.setUser(token);
      } else {
        this.signOut();
      }
    }
  };

  signIn = async (user, navigation, toast) => {
    try {
      const res = await instance.post("/signin", user);
      // REVIEW: Remove console logs
      console.log(res.data.token);
      await this.setUser(res.data.token);
      toast.show({
        title: "Welcome",
        status: "success",
        placement: "top",
      });
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      toast.show({
        title: "Try Again!",
        description: "Invalid Credentials",
        status: "error",
        placement: "top",
      });
    }
  };

  signUp = async (user, navigation, toast) => {
    try {
      const res = await instance.post("/signup", user);
      await this.setUser(res.data.token);
      navigation.navigate("Home");
      toast.show({
        title: "Welcome",
        status: "success",
        placement: "top",
      });
    } catch (error) {
      console.log(error);
      toast.show({
        title: "Try Again!",
        description: "Please ensure all fields are filled!",
        status: "error",
        placement: "top",
      });
    }
  };

  signOut = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("userToken");
    this.user = null;
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
