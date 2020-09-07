import { firestore } from 'firebase';

export interface RawMessageInterface {
	messageId: string;
	message: string;
	createdAt: firestore.Timestamp;
	senderId: string;
}
