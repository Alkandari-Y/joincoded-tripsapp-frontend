import decode from "jwt-decode";
import { makeAutoObservable } from "mobx";
import instance from "./instance";
import {AsyncStorage} from "react-native";

class AuthStore {

    constructor() {
        makeAutoObservable(this);
        }

	user = null;

}

const authStore = new AuthStore();

export default authStore;