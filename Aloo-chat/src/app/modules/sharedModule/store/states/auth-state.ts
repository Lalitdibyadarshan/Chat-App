import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserDetails } from 'src/app/modules/apiModule/authService/models/userDetails.model';
import { LogInAction, LogoutAction, SignUpAction } from '../actions/auth-action';
import { AuthService } from 'src/app/modules/apiModule/authService/auth.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface AuthStateInterface {
	loggedInUser: UserDetails;
	isloggedIn: boolean;
}

@State<AuthStateInterface>({
	name: 'auth',
	defaults: {
		loggedInUser: null,
		isloggedIn: false
	}
})
@Injectable()
export class AuthState {

	constructor(private authService: AuthService) {}

	@Selector()
	static logginUser(state: AuthStateInterface): UserDetails {
		return state.loggedInUser;
	}

	@Selector()
	static isLoggedIn(state: AuthStateInterface): boolean {
		return state.isloggedIn;
	}

	@Action(LogInAction)
	setLoggedinUser(ctx: StateContext<AuthStateInterface>, action: LogInAction): Observable<UserDetails> {
		return this.authService.login(action.loginPayload).pipe(
			tap((userDetails: UserDetails) => {
				ctx.patchState({
					loggedInUser: userDetails,
					isloggedIn: true
				});
			})
		);
	}

	@Action(LogoutAction)
	logoutUser(ctx: StateContext<AuthStateInterface>): Observable<boolean> {
		return this.authService.logout().pipe(
			tap(() => {
				ctx.patchState({
					loggedInUser: null,
					isloggedIn: false
				});
			})
		);
	}

	@Action(SignUpAction)
	signUpUser(ctx: StateContext<AuthStateInterface>, action: SignUpAction) {
		return this.authService.signup(action.signUpPayload).pipe(
			tap((userDetails: UserDetails) => {
				ctx.patchState({
					loggedInUser: userDetails,
					isloggedIn: true
				});
			})
		);
	}
}
