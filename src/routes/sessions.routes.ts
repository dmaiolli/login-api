import { Router } from 'express';
import AuthenticateUserController from '../controllers/AuthenticateUserController';
import User from '../models/User';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserController()

    const { user, tokenJWT } = await authenticateUser.execute({
      email,
      password
    });

    return response.json({ user, tokenJWT });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
