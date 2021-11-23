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

  createTrip = async (trip, navigation, toast) => {
    try {
      const res = await instance.post("/trips", trip);
      this.trips.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  updateTrip = async (tripId, updatedTrip) => {
    try {
      const res = await instance.put(`/trips/${tripId}`, updatedTrip);
      this.trips = this.trips.map((trip) => {
        if (trip._id === tripId) {
          return res.data;
        } else {
          return trip;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip._id !== tripId);
    } catch (error) {
      console.log(error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
