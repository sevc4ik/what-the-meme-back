import Meme from "../models/meme.js";

class MemeService {
  async getMemes() {
    const memes = await Meme.find();
    return memes;
  }
}

export default new MemeService();
