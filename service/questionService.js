import Question from "../models/question.js";

class QuestionService {
  async getQuestions() {
    const questions = await Question.find();
    return questions;
  }

  async getQuestion(id) {
    try {
      const question = await Question.findById(id).exec();
      return question;
    } catch {
      throw new Error("ID doesn't exist");
    }
  }

  async createQuestion(question) {
    const createdQuestion = await Question.create({ ...question });
    return createdQuestion;
  }
}

export default new QuestionService();
