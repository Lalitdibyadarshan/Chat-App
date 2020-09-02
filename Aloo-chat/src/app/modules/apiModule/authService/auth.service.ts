import { Injectable } from '@angular/core';
import { UserDetails } from './models/userDetails.model';
import { Observable, of } from 'rxjs';
import { LoginModel } from './models/login.model';
import { SignUpPayload } from './models/signUpPayload';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor() {}

	login(loginPayload: LoginModel): Observable<UserDetails> {
		return of({firstName: 'Test'} as UserDetails);
	}

	signup(signUpPayload: SignUpPayload): Observable<UserDetails> {
		return of(signUpPayload);
	}

	logout() {
		return of(true);
	}
}
