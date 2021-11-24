//Mobx
import { makeAutoObservable } from "mobx";
//Axios Instance
import instance from "./instance";

class ProfileStore {
    constructor() {
        makeAutoObservable(this);
    }
    

    profiles = [];
    isLoading = true;

    getProfilesList = async () => {
        try {
            const res = await instance.get('/profiles');
            this.profiles = res.data;
            this.loading = false;
        } catch (error) {
            console.log(error)
        }
    }

    updateProfile = async (updatedProfile, profileId) => {
        try {
            const formData = new formData();
            for (const key in updatedProfile) {
                formData.append(key, updatedProfile[key]);
            }
            const res = await instance.put(`/profiles/${profileId}`, formData)
        } catch (error) {
            console.error(error);
        }
    };
}

const profileStore = new ProfileStore();
profileStore.getProfilesList();
export default profileStore;
