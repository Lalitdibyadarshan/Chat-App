import { User } from './user.model';
import { RawMessageInterface } from '../interfaces/raw-message.inteface';
import { firestore } from 'firebase';

export class Message {
	messageId: string;
	message: string;
	createdAt: firestore.Timestamp | Date;
	senderId: string;

	constructor(rawMessage: RawMessageInterface) {
		this.mapMessage(rawMessage);
	}

	mapMessage(rawMessage: RawMessageInterface) {
		this.messageId = rawMessage.messageId;
		this.message = rawMessage.message;
		this.createdAt = rawMessage.createdAt;
		this.senderId = rawMessage.senderId;
	}
}
