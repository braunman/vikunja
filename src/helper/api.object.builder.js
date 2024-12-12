import {faker} from "@faker-js/faker";


export class UserAPI {
    constructor({ username = null, password = null, email = null } = {}) {
        this.username = username !== null ? username : faker.internet.username().replace(/\./g, '');
        this.password = password !== null ? password : faker.internet.password(8);
        this.email = email !== null ? email : faker.internet.email();
        this.id = 0
    }

    build() {
        return {
            username: this.username,
            password: this.password,
            email: this.email,
            id: this.id,
        };
    }
}

export class TaskApi {
    constructor({ title, projectId = 1 } = {}) {
        this.title = title || faker.lorem.sentence();
        this.projectId = projectId;
        this.done = false
        this.id = 0;
    }

    setDone() {
        this.done = true;
        return this
    }
    setID(id){
        this.id = id;
        return this
    }

    build() {
        return {
            'id': this.id,
            'title': this.title,
            'description': '',
            'done': this.done,
            'project_id': this.projectId,
            'bucket_id': 0,
        };
    }
}

export class ProjectApi {
    constructor(title) {
        this.title = title || faker.lorem.word();
        this.description = faker.lorem.sentence();
    }

    build() {
        return {
            'title': this.title,
            'description': this.description,
        }
    }
}