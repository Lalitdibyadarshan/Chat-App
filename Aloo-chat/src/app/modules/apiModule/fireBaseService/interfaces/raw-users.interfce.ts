import { RawMessageInterface } from './raw-message.inteface';

export class RawUsersInterface {
	id: string;
	firstName: string;
	lastName: string;
	picture: string;
	isActive: boolean;
	messages: RawMessageInterface[];
}
