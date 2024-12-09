import axios from "axios";

export class AxiosClient {
    constructor(options) {
        this.client = axios.create({
            baseURL: options.baseURL,
            headers: options.headers,
        });

    }

    async get(url, params = {}) {
        return  await this.client.get(url, params);
    }

    async post(url, data = {}) {
        return await this.client.post(url, data,{  validateStatus: function (status) {return true;}});
    }

    async put(url, data = {}) {
        return await this.client.put(url, data,{  validateStatus: function (status) {return true;}});
    }

    async delete(url) {
        return await this.client.delete(url,{  validateStatus: function (status) {return true;}});
    }
}