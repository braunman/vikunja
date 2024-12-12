import {AxiosClient, LoginService, ProjectsService, RegisterService, TasksService,} from "./api/index";
import {UserAPI} from "./helper";


export class ApiClient{
    constructor(options) {
        const defaultOptions = {
            baseURL: "https://try.vikunja.io/api/v1",
            headers: { 'Content-Type': "application/json" }
        }
        const mergeOptions = {
            ...defaultOptions,
            ...options,
        }
        this.token = mergeOptions.headers.Authorization;
        this.client = new AxiosClient(mergeOptions);
        this.register = new RegisterService(this.client);
        this.login = new LoginService(this.client);
        this.tasks = new TasksService(this.client);
        this.project = new ProjectsService(this.client);
    }

    static async loginAs(client) {
        const apiClient = this.unauthorized(client);
        const user = new UserAPI().build()
        await apiClient.register.register(user);
        const {data} = await apiClient.login.login(user);
        return new ApiClient({ headers: { 'Authorization': `Bearer ${data.token}` } });
    }

    static unauthorized() {
        return new ApiClient();
    }
}