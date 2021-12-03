import Dexie from 'dexie';
import { demoQuestionArray } from '../survey/DemoQuestions';
import { getResponse } from '../survey/Response';

export class SurveyDB_v1 extends Dexie {
  constructor(databaseName, questionArray = null) {
    super(databaseName);
    this.version(1).stores({
      responses: '++responseID',
      state: '++questionID, &questionName'
    })

    if (questionArray) {
      this.overwriteQuestions(questionArray);
    }
  }

  async overwriteQuestions(questionArray) {
    this.state.clear();

    const newState = questionArray.map((question) => {
      return {
        questionName: question.questionName,
        questionData: question
      }
    });

    await this.state.bulkAdd(newState);
  }

  async submit() {
    const currentState = await this.state.toArray();
    const questionResponses = currentState.map(({ questionData }) => getResponse(questionData));

    this.responses.add({ responseData: questionResponses });
  }
}

const demoSurveyDB_v1 = new SurveyDB_v1('demoSurveyDB_v1', demoQuestionArray);

export { demoSurveyDB_v1 };