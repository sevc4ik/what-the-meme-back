import MemeService from "../service/memeService.js";

class MemeController {
  async getMemes(req, res) {
    try {
      const memes = await MemeService.getMemes();
      return res.json(memes);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new MemeController();
