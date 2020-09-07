import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { User } from 'src/app/modules/apiModule/fireBaseService/models/user.model';
import { FirebaseService } from 'src/app/modules/apiModule/fireBaseService/fire-base.service';
import * as _ from 'lodash';
import { Message } from 'src/app/modules/apiModule/fireBaseService/models/message.model';
import { BaseClass } from 'src/app/modules/sharedModule/base';
import { Select } from '@ngxs/store';
import { UserDetails } from 'src/app/modules/apiModule/authService/models/userDetails.model';
import { AuthState } from 'src/app/modules/sharedModule/store/states/auth-state';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-chat-body',
	templateUrl: './chat-body.component.html',
	styleUrls: [
		'./chat-body.component.scss'
	]
})
export class ChatBodyComponent extends BaseClass implements OnInit, OnChanges {
	@Input() selectedUser: User;
	@Select(AuthState.logginUser) loggedInUser$: Observable<UserDetails>;

	messages: Message[];
	loggedInUser: UserDetails;
	senderIds: {name: string, id: string}[] = [];

	constructor(private firebaseService: FirebaseService) {
		super();
	}

	ngOnInit() {
		this.obsGC(this.loggedInUser$).subscribe(user => {
			this.loggedInUser = user;
		});
		this.fetchMessages();
	}

	ngOnChanges() {
		this.fetchMessages();
	}

	isMessageByLoggedinUser(message: Message): boolean {
		return this.loggedInUser && this.loggedInUser.id === message.senderId;
	}

	fetchUsername(id: string): string {
		const username = this.getUsernameFromSenderIds(id);
		if (username) {
			return username;
		} else {
			this.firebaseService.fetchUserDetails(id).subscribe(user => {
				this.senderIds.push({name: user.firstName, id: user.id});
			});
			return '';
		}

	}

	getUsernameFromSenderIds(id: string): string {
		const currentSender = this.senderIds.filter(sender => sender.id === id);
		return !_.isEmpty(currentSender) && currentSender[0].name;
	}

	private fetchMessages(): void {
		if (this.selectedUser) {
			this.obsGC(this.firebaseService.fetchChats(this.selectedUser))
				.subscribe(messages => {
					this.messages = _.chain(messages)
						.map(message => {
							message['time'] = message.createdAt.toDate();
							return message;
						})
						.sortBy((message) => message['time'])
						.value();
				});
		}
	}
}
