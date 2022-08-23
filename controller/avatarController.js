import AvatarService from "../service/avatarService.js";

class AvatarController {
  async getAvatars(req, res) {
    try {
      const avatars = await AvatarService.getAvatars();
      return res.json(avatars);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new AvatarController();
