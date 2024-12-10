import { description, feature } from "allure-js-commons";

import { expect, test } from '../../src/fixture';
import { Todo } from '../../src/helper';


test('Create new project @UI @PROJECT @POSITIVE', async ({webApp}) => {
    await description("Try to create new task in default project")
    await feature("todo")
    const projectTitle = "WORK"
    await webApp.mainPage.open();
    await webApp.mainPage.menu.goToProjects();
    await webApp.projectPage.createNewProject(projectTitle)
    await expect(webApp.mainPage.projectTitle).toContainText(projectTitle)
});
