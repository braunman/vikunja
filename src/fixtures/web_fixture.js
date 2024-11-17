import { test as base , expect} from '@playwright/test';

import { WebApp } from '../app';
import {User, fileExists, saveToFile, readFromFile,} from "../helper";

export { expect } from '@playwright/test';

const REGISTRY_USER_FILE = './user.json';



export const test = base.extend({
    webApp: async ({ page }, use) => {
        const app = new WebApp(page);
        await use(app);
    },

    loginUser: async ({page}, use) => {
        const app = new WebApp(page);
        if (await fileExists(REGISTRY_USER_FILE)){
            const user = await readFromFile(REGISTRY_USER_FILE);
            await app.loginPage.open();
            await app.loginPage.loginUser(user);
            await expect(app.mainPage.loginUsername).toContainText(user.username)
        } else {
            const user = new User();
            await app.registerPage.open()
            await app.registerPage.registerUser(user)
            await expect(app.mainPage.loginUsername).toContainText(user.username)
            await saveToFile(user, REGISTRY_USER_FILE)
        }
        use(app)
    }

})




