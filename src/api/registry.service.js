import {step} from "allure-js-commons";
import {BaseService} from "./base.service";


export class RegistryService extends BaseService {
    constructor(client) {
        super(client);
        this.url = '/register';
    }

    async register(registerData){
        return await step(`Registry new user`, async () => {
            return await this.post(this.url, registerData)
        })
    }
}