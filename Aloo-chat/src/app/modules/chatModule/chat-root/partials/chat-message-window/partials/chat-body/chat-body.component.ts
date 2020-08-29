import { Component, Input } from '@angular/core';
import { User } from 'src/app/modules/apiModule/fireBaseService/models/user.model';

@Component({
	selector: 'app-chat-body',
	templateUrl: './chat-body.component.html',
	styleUrls: [
		'./chat-body.component.scss'
	]
})
export class ChatBodyComponent {
	@Input() selectedUser: User;
}
