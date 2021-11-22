import { makeAutoObservable } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];

  constructor() {
    makeAutoObservable(this);
  }

  isLoading = true;

  fetchTrips = async () => {
    try {
      const res = await instance.get("/trips");
      this.trips = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log("tripStore -> fetchTrips -> error", error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
