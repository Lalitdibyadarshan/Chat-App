import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from 'src/app/modules/apiModule/fireBaseService/models/user.model';
import { SetCurrentUserAction } from './chat.action';


export interface ChatStateModel {
	selectedUser: User;
}

@State<ChatStateModel>({
  name: 'chat',
  defaults: {
	  selectedUser: null
  }
})
@Injectable()
export class ChatState {

	@Selector()
	static SelectedUser(state: ChatStateModel): User {
	  return state.selectedUser;
	}

	@Action(SetCurrentUserAction)
	setCurrentUser(ctx: StateContext<ChatStateModel>, action: SetCurrentUserAction) {
		const state = ctx.getState();
		ctx.patchState({
			selectedUser: action.user
		});
	}
}
