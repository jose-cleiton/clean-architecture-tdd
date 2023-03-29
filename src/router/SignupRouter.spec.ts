import { SignupRouter } from "./SignupRouter";

describe("SignupRouter", () => {
  it("should return a customHttpResponse with statusCode 200 and user object", async () => {

    const user = {
      email: "test@test.com",
      password: "password",
      repeatPassword: "password",
    }
    const httpRequest = {
      body: user,
    };

    const expectedHttpResponse = {
      statusCode: 200,
      body: {...user, repeatPassword: undefined},
    };

    const signupRouter = new SignupRouter();
    const httpResponse = await signupRouter.route(httpRequest);

    expect(httpResponse).toEqual(expectedHttpResponse);

    expect(httpResponse.statusCode).toEqual(expectedHttpResponse.statusCode);
    expect(httpResponse.body).toEqual(expectedHttpResponse.body);

    
  });
});