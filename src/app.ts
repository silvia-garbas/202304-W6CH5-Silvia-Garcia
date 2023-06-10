import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createDebug from 'debug';
import { learnedRouter } from './routers/learned.router.js';
const debug = createDebug('W6:App');

export const app = express();

debug('Loaded Express App');

const corsOptions = {
  origin: '*',
};

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());

app.use((_req, _res, next) => {
  debug('Soy un middleware');
  next();
});




app.get('/', (req, res) => {
  res.send('What I supposedly learned... ');
});

// S app.get('/', (req, res) =>{
//   res.send('Esto lo he hecho yo')

// })




app.use('/learned', learnedRouter);
