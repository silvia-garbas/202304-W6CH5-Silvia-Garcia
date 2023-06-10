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
    const cucumberData = JSON.parse(stringData) as Learned[];
    return cucumberData.find((value) => value.id === id);
}
}


