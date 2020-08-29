import { Message } from './message.model';
import { RawUsersInterface } from '../interfaces/raw-users.interfce';

export class User {
	userId: string;
	firstName: string;
	lastName: string;
	picture: string;
	isActive: boolean;
	messages: Message[];

	constructor(rawUser: RawUsersInterface) {
		this.mapUser(rawUser);
	}

	mapUser(rawUser: RawUsersInterface): void {
		this.userId = rawUser.userId;
		this.firstName = rawUser.firstName;
		this.lastName = rawUser.lastName;
		this.picture = rawUser.picture;
		this.isActive = rawUser.isActive;
		this.messages = rawUser.messages.map(message => {
			return new Message(message);
		});
	}
}
