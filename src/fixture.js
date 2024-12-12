import {expect, test as base} from '@playwright/test';
import {WebApp} from './app';
import {ApiClient} from './api.client';
import {fileExistsAndNotOlderThanHour, saveToFile, readFromFile} from "./helper";

export { expect } from '@playwright/test';

export const test = base.extend({
    webApp: async ({ page }, use) => {
        const app = new WebApp(page);
        await use(app);
    },

    api: async ({}, use) => {
        let api;
        if (await fileExistsAndNotOlderThanHour('.auth/token.json')){
            const data = await readFromFile('.auth/token.json');
            api = new ApiClient({ headers: { 'Authorization': `${data.token}`}});
        }
        else {
            api = await ApiClient.loginAs();
            await saveToFile({token: api.token}, '.auth/token.json');
        }
        await use(api);
    }
})




