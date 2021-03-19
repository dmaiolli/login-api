import { getRepository } from "typeorm";
import User from "../models/User";

import { hash } from 'bcryptjs';

interface Request {
  name: string;
  email: string;
  password: string;
}
class CreateUserController{
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);
    const MIN_SIZE_PASSWORD = 8

    const userAlreadyExists = usersRepository.findOne({
      email,
    })

    if (!userAlreadyExists) {
      throw new Error("Usuário ja existe");
    }

    if (password.trim() == '' || password.length < MIN_SIZE_PASSWORD) {
      throw new Error("A senha precisa ter 8 caracteres ou mais")
    }

    const passwordHashed = await hash(password, 10);

    const user = usersRepository.create({
      name,
      email,
      password: passwordHashed,
    })

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserController;
