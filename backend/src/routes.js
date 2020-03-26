const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//app.use(express.json);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.put('/incidents/:id', IncidentsController.update);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profiles', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;