import Router from 'express';
// Conexão entre frontEnd e BackEnd do body para o banco.
import MentorController from './app/controllers/MentorController';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import ChallengeController from './app/controllers/ChallengeController';


// Middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Criando a primeira rota
routes.post('/mentors', MentorController.store);
routes.get('/mentors', MentorController.index);
routes.get('/mentors/:id', MentorController.index);

// Challengers routes
routes.get('/challengers', ChallengeController.index);

routes.get('/students', StudentController.index);



routes.post('/sessions', SessionController.store);

// Middleware para autenticação de rotas
routes.use(authMiddleware);

// Rota para atualização de informações do usuário
routes.put('/mentors', MentorController.update);

// Rota para cadastro de mentores
routes.post('/cadastrados/atualizados', StudentController.store);

// Rota para atualização de informações dos mentores
routes.put('/cadastrados/atualizados', StudentController.update);

// Exportanto o arquivo routes.js
export default routes;
