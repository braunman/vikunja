import {step} from "allure-js-commons";
import {BaseService} from "./base.service";


export class RegisterService extends BaseService {
    constructor(client) {
        super(client);
        this.url = '/register';
    }

    async register(registerData){
        return await step(`Register new user`, async () => {
            return await this.post(this.url, registerData)
        })
    }
}