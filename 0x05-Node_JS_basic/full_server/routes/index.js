#!/usr/bin/env node
/**
 * Inside the file full_server/routes/index.js:

 * Link the route / to the AppController
 * Link the route /students and /students/:majorto the StudentsController
 */
import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const routes = express.Router();

routes.get('/', AppController.getHomepage);
routes.get('/students', StudentsController.getAllStudents);
routes.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default routes;
