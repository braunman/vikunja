import { description, feature} from "allure-js-commons";

import { expect, test } from '../../src/fixtures/web_fixture';
import {readFromFile, User} from '../../src/helper';

test.use({ storageState: { cookies: [], origins: [] } });

test('Login with exist user @UI @LOGIN @POSITIVE', async ({ webApp }) => {
    await description("Try to login with new register user (user with credentials demo:demo exist by default)")
    await feature("login")
    const user = await readFromFile('.auth/user.json')
    console.log(user)
    await webApp.loginPage.open()
    await webApp.loginPage.loginUser(user)
    await expect(webApp.mainPage.loginUsername).toContainText(user.username)
});


[
    { user: new User().build(), describe: "not exist user" },
    { user: new User({ username: 'demo' }).build(), describe: "wrong password" },
].forEach(({ user, describe }) => {
    test(`Login with wrong credentials: ${describe} @UI @LOGIN @NEGATIVE`, async ({ webApp }) => {
        description("Try to login with wrong credentials")
        feature("login")
        await webApp.loginPage.open()
        await webApp.loginPage.loginUser(user)
        await expect(webApp.loginPage.errorText).toContainText('Wrong username or password.')
    });
});

