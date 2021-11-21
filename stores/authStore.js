import decode from "jwt-decode";
import { makeAutoObservable } from "mobx";
import instance from "./instance";
import {AsyncStorage} from "react-native";

class AuthStore {

    constructor() {
        makeAutoObservable(this);
        }

	user = null;

    setUser = async (token) => {
        const userToken = JSON.stringify(token)
		await AsyncStorage.setItem("myToken", userToken);
		instance.defaults.headers.common.Authorization = `Bearer ${token}`;
		this.user = decode(token);
	};

	checkForToken = async() => {
		const token = await AsyncStorage.getItem("myToken");
		if (token) {
			const tempUser = decode(token);
			const time = tempUser.exp;
			if (time > Date.now()) {
				this.setUser(token);
			} else {
				this.signOut();
			}
		}
	};

	signIn = async (user ) => {
		try {
			const res = await instance.post("/login", user);
            await this.setUser(res.data.token);
		} catch (error) {
            console.log(error);
		}
	};

	signUp = async (user) => {
		try {
			const res = await instance.post("/signup", user);
            await this.setUser(res.data.token);
		} catch (error) {
			console.log(error);
		}
	};

	signOut = async () => {
		delete instance.defaults.headers.common.Authorization;
		await AsyncStorage.removeItem("myToken");
        this.user = null;
        console.log(`logged out`)
	};
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;