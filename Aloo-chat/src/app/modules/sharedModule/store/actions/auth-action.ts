import { LoginModel } from 'src/app/modules/apiModule/authService/models/login.model';
import { SignUpPayload } from 'src/app/modules/apiModule/authService/models/signUpPayload';
import { UserDetails } from 'src/app/modules/apiModule/authService/models/userDetails.model';

export class SignUpAction {
	static readonly type = '[Auth] signup action';
	constructor(public userDetails: UserDetails) {}
}

export class SignOutAction {
	static readonly type = '[Auth] sign out action';
}

export class  InitializeExistingSessionAction {
	static readonly type = '[Auth] initialize existing session action';
	constructor(public existingSessionDetails: UserDetails) {}
}
