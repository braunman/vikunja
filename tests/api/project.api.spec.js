import { expect, test } from '../../src/fixture';
import {ProjectApi} from "../../src/helper";
import {description, feature} from "allure-js-commons";


test("Test create new project @API @PROJECT", async({api}) => {
    await description("Create new project by api")
    await feature("project")
    const project = new ProjectApi().build()
    const {data, status} = await api.project.create(project)
    await expect(status).toEqual(201)
    await expect(data).toHaveProperty('id')
    await  expect(data).toHaveProperty('title', project.title)
})


test("Test get all projects @API @PROJECT", async({api}) => {
    await description("Get all exist project by api")
    await feature("project")
    const project = new ProjectApi().build()
    await api.project.create(project)
    const {data, status} = await api.tasks.getAll()
    await expect(status).toEqual(200)
    await  expect(data.length).toBeGreaterThan(1)
})


