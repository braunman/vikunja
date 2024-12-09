import {BaseService} from "./base.service";


export class LoginService extends BaseService {
    constructor(client) {
        super(client);
        this.url = '/login';
    }

    async login({username, password}) {
        const data = {"long_token": true,username, password };
        return await this.post(this.url, data)
    }
}
