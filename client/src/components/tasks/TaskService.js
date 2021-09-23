import axios from "axios";
import { ENV } from "./../../utils/enums";

var url;
if (ENV === "development") {
  url = "http://localhost:5000/api";
} else {
  url = "https://hera-tasks.herokuapp.com/api";
}

class TaskService {
  // Get all tasks
  static async getTasks() {
    try {
      const res = await axios.get(`${url}/tasks/`);
      const data = res.data;
      return data.map(tasks => ({
        ...tasks,
        requestedAt: `${new Date(
          tasks.requestedAt
        ).toLocaleDateString()} ${new Date(
          tasks.requestedAt
        ).toLocaleTimeString()}`
      }));
    } catch (err) {
      return err;
    }
  }

  static async getItems() {
    try {
      const res = await axios.get(`${url}/items/colonial`);
      return res.data.map(item => item);
    } catch (err) {
      return err;
    }
  }

  static async getRegions() {
    try {
      const res = await axios.get(`${url}/regions/`);
      return res.data.map(region => region);
    } catch (err) {
      return err;
    }
  }

  static async updateTask(task) {
    let patchUrl = `${url}/tasks/${task._id}`;
    return await axios.patch(patchUrl, task);
  }

  // Create Task
  static insertTask(task) {
    return axios.post(`${url}/tasks/`, task);
  }

  // Delete Task
  static deleteTask(id) {
    return axios.delete(`${url}/tasks/${id}`);
  }
}

export default TaskService;
