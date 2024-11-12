import { BasePage, LoginPage, RegistryPage } from "./pages";

export class WebApp extends BasePage {
    constructor(page) {
        super(page);
        this.registerPage = new RegistryPage(this.page);
        this.loginPage = new LoginPage(this.page);
    }
}