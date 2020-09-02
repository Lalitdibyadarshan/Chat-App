import { LoginModel } from 'src/app/modules/apiModule/authService/models/login.model';
import { SignUpPayload } from 'src/app/modules/apiModule/authService/models/signUpPayload';

export class LogInAction {
	static readonly type = '[Auth] set logged in user action';
	constructor(public loginPayload: LoginModel) {}
}

export class LogoutAction {
	static readonly type = '[Auth] clear logged in user action';
}

export class SignUpAction {
	static readonly type = '[Auth] signup action';
	constructor(public signUpPayload: SignUpPayload) {}
}
