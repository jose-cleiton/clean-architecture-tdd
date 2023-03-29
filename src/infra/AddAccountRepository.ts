
export class AddAccountRepository {
  private AccountModel: any[] = [];
  add = async (email: string, password: string) => {
    const AccountModel = {
      email,
      password,
    };

    this.AccountModel.push(AccountModel);
    

    return AccountModel;
  };
}

