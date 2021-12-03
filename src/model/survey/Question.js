// Abstract class
class Question {
  constructor(questionType, isRequired, questionName, questionText) {
    // Forbid the creation of Question object
    if (this.constructor === Question) {
      throw new Error("Class Question is abstract; abstract classes can't be instantiated.");
    }

    this.questionType = questionType;
    this.isRequired = isRequired;
    this.questionName = questionName;
    this.questionText = questionText;
  }

  getResponse() {
    throw new Error(`${this.questionType}: getResponse() must be implemented.`);
  }
}

export default Question;