//Mobx
import { makeAutoObservable } from "mobx";
//Axios Instance
import instance from "./instance";

class ProfileStore {
    constructor() {
        makeAutoObservable(this);
    }
    
    userProfile = null;
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

    setUserProfile = (userId) => {
        const foundProfile = this.profiles.find(profile=> userId === profile.user._id)
        this.userProfile = foundProfile;
    }

    pushSignUpProfile = async () => {
        try {
            const res = await instance.get(`profiles/newUser/`);
            this.profiles.push(res.data);
            this.userProfile = res.data;
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
