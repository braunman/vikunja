import {BasePage, LoginPage, MainPage, ProjectPage, RegistryPage} from "./pages";

export class WebApp extends BasePage {
    constructor(page) {
        super(page);
        this.registerPage = new RegistryPage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.mainPage = new MainPage(this.page);
        this.projectPage = new ProjectPage(this.page);
    }
}