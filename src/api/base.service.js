import {step,attachment} from "allure-js-commons";

export class BaseService {
    constructor(client) {
        this.client = client;
    }

    async post(url, data = {}){
        return await step(`Post request to ${url}`, async () => {
            const _response = await this.client.post(url, data);
            return await this.getResponse(_response, url);
        });
    }

    async get(url, params= {}) {
        return await step(`Post request to ${url}`, async () => {
            const _response = await this.client.get(url, params);
            return await this.getResponse(_response, url);
        });
    }

    async put(url, data= {}) {
        return await step(`Put request to ${url}`, async () => {
            const _response = await this.client.put(url, data);
            return await this.getResponse(_response, url);
        });
    }

    async delete(url) {
        return await step(`Delete request to ${url}`, async () => {
            const _response = await this.client.delete(url);
            return await this.getResponse(_response, url);
        });
    }

    async getResponse(response, url){
        const requestDetails = {
            method: response.request.method,
            url: response.request.url,
            headers: response.request.headers,
        };

        const responseDetails = {
            data: response.data,
            headers: response.headers,
            status: response.status,
        };
        const logData = `
${url}
\n
Request:
${JSON.stringify(requestDetails, null, 2)}
\n\n
Response:
${JSON.stringify(responseDetails, null, 2)}
`;
        const attachmentName = `${url}_${requestDetails.method}.txt`;
        return await step(`Request and response data in file ${attachmentName}`, async () => {
            await attachment(attachmentName, logData, 'text/plain');
            return {data: response.data, headers: response.headers, status: response.status};
        })
    }
}

