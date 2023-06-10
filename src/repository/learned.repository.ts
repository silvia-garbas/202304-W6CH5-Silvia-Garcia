import fs from 'fs/promises';
import createDebug from 'debug';
const debug = createDebug('W6:SampleRepo');

type Learned = {
  id: string;
  learned: string;
};

const file = './data.json';

export class LearnedRepo {
  constructor() {
    debug('Sample Repo');
  }

  async readAll() {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    return JSON.parse(stringData) as Learned[];
  }
}
