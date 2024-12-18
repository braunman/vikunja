import { description, feature } from "allure-js-commons";

import { expect, test } from '../../src/fixture';
import { Task } from '../../src/helper';


test('Create new task @UI @TASK @POSITIVE', async ({webApp}) => {
    await description("Try to create new task in default project")
    await feature("task")
    const taskName = new Task().build();
    await webApp.mainPage.open();
    const tasks = await webApp.mainPage.getTasksCount()
    await webApp.mainPage.addNewTask(taskName)
    await expect(webApp.mainPage.allTasks).toContainText([taskName])
    await expect(webApp.mainPage.allTasks).toHaveCount(tasks + 1)
});


test('Create new tasks and change status @UI @TASK @POSITIVE', async ({webApp}) => {
    await description("Create list of 2 tasks, including completed ones (the completed task should disappear from the list)")
    await feature("task")
    const taskName = new Task().build();
    const doneTaskName = new Task().build();
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

