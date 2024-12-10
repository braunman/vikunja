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

    async getBaseProjectID(){
        const defaultTitleName = 'Inbox'
        const {data} = await this.getAll()
        for (const project of data){
            if (project.title === defaultTitleName){
                return project.id
            }
        }
    }
}