import { expect, test } from '../../src/fixture';
import {ApiClient} from "../../src/api.client";
import {UserAPI} from "../../src/helper";
import {description, feature} from "allure-js-commons";


test("Test registry new user @API @LOGIN", async({}) => {
    await description("Registry new user  by api")
    await feature("registry")
    const userData = new UserAPI().build();
    const api = new ApiClient()
    const {data, status} = await api.register.register(userData)
    await  expect(status).toEqual(200)
    await  expect(data).toHaveProperty('email', userData.email)
    await  expect(data).toHaveProperty('username', userData.username)
})


test("Test get auth key @API @LOGIN", async({}) => {
    await description("Check API token for user")
    await feature("login")
    const userData = new UserAPI().build();
    const api = new ApiClient()
    await api.register.register(userData)
    const {data, status}= await api.login.login(userData)
    await expect(status).toEqual(200)
    await expect(data).toHaveProperty('token')
})



