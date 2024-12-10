import {BaseService} from "./base.service";


export class TasksService extends BaseService {
    constructor(client) {
        super(client);
        this.url = '/tasks';
    }

    async getAll(){
        return await this.get(`${this.url}/all`);
    }

    async create(taskApi){
        const projectId = taskApi['project_id'];
        return await this.put(`/projects/${projectId}/tasks`, taskApi);
    }

    async deleteByID(id){
        return await this.delete(`${this.url}/${id}`);
    }

    async update(data){
        return await this.post(`${this.url}/${data.id}`, data);
    }

    async getById(id){
        return await this.get(`${this.url}/${id}`);
    }
}