
import { SignupUseCase } from "../domain/SignupUseCase";
interface HttpRequest { 
  body: {
    email: string;
    password: string;
    repeatPassword: string;
  };
}


  
interface HttpResponse { 
  statusCode: number;
  body: any;
}

export class SignupRouter {
  route = async (httpRequest:HttpRequest):Promise<HttpResponse> => {
    const { email, password, repeatPassword } = httpRequest.body;
    const user = await new SignupUseCase().signup(
      email,
      password,
      repeatPassword
    );

    const customHttpResponse:HttpResponse = {
      statusCode: 200,
      body: user,
    };

    
    return customHttpResponse;
  };
}