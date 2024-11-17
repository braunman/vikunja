import { faker } from '@faker-js/faker';

export class Todo {
    build() {
        return faker.lorem.sentence();
    }
}