import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { UsersMapper } from './mappers/users.mapper';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { LoaderService } from '../../sharedModule/services/loader.service';
import { map, take, finalize } from 'rxjs/operators';
import { Message } from './models/message.model';
import { Store } from '@ngxs/store';
import { AuthState } from '../../sharedModule/store/states/auth-state';
import { UserDetails } from '../authService/models/userDetails.model';
import { HttpService } from '../httpService/httpService';
import { AngularFireStorage } from '@angular/fire/storage';
import { UpdateProfileAction } from '../../sharedModule/store/actions/auth-action';
import { AlertService } from '../../sharedModule/services/alert.service';
import { Alert } from '../../sharedModule/models/alert.model';
import { AlertType } from '../../sharedModule/enums/alert-type.enum';

@Injectable({
	providedIn: 'root'
})
export class FirebaseService extends HttpService {
	constructor(
		private userMapper: UsersMapper,
		private fireStore: AngularFirestore,
		private storage: AngularFireStorage,
		private store: Store,
		loaderService: LoaderService,
		private alertService: AlertService
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

	updateUserDetails(userDetails: UserDetails) {
		const userRef: AngularFirestoreDocument<UserDetails> = this.fireStore.doc(`users/${userDetails.id}`);
		userRef.set(userDetails);
		this.store.dispatch(new UpdateProfileAction(userDetails));
	}

	uploadImage(data: any): Subject<string> {
		const subject = new Subject<string>();
		const filePath = `images/img_${new Date().getTime()}`;
		const fileRef = this.storage.ref(filePath);
		this.loaderService.showLoader();
		this.storage.upload(filePath, data)
			.snapshotChanges()
			.pipe(
				finalize(() => {
					this.loaderService.hideLoader();
					fileRef.getDownloadURL()
						.pipe(take(1))
						.subscribe((url) => subject.next(url));
					this.alertService.addAlert(new Alert('Uploaded successfully', AlertType.SUCCESS));
				})
			).subscribe();
		return subject;
	}
}
