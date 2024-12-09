import {BaseService} from "./base.service";


export class TasksService extends BaseService {
    constructor(client) {
        super(client);
        this.url = '/tasks';
    }

    async getAll(){
        return await this.get(`${this.url}/all`);
    }

    async createTask(taskApi){
        const projectId = taskApi['project_id'];
        return await this.put(`/projects/${projectId}/tasks`, taskApi);
    }

    async getTaskById(id){
        return await this.get(`${this.url}/${id}`);
    }
}