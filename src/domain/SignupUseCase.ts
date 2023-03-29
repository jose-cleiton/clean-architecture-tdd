import { AddAccountRepository } from "../infra/AddAccountRepository";

export  class SignupUseCase {
  signup = async (email: string, password: string, repeatPassword: string) => {
    if (password === repeatPassword) {
      const user = await new AddAccountRepository().add(email, password);

      return user;
    }
  };
}