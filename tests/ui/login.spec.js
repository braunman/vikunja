import { description, feature, tags } from "allure-js-commons";

import { expect, test } from '../../src/fixtures/web_fixture';
import { User } from '../../src/helper/user.builder';

test('Login with exist user @UA @LOGIN @POSITIVE', async ({ webApp }) => {
    description("Try to login with new register user (user with credentials demo:demo exist by default)")
    feature("login")
    const user = new User({ username: "demo", password: "demo" })
    await webApp.loginPage.open()
    await webApp.loginPage.loginUser(user)
    await expect(webApp.mainPage.loginUsername).toContainText(user.username)
});


[
    { user: new User().build(), describe: "not exist user" },
    { user: new User({ username: 'demo' }).build(), describe: "wrong password" },
].forEach(({ user, describe }) => {
    test(`Login with wrong credentials: ${describe} @UA @LOGIN @NEGATIVE`, async ({ webApp }) => {
        description("Try to login with wrong credentials")
        feature("login")
        await webApp.loginPage.open()
        await webApp.loginPage.loginUser(user)
        await expect(webApp.loginPage.errorText).toContainText('Wrong username or password.')
    });
});

