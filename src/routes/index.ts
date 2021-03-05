import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ error: 'Denys muito lindo' })
})

export default routes;
