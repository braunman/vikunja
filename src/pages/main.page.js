import { BasePage } from "./base.page";
import { MenuElement } from "./menu.element";
import { step } from 'allure-js-commons';
import {expect} from "@playwright/test";

export class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.loginUsername = this.page.locator('.username');
        this.userMenuDropdown = this.page.locator('.dropdown .dropdown-icon');
        this.menuLogoutButton = this.page.getByText("Logout");
        this.menu = new MenuElement(this.page);
        this.addNewTaskButton = this.page.locator(".add-task-button");
        this.netTaskInput = this.page.locator('.add-task-textarea');
        this.allTasks = this.page.locator('.task')
        this.projectTitle = this.page.locator('.project-title');
    }

    async open(){
        await super.open(this.userMenuDropdown)
    }

    async logout() {
        await step(`Logout user`, async () => {
            await this.click(this.userMenuDropdown);
            await this.click(this.menuLogoutButton);
        })
    }


    async addNewTask(task) {
        await step(`Add new task with ${task}`, async () => {
            await this.fill(this.netTaskInput, task);
            await this.click(this.addNewTaskButton);
        })
    }

    async setTaskAsDone(task) {
        await step(`Set task ${task} as done`, async () => {
            const doneCheckbox = await this.page.locator('.task').filter({ hasText: task }).locator('.base-checkbox__label')
            await this.click(doneCheckbox)
        })
    }

    async getTasksCount(){
        return await step(`Get tasks count`, async () => {
            try{
                await expect(this.allTasks.first()).toBeVisible({timeout: 2000});
                return await this.allTasks.count()
            } catch (e){
                return 0
            }

        })

    }
}