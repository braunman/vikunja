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

export class TodoApi {
    constructor({ title, projectId = 1 } = {}) {
        this.title = title || faker.lorem.sentence();
        this.projectId = projectId;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    setProjectId(projectId) {
        this.projectId = projectId;
        return this
    }

    build() {
        return {
            'max_right': null,
            'id': 0,
            'title': this.title,
            'description': '',
            'done': false,
            'done_at': null,
            'priority': 0,
            'labels': [],
            'assignees': [],
            'due_date': null,
            'start_date': null,
            'end_date': null,
            'repeat_after': 0,
            'repeat_from_current_date': false,
            'repeat_mode': 0,
            'reminders': [],
            'parent_task_id': 0,
            'hex_color': '',
            'percent_done': 0,
            'related_tasks': {},
            'attachments': [],
            'cover_image_attachment_id': null,
            'identifier': '',
            'index': 0,
            'is_favorite': false,
            'subscription': null,
            'position': 0,
            'reactions': {},
            'created_by': {
                'max_right': null,
                'id': 0,
                'email': '',
                'username': '',
                'name': '',
                'exp': 0,
                'type': 0,
                'created': null,
                'updated': null,
                'settings': {
                    'max_right': null,
                    'name': '',
                    'email_reminders_enabled': true,
                    'discoverable_by_name': false,
                    'discoverable_by_email': false,
                    'overdue_tasks_reminders_enabled': true,
                    'week_start': 0,
                    'timezone': '',
                    'language': 'ru-RU',
                    'frontend_settings': {
                        'play_sound_when_done': true,
                        'quick_add_magic_mode': 'vikunja',
                        'color_schema': 'auto',
                        'default_view': 'first'
                    }
                }
            },
            'created': '1970-01-01T00:00:00.000Z',
            'updated': '1970-01-01T00:00:00.000Z',
            'project_id': this.projectId,
            'bucket_id': 0,
            'reminder_dates': null
        };
    }
}

export class ProjectApi {
    constructor(title) {
        this.title = title || faker.lorem.sentence();
    }

    build() {
        return {
            'max_right': null,
            'id': 0,
            'title': this.title,
            'description': '',
            'owner': {
                'max_right': null,
                'id': 0,
                'email': '',
                'username': '',
                'name': '',
                'exp': 0,
                'type': 0,
                'created': null,
                'updated': null,
                'settings': {
                    'max_right': null,
                    'name': '',
                    'email_reminders_enabled': true,
                    'discoverable_by_name': false,
                    'discoverable_by_email': false,
                    'overdue_tasks_reminders_enabled': true,
                    'week_start': 0,
                    'timezone': '',
                    'language': 'en-US',
                    'frontend_settings': {
                        'play_sound_when_done': true,
                        'quick_add_magic_mode': 'vikunja',
                        'color_schema': 'auto',
                        'default_view': 'first'
                    }
                }
            }
        }
    }
}