import Dexie from 'dexie';

export class AnswersDB extends Dexie {
  constructor() {
    super('SampleDB');
    this.version(1).stores({
      answers: '++id, name, favColor, likesCandy'
    });
  }
}

const Database = new AnswersDB('SampleDB');

export default Database;