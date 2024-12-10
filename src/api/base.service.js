import {step} from "allure-js-commons";

export class BaseService {
    constructor(client) {
        this.client = client;
    }

    async post(url, data = {}){
        return await step(`Post request to ${url}`, async () => {
            const _response = await this.client.post(url, data);
            return await this.getResponse(_response);
        });
    }

    async get(url, params= {}) {
        return await step(`Post request to ${url}`, async () => {
            const _response = await this.client.get(url, params);
            return await this.getResponse(_response);
        });
    }

    async put(url, data= {}) {
        return await step(`Put request to ${url}`, async () => {
            const _response = await this.client.put(url, data);
            return await this.getResponse(_response);
        });
    }

    async delete(url) {
        return await step(`Delete request to ${url}`, async () => {
            const _response = await this.client.delete(url);
            return await this.getResponse(_response);
        });
    }

    async getResponse(response){
        return await step(`Request: \n${response.request} \nResponse: \n${response.response}`, async () => {
            return {data: response.data, headers: response.headers, status: response.status};
        })
    }
}

