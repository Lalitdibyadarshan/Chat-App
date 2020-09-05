import { Injectable } from '@angular/core';
import { UserDetails } from './models/userDetails.model';
import { Observable, of, from, Subject } from 'rxjs';
import { LoginModel } from './models/login.model';
import { SignUpPayload } from './models/signUpPayload';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore/public_api';
import { map, catchError, take, tap } from 'rxjs/operators';
import { AlertService } from '../../sharedModule/services/alert.service';
import { Alert } from '../../sharedModule/models/alert.model';
import { AlertType } from '../../sharedModule/enums/alert-type.enum';
import { Store } from '@ngxs/store';
import { InitializeExistingSessionAction, SignUpAction, SignOutAction } from '../../sharedModule/store/actions/auth-action';
import { Router } from '@angular/router';
import { LoaderService } from '../../sharedModule/services/loader.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private fireAuth: AngularFireAuth,
		private firestore: AngularFirestore,
		private loaderService: LoaderService,
		private alertService: AlertService,
		private store: Store,
		private router: Router
	) { }

	login(loginPayload: LoginModel): Observable<firebase.User> {
		this.loaderService.setLoader(true);
		return from(this.fireAuth.signInWithEmailAndPassword(loginPayload.email, loginPayload.password))
			.pipe(
				map(user => {
					this.loaderService.setLoader(false);
					const userDetails = {} as UserDetails;
					this.store.dispatch(new SignUpAction(userDetails));
					return user.user;
				}),
				catchError(err => {
					this.alertService.addAlert(new Alert('Invalid Email or Password. Please try again', AlertType.ERROR));
					throw err;
				})
			);
	}

	signup(signUpPayload: SignUpPayload): Observable<UserDetails> {
		this.loaderService.setLoader(true);
		return from(this.fireAuth.createUserWithEmailAndPassword(signUpPayload.email, signUpPayload.password))
			.pipe(
				map(res => {
					this.loaderService.setLoader(false);
					const userRef: AngularFirestoreDocument<UserDetails> = this.firestore.doc(`users/${res.user.uid}`);
					const updateUser: UserDetails = {
						id: res.user.uid,
						email: res.user.email,
						firstName: signUpPayload.firstName,
						lastName: signUpPayload.lastName,
						// tslint:disable-next-line: max-line-length
						picture: 'https://firebasestorage.googleapis.com/v0/b/friday-7f374.appspot.com/o/profile.png?alt=media&token=0d4d5303-aebf-430f-b18d-7c408abd2e91'
					};
					if (signUpPayload.mobileNumber) { updateUser.mobileNumber = signUpPayload.mobileNumber; }
					userRef.set(updateUser);
					this.store.dispatch(new SignUpAction(updateUser));
					return updateUser;
				}),
				catchError(err => {
					this.alertService.addAlert(new Alert('Some error occured. Please try again', AlertType.ERROR));
					throw err;
				})
			);
	}

	initializeExistingSession(): void {
		this.fireAuth.authState
			.pipe(take(1))
			.subscribe(user => {
				if (user) {
					this.firestore.doc<UserDetails>(`users/${user.uid}`)
						.valueChanges()
						.pipe(take(1))
						.subscribe(userdetails => {
							sessionStorage.setItem('existingSession', 'true');
							this.store.dispatch(new InitializeExistingSessionAction(userdetails));
							this.router.navigateByUrl('/chat');
						});
				}
			});
	}

	logout() {
		this.loaderService.setLoader(true);
		this.fireAuth.signOut().then(() => {
			this.loaderService.setLoader(false);
			this.store.dispatch(new SignOutAction());
			this.router.navigateByUrl('/auth');
			sessionStorage.removeItem('existingSession');
		});
	}
}
