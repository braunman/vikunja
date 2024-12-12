import { step } from 'allure-js-commons';

import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.pageUrl = "/login";
        this.usernameInput = this.page.locator("#username");
        this.passwordInput = this.page.locator("#password");
        this.loginButton = this.page.locator("button.is-primary");
    }

    async loginUser(user) {
        await step(`Login user ${user.username}:${user.password}`, async () => {
            await this.fill(this.usernameInput, user.username);
            await this.fill(this.passwordInput, user.password);
            await this.click(this.loginButton);
        })
    }
}