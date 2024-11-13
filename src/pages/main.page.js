import { BasePage } from "./base.page";
import { step } from 'allure-js-commons';

export class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.loginUsername = this.page.locator('.username');
        this.userMenuDropdown = this.page.locator('.dropdown .dropdown-icon');
        this.menuLogoutButton = this.userMenuDropdown.getByText("Logout");
    }

    async logout() {
        await step(`Logout user`, async () => {
            await this.click(this.userMenuDropdown);
            await this.click(this.menuLogoutButton);
        })

    }
}