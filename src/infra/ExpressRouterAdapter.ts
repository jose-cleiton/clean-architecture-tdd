import  {Request, Response } from "express";

export  class ExpressRouterAdapter {
  static adapt(router: any) {

    return  async (req: Request, res: Response):Promise<void> => {
      const httpRequest = {
        body: req.body,
      };
     const httResponse = await  router.route(httpRequest)
      res.status(httResponse.statusCode).json(httResponse.body);
    };
      
   
    };
  }

