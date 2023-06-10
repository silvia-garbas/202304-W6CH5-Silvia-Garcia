import { Router as createRouter } from 'express';
import { LearnedController } from '../controllers/learned.controller.js';

const controller = new LearnedController();
export const learnedRouter = createRouter();

learnedRouter.get('/', controller.getAll.bind(controller));
learnedRouter.get('/:id', controller.getById.bind(controller));
learnedRouter.post('/', controller.post.bind(controller));
learnedRouter.patch('/:id', controller.patch.bind(controller));
learnedRouter.delete('/:id', controller.deleteById.bind(controller));
