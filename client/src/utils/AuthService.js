import axios from "axios";

class AuthService {
  // Get all tasks
  static async getUserInfo(id) {
    try {
      let options = {
        headers: {
          Authorization: id
        }
      };

      const res = await axios.get(
        "https://hera-tasks.herokuapp.com/api/discord/user/",
        options
      );
      const data = res.data;
      return data;
    } catch (err) {
      return err;
    }
  }

  static async logout(id) {
    try {
      let options = {
        headers: {
          Authorization: id
        }
      };

      const res = await axios.get(
        "https://hera-tasks.herokuapp.com/api/discord/user/logout",
        options
      );
      const data = res.data;
      return data;
    } catch (err) {
      return err;
    }
  }
}

export default AuthService;
