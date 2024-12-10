import { expect, test as setup } from '../src/fixture';
import { User } from '../src/helper';
import {saveToFile} from "../src/helper";

const auth_file_name = '.auth/user.json';

setup('Create new user', async ({ webApp }) => {
    const user = new User().build()
    await webApp.registerPage.open()
    await webApp.registerPage.registerUser(user)
    await expect(webApp.mainPage.loginUsername).toContainText(user.username)
    await webApp.page.context().storageState({path: auth_file_name})
    await saveToFile(user,auth_file_name)
});