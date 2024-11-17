import { description, feature, tags } from "allure-js-commons";

import { expect, test } from '../../src/fixtures/web_fixture';
import { User, Todo } from '../../src/helper';

test('Create new task @UI @TODO @POSITIVE', async ({ loginUser, webApp }) => {
    description("Try to create new task in default project")
    feature("todo")
    await loginUser;
    const taskName = new Todo().build();
    await webApp.mainPage.open();
    const tasks = await webApp.mainPage.getTasksCount()
    console.log(`COUNT  -> ${tasks}`)
    await webApp.mainPage.addNewTask(taskName)
    await expect(webApp.mainPage.allTasks).toContainText([taskName])
    await expect(webApp.mainPage.allTasks).toHaveCount(tasks + 1)
});


test('Create new tasks and change status @UI @TODO @POSITIVE', async ({ loginUser, webApp  }) => {
    description("Create list of 2 tasks, including completed ones (the completed task should disappear from the list)")
    feature("todo")
    await loginUser;
    const taskName = new Todo().build();
    const doneTaskName = new Todo().build();
    await webApp.mainPage.open();
    const tasks = await webApp.mainPage.getTasksCount()
    await webApp.mainPage.addNewTask(taskName);
    await webApp.mainPage.addNewTask(doneTaskName);
    await expect(webApp.mainPage.allTasks).toContainText([doneTaskName, taskName]);
    await expect(webApp.mainPage.allTasks).toHaveCount(tasks + 2)
    await webApp.mainPage.setTaskAsDone(doneTaskName);
    await expect(webApp.mainPage.allTasks).toContainText([taskName])
    await expect(webApp.mainPage.allTasks).toHaveCount(tasks + 1)
});
