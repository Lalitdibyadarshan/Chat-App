import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../apiModule/fireBaseService/fire-base.service';
import { User } from '../../apiModule/fireBaseService/models/user.model';

@Component({
	selector: 'app-chat',
	templateUrl: './chat-root.component.html',
	styleUrls: [
		'./chat-root.component.scss'
	]
})
export class ChatRootComponent implements OnInit {
	userData: User[];

	constructor(private firebaseService: FirebaseService) {}

	ngOnInit() {
		this.userData = this.firebaseService.getAllChat();
	}
}
