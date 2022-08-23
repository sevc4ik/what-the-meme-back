import UserService from "../service/userService.js";

class UserController {
  async getUser(req, res) {
    try {
      const user = await UserService.getUser(req.params.id);
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createUser(req, res) {
    try {
      const user = await UserService.createUser(req.body);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateUser(req, res) {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      return res.json(user);
    } catch (e) {
      res.status(500).json("wrong ID");
    }
  }
}

export default new UserController();
