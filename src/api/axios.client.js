import axios from "axios";

export class AxiosClient {
    constructor(options) {
        this.client = axios.create({
            baseURL: options.baseURL,
            headers: options.headers,
            validateStatus: function (status) {
                return true;
            }
        });

    }

    async get(url, params = {}) {
        return  await this.client.get(url, params);
    }

    async post(url, data = {}) {
        return await this.client.post(url, data);
    }

    async put(url, data = {}) {
        return await this.client.put(url, data);
    }

    async delete(url) {
        return await this.client.delete(url);
    }
}