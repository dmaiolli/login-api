import { getRepository } from "typeorm";
import User from "../models/User";
import { sign } from 'jsonwebtoken';
import jwtConfig from '../config/auth';

import { compare } from 'bcryptjs';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  tokenJWT: string;
}

class AuthenticateUserController {
  public async execute({ email, password}: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: {email},
    })

    const passwordMatched = await compare(password, user.password);

    if ( !user || !passwordMatched ) {
      throw new Error('Combinação de email/password incorreta');
    }

    const { secret, expiresIn } = jwtConfig.jwt;

    const tokenJWT = sign({}, secret, {
      subject: user.id,
      expiresIn
    })

    return {
      user,
      tokenJWT
    }
  }
}

export default AuthenticateUserController;
