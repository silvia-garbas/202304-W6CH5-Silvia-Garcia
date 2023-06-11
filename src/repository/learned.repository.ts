import fs from 'fs/promises';
import createDebug from 'debug';
const debug = createDebug('W6:LearnedRepo');

type Learned = {
  id: string;
  learned: string;
};

const file = './data.json';

export class LearnedRepo {
  constructor() {
    debug('Learned Repo');
  }

  async readAll() {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    return JSON.parse(stringData) as Learned[];
  }

  async getById(id: string) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const learnedData = JSON.parse(stringData) as Learned[];
    return learnedData.find((value) => value.id === id);
  }

  // A async post(learned: Learned){
  //   const stringData = await fs.readFile(file, {encoding: 'utf-8'});
  //   const LearnedData = stringData.push(learned) as Learned[]
  //   await fs.writeFile(file, JSON.stringify(stringData))

  // }

  async post(learned: Learned) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const learnedData = JSON.parse(stringData) as Learned[];
    const newLearnedData = JSON.stringify([...learnedData, learned]);
    await fs.writeFile(file, newLearnedData, { encoding: 'utf-8' });
  }

  // Async deleteById(id: string) {}
}
