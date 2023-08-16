import 'dotenv/config';
import { Express } from 'express';
import listarTarefas from './filmRepository';

import filmController from '../controlers/filmController.js'

let server =Express();
server.use(cors());
server.use(Express.json());

server.use(filmController)

server.listen(process.env.PORT, () => console.log(`Online em ${process.env.PORT}`));