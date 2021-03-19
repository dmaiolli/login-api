import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import jwtConfig from '../config/auth';

export default function assureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
  ): void {

    const authHeader = request.headers.authorization;

    if ( !authHeader ) {
      throw new Error("Logue-se para acessar essa página")
    }

    const [ type, token ] = authHeader.split(' ');

    try {
      const decoded = verify(token, jwtConfig.jwt.secret);

      console.log(decoded);

      return next();
    } catch (err) {
      throw new Error("JWT token inválido")
    }
}
