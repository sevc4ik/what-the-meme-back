import QuestionService from "../service/questionService.js";

class QuestionController {
  async getQuestions(req, res) {
    try {
      const questions = await QuestionService.getQuestions();
      return res.json(questions);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getQuestion(req, res) {
    try {
      const question = await QuestionService.getQuestion(req.params.id);
      return res.json(question);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createQuestion(req, res) {
    try {
      const question = await QuestionService.createQuestion(req.body);
      res.json(question);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new QuestionController();
