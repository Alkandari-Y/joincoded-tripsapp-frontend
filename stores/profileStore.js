//JWT
import decode from "jwt-decode";
//Mobx
import { makeAutoObservable } from "mobx";
//Axios Instance
import instance from "./instance";

class ProfileStore {
    constructor() {
        makeAutoObservable(this);
    }
    
    accountProfile = null;
    isLoading = true;

    getSelectedProfile = async (username) => {
        this.isLoading = true;
        try {
            const res = await instance.get(`/userProfile/${username}`);
            this.accountProfile = res.data;
            this.isLoading = false;
        } catch (error) {
            console.log(error);
        }
    }

    updateProfile = async (updatedProfile) => {
        try {
            const res = await instance.put(`/userProfile`, updatedProfile);
            const profile = this.accountProfile.find((profile) =>
             profile._id === updatedProfile._id);
            for (const key in profile) profile[key] = updatedProfile[key];
        } catch (error) {
            console.error(error);
        }
    };
}

const profileStore = new ProfileStore();
export default profileStore;
