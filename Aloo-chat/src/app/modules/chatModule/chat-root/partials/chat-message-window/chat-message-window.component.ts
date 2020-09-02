import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ChatState } from '../../store/chat.state';
import { Observable } from 'rxjs';
import { User } from 'src/app/modules/apiModule/fireBaseService/models/user.model';
import { BaseClass } from 'src/app/modules/sharedModule/base';

@Component({
	selector: 'app-chat-message-window',
	templateUrl: './chat-message-window.component.html',
	styleUrls: [
		'./chat-message-window.component.scss'
	]
})
export class ChatMessageWindowComponent extends BaseClass implements OnInit {
	@Select(ChatState.selectedUser) selectedUser$: Observable<User>;
	selectedUser: User;

	ngOnInit() {
		this.obsGC(this.selectedUser$)
			.subscribe(user => {
				this.selectedUser = user;
			});
	}
}
