import User from "../models/user.js";

class UserService {
  async getUser(id) {
    try {
      const user = await User.findById(id).exec();
      return user;
    } catch {
      throw new Error("ID doesn't exist");
    }
  }
  async createUser(user) {
    const createdUser = await User.create({ ...user });
    return createdUser;
  }

  async updateUser(id, reqBody) {
    try {
      const user = await User.findById(id).exec();
      Object.assign(user, reqBody);
      user.save();
      return user;
    } catch {
      throw new Error("ID doesn't exist");
    }
  }
}

export default new UserService();
