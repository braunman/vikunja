import { description, feature } from "allure-js-commons";

import { expect, test } from '../../src/fixture';
import { User } from '../../src/helper';


test.use({ storageState: { cookies: [], origins: [] } });


test('Register new user @UI @REGISTER @POSITIVE', async ({ webApp }) => {
    await description("Register new user")
    await feature("registry")
    const user = new User()
    await webApp.registerPage.open()
    await webApp.registerPage.registerUser(user)
    await expect(webApp.mainPage.loginUsername).toContainText(user.username)
});
