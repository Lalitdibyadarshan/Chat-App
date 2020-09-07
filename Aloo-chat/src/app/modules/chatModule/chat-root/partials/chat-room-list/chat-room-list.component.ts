import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FirebaseService } from 'src/app/modules/apiModule/fireBaseService/fire-base.service';
import { User } from 'src/app/modules/apiModule/fireBaseService/models/user.model';
import { Store, Select } from '@ngxs/store';
import { SetCurrentUserAction } from '../../store/chat.action';
import { ChatState } from '../../store/chat.state';
import { Observable } from 'rxjs';
import { BaseClass } from 'src/app/modules/sharedModule/base';

@Component({
	selector: 'app-chat-room-list',
	templateUrl: './chat-room-list.component.html',
	styleUrls: [
		'./chat-room-list.component.scss'
	]
})
export class ChatRoomListComponent extends BaseClass implements OnInit, OnChanges {
	@Select(ChatState.selectedUser) selectedUser$: Observable<User>;
	@Input() userdata: User[];

	selectedUser: User;

	constructor(private store: Store) {
		super();
	}

	ngOnInit(): void {
		if (this.userdata) {
			this.setSelectedUser(this.userdata[0]);
		}
		this.getSelectedUser();
	}

	ngOnChanges(): void {
		if (this.userdata) {
			this.setSelectedUser(this.userdata[0]);
		}
	}

	getSelectedUser(): void {
		this.obsGC(this.selectedUser$)
			.subscribe(user => {
				this.selectedUser = user;
			});
	}

	setSelectedUser(user: User): void {
		this.store.dispatch(new SetCurrentUserAction(user));
	}

	isCurrentUser(user: User): boolean {
		return this.selectedUser && user.id === this.selectedUser.id;
	}
}
