import express from "express";
import { ExpressRouterAdapter } from "./infra/ExpressRouterAdapter";
import { SignupRouter } from "./router/SignupRouter";

export class App {
  private app: express.Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 3000;
    this.app.use(express.json());
    this.app.use(express.static('public'));

  }

  public start(): void {
    const router = new SignupRouter();
    console.log(router);
    
    this.app.post("/signup", ExpressRouterAdapter.adapt(router));
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}