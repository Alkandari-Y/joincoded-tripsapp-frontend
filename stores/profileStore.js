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
      // REVIEW: /profiles
      const res = await instance.get("profiles");
      this.profiles = res.data;
      // REVIEW: loading or isLoading?
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  updateProfile = async (updatedProfile, profileId) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };
}

const profileStore = new ProfileStore();
profileStore.getProfilesList();
export default profileStore;
