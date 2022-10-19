import Controller from "interfaces/controller.interface";
import * as express from 'express';


class AccountController implements Controller {

    public router = express.Router();
    public path = '/account';
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router
            .get(this.path + '/detail' + '/:_id', this.detail)
    }

    private detail = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        return response.send();
    }
}
export default AccountController;