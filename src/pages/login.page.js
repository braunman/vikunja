import { step } from 'allure-js-commons';

import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.pageUrl = "/login";
        this.usernameInput = this.page.locator("#username");
        this.passwordInput = this.page.locator("#password");
        this.loginButton = this.page.locator("button.is-primary");
        this.errorText = this.page.locator('.message.danger')
    }

    async loginUser(username, password) {
        await step(`Login user`, async () => {
            await this.fill(this.usernameInput, username);
            await this.fill(this.passwordInput, password);
            await this.click(this.loginButton);
        })
    }
}