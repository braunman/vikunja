import {BaseService} from "./base.service";
import {step} from "allure-js-commons";


export class LoginService extends BaseService {
    constructor(client) {
        super(client);
        this.url = '/login';
    }

    async login({username, password}) {
        return await step(`Login as user ${username} password ${password}`, async () => {
            const data = {"long_token": true, username, password};
            return await this.post(this.url, data)
        })
    }
}
