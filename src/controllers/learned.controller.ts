import { Request, Response } from 'express';
import { LearnedRepo } from '../repository/learned.repository.js';
import createDebug from 'debug';
const debug = createDebug('W6:LearnedController');

export class LearnedController {
  repo: LearnedRepo;
  constructor() {
    this.repo = new LearnedRepo();
    debug('Instantiated LearnedController');
    debug(this.repo);
  }

  async getAll(req: Request, res: Response) {
    res.send(await this.repo.readAll());
  }

  async getById(req: Request, res: Response) {
    res.send(await this.repo.getById(req.params.id));
  }

  async post(req: Request, resp: Response) {
    resp.send('Se ha añadido un nuevo item a su lista.');
    resp.send(await this.repo.post(req.body));
  }

  async deleteById(req: Request, res: Response) {
    res.send('Se ha borrado el item seleccinado.');
    res.send(await this.repo.deleteById(req.params.id));
  }

  async patch(req: Request, res: Response) {
    res.send('Se ha actualizado el item');
    res.send(
      await this.repo.patch(req.body.idToModify, req.body.newLearnedSkill)
    );
  }
  // Lo dejo aquí para seguir probándolo:
  // async patch(req: Request, res: Response) {
  //   res.send(await this.repo.patch(req.body.id, req.body))
  //   res.send('Updated data');
  // }
}
