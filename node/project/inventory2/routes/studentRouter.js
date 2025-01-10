import { addStudent } from '../controller/studentController.js';
import Router from 'express';

export const studentRouter = Router();

studentRouter.post('/new', addStudent);
