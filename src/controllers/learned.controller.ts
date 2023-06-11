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

  patch(req: Request, res: Response) {
    res.send('Patch Sample!: ' + req.body.learned);
  }

}
