import {BaseService} from "./base.service";


export class ProjectsService extends BaseService {
    constructor(client) {
        super(client);
        this.url = '/projects';
    }
    async create(project) {
        return await this.put(`${this.url}`, project);
    }

    async getAll(){
        return await this.get(this.url)
    }
}