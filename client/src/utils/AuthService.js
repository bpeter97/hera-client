import axios from "axios";

class AuthService {
  // Get all tasks
  static async getUserInfo(id) {
    try {
      let options = {
        headers: {
          authorization: id
        }
      };

      const res = await axios.get(
        "https://hera-tasks.herokuapp.com/api/discord/user/",
        options
      );
      const data = res.data;
      return data;
    } catch (err) {
      this.$store.dispatch("logout");
      this.$store.dispatch("error", {
        message: "You must be a member of 1st RL to use this app."
      });
      return err;
    }
  }

  static async logout(id) {
    try {
      let options = {
        headers: {
          authorization: id
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
