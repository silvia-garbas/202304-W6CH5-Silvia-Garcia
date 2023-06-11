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

  async post(learned: Learned) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const learnedData = JSON.parse(stringData) as Learned[];
    learnedData.push(learned);
    const newLearnedData = JSON.stringify(learnedData);
    await fs.writeFile(file, newLearnedData, { encoding: 'utf-8' });
  }

  async deleteById(idToDelete: string) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const learnedData: Learned[] = JSON.parse(stringData) as Learned[];
    const indexToDelete = learnedData.findIndex(
      (learned) => learned.id === idToDelete
    );
    if (indexToDelete > -1) {
      learnedData.splice(indexToDelete, 1);
      await fs.writeFile(file, JSON.stringify(learnedData));
    }
  }

  async patch(idToModify: string, newLearnedSkill: string) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const learnedData: Learned[] = JSON.parse(stringData) as Learned[];
    const indexToModify = learnedData.findIndex(
      (learned) => learned.id === idToModify
    );
    if (indexToModify > -1) {
      const learnedToModify = learnedData[indexToModify];
      if (learnedToModify !== null) {
        learnedToModify.learned = newLearnedSkill;
        learnedData[indexToModify] = learnedToModify;
        await fs.writeFile(file, JSON.stringify(learnedData));
      }
    }
  }
  // Lo dejo aquí para seguir probándolo:
  // async patch(id: string, learned: Learned) {
  //   const stringData = await fs.readFile(file, { encoding: 'utf-8' });
  //   const learnedData = JSON.parse(stringData) as Learned[];
  //   const newData = JSON.stringify(
  //     learnedData.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, ...learned };
  //       }

  //       return item;
  //     })
  //   );
  //   await fs.writeFile(file, newData, { encoding: 'utf-8' });
  // }
}
