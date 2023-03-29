import { AddAccountRepository } from "../infra/AddAccountRepository";

export  class SignupUseCase {
  signup = async (email: string, password: string, repeatPassword: string) => {
    if (password !== repeatPassword) {
      throw new Error("Password and repeat password are not the same");
    }
    const user = await new AddAccountRepository().add(email, password);

    return user;
  };
}