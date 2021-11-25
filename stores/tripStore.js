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
      const formData = new FormData();
      for (const key in trip) {
        formData.append(key, trip[key]);
      }

      const res = await instance.post("/trips", formData);
      this.trips.push(res.data);
      toast.show({
        title: "Trip UpDate!",
        status: "success",
        placement: "top",
      });
      navigation.navigate("TripDetail", { trip: res.data });
    } catch (error) {
      console.log(error);
      toast.show({
        title: "Something Went Wrong!",
        description: "You Broke Something",
        status: "error",
        placement: "top",
      });
    }
  };

  updateTrip = async (tripId, updatedTrip, navigation, toast) => {
    try {
      const trip = this.trips.find((trip) => trip._id === tripId);

      const formData = new FormData();
      for (const key in updatedTrip) {
        formData.append(key, updatedTrip[key]);
      }
      const res = await instance.put(`/trips/${tripId}`, formData);

      for (const key in trip) trip[key] = res.data[key];

      toast.show({
        title: "Trip UpDate!",
        status: "success",
        placement: "top",
      });
      navigation.navigate("TripDetail", { trip: trip });
    } catch (error) {
      console.log(error);
      toast.show({
        title: "Something Went Wrong!",
        description: "You Broke Something",
        status: "error",
        placement: "top",
      });
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
