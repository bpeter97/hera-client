import axios from "axios";

const url = "api/tasks/";

class TaskService {
  // Get all tasks
  static async getTasks() {
    try {
      const res = await axios.get(url);
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

  static updateTask(task) {
    let patchUrl = `${url}${task._id}`;
    return axios.patch(patchUrl, task);
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
    return axios.delete(`${url}${id}`);
  }
}

export default TaskService;
