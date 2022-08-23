import Avatar from "../models/avatar.js";

class AvatarService {
  async getAvatars() {
    const avatars = await Avatar.find();
    return avatars;
  }
}

export default new AvatarService();
