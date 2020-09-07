import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { UsersMapper } from './mappers/users.mapper';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoaderService } from '../../sharedModule/services/loader.service';
import { map, take } from 'rxjs/operators';
import { Message } from './models/message.model';
import { Store } from '@ngxs/store';
import { AuthState } from '../../sharedModule/store/states/auth-state';
import { UserDetails } from '../authService/models/userDetails.model';
import { HttpService } from '../httpService/httpService';

@Injectable({
	providedIn: 'root'
})
export class FirebaseService extends HttpService {
	constructor(
		private userMapper: UsersMapper,
		private fireStore: AngularFirestore,
		private store: Store,
		loaderService: LoaderService,
	) {
		super(loaderService);
	}

	getAllUsers(): Observable<User[]> {
		return this.showLoader(this.fireStore.collection('users').valueChanges())
			.pipe(map((users) => {
				return users;
			})) as Observable<User[]>;
	}

	fetchChats(user: User): Observable<Message[]> {
		return this.showLoader(this.fireStore.collection(`users/${user.id}/messages`).valueChanges())
			.pipe(map((messages) => {
				return messages;
			})) as Observable<Message[]>;
	}

	addMessage(message: string, chatRoomId: string): void {
		const messageObj = {
			message,
			createdAt: new Date(),
			senderId: this.store.selectSnapshot(AuthState.logginUser).id
		} as Message;
		this.fireStore.collection(`users/${chatRoomId}/messages`).add(messageObj);
	}

	fetchUserDetails(userId: string): Observable<UserDetails> {
		return this.showLoader(this.fireStore.doc<UserDetails>(`users/${userId}`)
			.valueChanges())
			.pipe(take(1));
	}
}
