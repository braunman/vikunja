import { description, feature} from "allure-js-commons";

import { expect, test } from '../../src/fixture';
import {readFromFile, User} from '../../src/helper';

test.use({ storageState: { cookies: [], origins: [] } });

test('Login with exist user @UI @LOGIN @POSITIVE', async ({ webApp }) => {
    await description("Try to login with exist user")
    await feature("login")
    const user = await readFromFile('.auth/user.json')
    await webApp.loginPage.open()
    await webApp.loginPage.loginUser(user)
    await expect(webApp.mainPage.loginUsername).toContainText(user.username)
});
