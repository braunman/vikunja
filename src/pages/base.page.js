import { step } from "allure-js-commons";

export class BasePage {
    constructor(page) {
        this.page = page;
        this.pageUrl = '/';
    }

    async open() {
        await step(`Open page ${process.env.baseURL}${this.pageUrl}`, async () => {
            await this.page.goto(this.pageUrl);
        })
    }

    async click(locator) {
        await step(`Click on ${locator}`, async () => {
            await locator.click();
        })
    }

    async click(locator) {
        await step(`Click on ${locator}`, async () => {
            await locator.click();
        })
    }

    async fill(locator, value) {
        await step(`Input in ${locator} text ${value}`, async () => {
            await locator.fill(`${value}`);
        })
    }
}   