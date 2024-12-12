import {BaseService} from "./base.service";
import {step} from "allure-js-commons";


export class TasksService extends BaseService {
    constructor(client) {
        super(client);
        this.url = '/tasks';
    }

    async getAll(){
        return await step(`Get all tasks`, async () => {
            return await this.get(`${this.url}/all`);
        })
    }

    async create(taskApi){
        return await step(`Create new task`, async () => {
            const projectId = taskApi['project_id'];
            return await this.put(`/projects/${projectId}/tasks`, taskApi);
        })
    }

    async deleteByID(id){
        return await step(`Delete task with id ${id}`, async () => {
            return await this.delete(`${this.url}/${id}`);
        })
    }

    async update(data){
        return await step(`Update task with id ${data.id}`, async () => {
            return await this.post(`${this.url}/${data.id}`, data);
        })
    }
}