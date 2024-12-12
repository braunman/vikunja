import {step} from "allure-js-commons";
import {BaseService} from "./base.service";


export class ProjectsService extends BaseService {
    constructor(client) {
        super(client);
        this.url = '/projects';
    }
    async create(project) {
        return await step(`Create new project`, async () => {
            return await this.put(`${this.url}`, project);
        })
    }

    async getAll(){
        return await step(`Get all user projects`, async () => {
            return await this.get(this.url)
        })
    }

    async getBaseProjectID(){
        const defaultTitleName = 'Inbox'
        return await step(`Get id of main project with name ${defaultTitleName}`, async () => {
            const {data} = await this.getAll()
            for (const project of data) {
                if (project.title === defaultTitleName) {
                    return project.id
                }
            }
        })
    }
}