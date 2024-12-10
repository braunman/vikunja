import { expect, test } from '../../src/fixture';
import {ApiClient} from "../../src/api.client";
import {UserAPI} from "../../src/helper";


test("Test registry new user @API", async({}) => {
    const userData = new UserAPI().build();
    const api = new ApiClient()
    const {data, status} = await api.register.register(userData)
    await  expect(status).toEqual(200)
    await  expect(data).toHaveProperty('email', userData.email)
    await  expect(data).toHaveProperty('username', userData.username)
})


test("Test get auth key @API", async({}) => {
    const userData = new UserAPI().build();
    const api = new ApiClient()
    await api.register.register(userData)
    const {data, status}= await api.login.login(userData)
    await expect(status).toEqual(200)
    await expect(data).toHaveProperty('token')
})



