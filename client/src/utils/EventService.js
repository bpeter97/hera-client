import axios from "axios";
import { ENV } from "./enums";

var url;
if (ENV === "development") {
  url = "http://localhost:5000/api";
} else {
  url = "https://hera-tasks.herokuapp.com/api";
}

class EventService {
  static async getAllEvents() {
    try {
      const res = await axios.get(`${url}/events/`);
      const data = res.data;
      return data;
    } catch (err) {
      return err;
    }
  }

  static insertEvent(event) {
    return axios.post(`${url}/events/`, event);
  }

  static registerEvent(event) {
    try {
      const res = axios.patch(`${url}/events/register/${event.id}`, event);
      const data = res.data;
      return data;
    } catch (err) {
      return err;
    }
  }

  static updateStatus(event) {
    console.log(event);
    try {
      const res = axios.patch(`${url}/events/${event._id}`, event);
      const data = res.data;
      return data;
    } catch (err) {
      return err;
    }
  }

  static setConfirmed(event) {
    console.log(event);
    try {
      const res = axios.patch(`${url}/events/${event._id}`, event);
      const data = res.data;
      return data;
    } catch (err) {
      return err;
    }
  }
  static withdraw(event) {
    try {
      console.log(event);
      const res = axios.patch(`${url}/events/${event._id}`, event);
      const data = res.data;
      return data;
    } catch (err) {
      return err;
    }
  }
}

export default EventService;
