import { faker } from '@faker-js/faker';

export class User {
    constructor({ username = null, password = null, email = null } = {}) {
        this.username = username !== null ? username : faker.internet.username().replace(/\./g, '');
        this.password = password !== null ? password : faker.internet.password(8);
        this.email = email !== null ? email : faker.internet.email();
    }

    build() {
        return {
            username: this.username,
            password: this.password,
            email: this.email,
        };
    }
}