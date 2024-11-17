import {expect, test as base} from '@playwright/test';
import {WebApp} from '../app';

export { expect } from '@playwright/test';

export const test = base.extend({
    webApp: async ({ page }, use) => {
        const app = new WebApp(page);
        await use(app);
    }
})




