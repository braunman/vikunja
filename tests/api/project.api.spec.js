import { expect, test } from '../../src/fixture';
import {ProjectApi} from "../../src/helper";


test("Test create new project @API", async({api}) => {
    const project = new ProjectApi().build()
    const {data, status} = await api.project.create(project)
    await expect(status).toEqual(201)
    await expect(data).toHaveProperty('id')
    await  expect(data).toHaveProperty('title', project.title)
})


test("Test get all projects", async({api}) => {
    const project = new ProjectApi().build()
    await api.project.create(project)
    const {data, status} = await api.tasks.getAll()
    await expect(status).toEqual(200)
    await  expect(data.length).toBeGreaterThan(1)
})


