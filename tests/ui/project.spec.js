import { description, feature } from "allure-js-commons";

import { expect, test } from '../../src/fixture';
import { Project } from '../../src/helper';


test('Create new project @UI @PROJECT @POSITIVE', async ({webApp}) => {
    await description("Try to create new task in default project")
    await feature("task")
    const projectTitle =new Project().build()
    await webApp.mainPage.open();
    await webApp.mainPage.menu.goToProjects();
    await webApp.projectPage.createNewProject(projectTitle)
    await expect(webApp.mainPage.projectTitle).toContainText(projectTitle)
});
