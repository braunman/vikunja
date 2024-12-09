import {BasePage} from "./base.page";


export class  MenuElement extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.projectLink = this.page.locator('a[href="/projects"]')
    }

    async goToProjects() {
        await this.click(this.projectLink);
    }
}