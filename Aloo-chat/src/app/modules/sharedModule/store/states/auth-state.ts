import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserDetails } from 'src/app/modules/apiModule/authService/models/userDetails.model';
import { SignUpAction, InitializeExistingSessionAction, SignOutAction } from '../actions/auth-action';
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


	@Selector()
	static logginUser(state: AuthStateInterface): UserDetails {
		return state.loggedInUser;
	}

	@Selector()
	static isLoggedIn(state: AuthStateInterface): boolean {
		return state.isloggedIn;
	}

	@Action(SignUpAction)
	signUpUser(ctx: StateContext<AuthStateInterface>, action: SignUpAction) {
		ctx.patchState({
			loggedInUser: action.userDetails,
			isloggedIn: true
		});
		console.log(action.userDetails)
	}

	@Action(SignOutAction)
	signoutUser(ctx: StateContext<AuthStateInterface>) {
		ctx.patchState({
			loggedInUser: null,
			isloggedIn: false
		});
	}

	@Action(InitializeExistingSessionAction)
	initializeExistingSession(ctx: StateContext<AuthStateInterface>, action: InitializeExistingSessionAction) {
		ctx.patchState({
			loggedInUser: action.existingSessionDetails,
			isloggedIn: true
		});
		console.log(action.existingSessionDetails)
	}
}
