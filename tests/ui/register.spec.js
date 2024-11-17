import { description, feature } from "allure-js-commons";

import { expect, test } from '../../src/fixtures/web_fixture';
import { User } from '../../src/helper/user.builder';


test.use({ storageState: { cookies: [], origins: [] } });


test('Register new user @UI @REGISTER @POSITIVE', async ({ webApp }) => {
    description("Register new user")
    feature("register")
    const user = new User()
    await webApp.registerPage.open()
    await webApp.registerPage.registerUser(user)
    await expect(webApp.mainPage.loginUsername).toContainText(user.username)
});


[
    // { user: new User({ username: "demo.demo" }).build(), describe: "wrong username" },
    { user: new User({ email: 'demo' }).build(), describe: "wrong email" },
].forEach(({ user, describe }) => {
    test(`Registry with wrong data: ${describe} @UI @LOGIN @NEGATIVE`, async ({ webApp }) => {
        description("Registry with wrong data")
        feature("register")
        await webApp.registerPage.open()
        await webApp.registerPage.registerUser(user)
        await expect(webApp.registerPage.errorText).toContainText('Invalid Data')
    });
});
//
