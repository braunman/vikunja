import { BasePage } from "./base.page";
import { MenuElement } from "./menu.element";
import { step } from 'allure-js-commons';
import {expect} from "@playwright/test";

export class ProjectPage extends BasePage {
    constructor(page) {
        super(page);
        this.pageUrl = "/project";
        this.newProjectButton = this.page.locator('[href="/projects/new"]');
        this.newProjectTitleInput = this.page.locator('input[name=projectTitle]');
        this.newProjectCreateButton = this.page.locator('button.is-primary');
    }

    async createNewProject(projectTitle) {
        await step(`Create new project with title ${projectTitle}`, async () => {
            await this.click( this.newProjectButton);
            await this.fill(this.newProjectTitleInput, projectTitle);
            await this.click(this.newProjectCreateButton);
        })
    }
}