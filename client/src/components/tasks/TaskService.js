import axios from "axios";

const url = "https://hera-tasks.herokuapp.com/api";

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
      const res = await axios.get(`${url}/items/`);
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
    return axios.post(url, {
      location: task.location,
      precedence: task.precedence,
      enemyActivity: task.enemyActivity,
      items: task.items
    });
  }

  // Delete Task
  static deleteTask(id) {
    return axios.delete(`${url}/tasks/${id}`);
  }
}

export default TaskService;
