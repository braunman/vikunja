import { expect, test } from '../../src/fixture';
import {TodoApi} from "../../src/helper";
import {description, feature} from "allure-js-commons";


test("Test create new task @API @TASK", async({api}) => {
    await description("Create new task by api");
    await feature("task")
    const projectID = await api.project.getBaseProjectID()
    const todo = new TodoApi({projectId: projectID}).build()
    const {data, status} = await api.tasks.create(todo)
    await expect(status).toEqual(201)
    await expect(data).toHaveProperty('id')
    await  expect(data).toHaveProperty('title', todo.title)
})

test("Test set new task to done @API @TASK", async({api}) => {
    await description("Create new task and set it done by api");
    await feature("task")
    const projectID = await api.project.getBaseProjectID()
    const todo = new TodoApi({projectId: projectID})
    const {data: createdTask, status: createdTaskStatus} = await api.tasks.create(todo.build())
    await expect(createdTaskStatus).toEqual(201)
    const updateTask = todo.setDone().setID(createdTask.id).build()
    const {data, status} = await api.tasks.update(updateTask)
    await expect(status).toEqual(200)
    await expect(data).toHaveProperty('done', true)
    await expect(data).toHaveProperty('id', createdTask.id)
})

test("Delete task @API @TASK", async({api}) => {
    await description("Create new task  and delete it by api");
    await feature("task")
    const projectID = await api.project.getBaseProjectID()
    const todo = new TodoApi({projectId: projectID}).build()
    const {data: create} = await api.tasks.create(todo)
    const {data, status} = await api.tasks.deleteByID(create.id)
    await expect(status).toEqual(200)
    await expect(data).toHaveProperty('message', 'Successfully deleted.')
})

test("Test get all tasks @API @TASK", async({api}) => {
    await description("Get all exist tasks by api");
    await feature("task")
    const projectID = await api.project.getBaseProjectID()
    const todo = new TodoApi({projectId: projectID}).build()
    await api.tasks.create(todo)
    const {data, status} = await api.tasks.getAll()
    await expect(status).toEqual(200)
    await expect(data.length).toBeGreaterThanOrEqual(1)
})



