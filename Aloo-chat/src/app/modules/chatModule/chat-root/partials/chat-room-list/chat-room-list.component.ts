import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/modules/apiModule/fireBaseService/fire-base.service';
import { User } from 'src/app/modules/apiModule/fireBaseService/models/user.model';
import { Store, Select } from '@ngxs/store';
import { SetCurrentUserAction } from '../../store/chat.action';
import { ChatState } from '../../store/chat.state';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-chat-room-list',
	templateUrl: './chat-room-list.component.html',
	styleUrls: [
		'./chat-room-list.component.scss'
	]
})
export class ChatRoomListComponent implements OnInit {
	@Select(ChatState.SelectedUser) selectedUser$: Observable<User>;
	@Input() userdata: User[];

	selectedUser: User;

	constructor(private store: Store) { }

	ngOnInit(): void {
		this.setSelectedUser(this.userdata[0]);
		this.getSelectedUser();
	}

	getSelectedUser(): void {
		this.selectedUser$
			.subscribe(user => {
				this.selectedUser = user;
			});
	}

	setSelectedUser(user: User): void {
		this.store.dispatch(new SetCurrentUserAction(user));
	}

	isCurrentUser(user: User): boolean {
		return this.selectedUser && user.userId === this.selectedUser.userId;
	}
}
