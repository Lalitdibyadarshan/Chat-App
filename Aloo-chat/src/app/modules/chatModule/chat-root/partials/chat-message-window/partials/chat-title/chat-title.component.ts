import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/modules/apiModule/fireBaseService/models/user.model';

@Component({
	selector: 'app-chat-title',
	templateUrl: './chat-title.component.html',
	styleUrls: [
		'./chat-title.component.scss'
	]
})
export class ChatTitleComponent implements OnInit {
	@Input() selectedUser: User;

	ngOnInit() {
	}
}
