import { BasePage } from "./base.page";
import { step } from "allure-js-commons";

export class RegistryPage extends BasePage {
    constructor(page) {
        super(page);
        this.pageUrl = "/register";
        this.usernameInput = this.page.locator("#username");
        this.emailInput = this.page.locator("#email");
        this.passwordInput = this.page.locator("#password");
        this.createAccountButton = this.page.locator("#register-submit");
    }

    async registerUser(user) {
        await step(`Register new user ${user}`, async () => {
            await this.fill(this.usernameInput, user.username);
            await this.fill(this.emailInput, user.email);
            await this.fill(this.passwordInput, user.password);
            await this.click(this.createAccountButton);
        })
    }
}