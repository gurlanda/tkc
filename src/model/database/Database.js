import Dexie from 'dexie';
import { demoQuestionArray } from '../survey/DemoQuestions';
import { getResponse } from '../survey/Response';

export class AnswersDB extends Dexie {
  constructor(databaseName) {
    super(databaseName);
    this.version(1).stores({
      answers: '++id, name, favColor, likesCandy'
    });
  }
}

export class SurveyDB_v1 extends Dexie {
  constructor(databaseName, questionArray = null) {
    super(databaseName);
    this.version(1).stores({
      responses: '++responseID',
      state: '++questionID'
    })

    if (questionArray) {
      this.overwriteQuestions(questionArray);
    }
  }

  async overwriteQuestions(questionArray) {
    this.state.clear();

    const newState = questionArray.map((question) => {
      return {
        questionData: question
      }
    });

    await this.state.bulkAdd(newState);
  }

  async submit() {
    const currentState = await this.state.toArray();
    const questionResponses = currentState.map(({ questionData }) => {return getResponse(questionData)});

    this.responses.add({ responseData: questionResponses });
  }
}

const Database = new AnswersDB('SampleDB');
const demoSurveyDB_v1 = new SurveyDB_v1('demoSurveyDB_v1', demoQuestionArray);

export { Database, demoSurveyDB_v1 };