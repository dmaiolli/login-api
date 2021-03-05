import { getRepository } from "typeorm";
import User from "../models/User";

interface Request {
  name: string;
  email: string;
  password: string;
}


class CreateUserController{
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const userAlreadyExists = usersRepository.findOne({
      email,
    })

    if (!userAlreadyExists) {
      throw new Error("user already exists");
    }

    const user = usersRepository.create({
      name,
      email,
      password
    })

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserController;
