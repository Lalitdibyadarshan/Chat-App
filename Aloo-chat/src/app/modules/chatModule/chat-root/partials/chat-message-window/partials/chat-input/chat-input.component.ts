import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/modules/apiModule/fireBaseService/fire-base.service';
import { User } from 'src/app/modules/apiModule/fireBaseService/models/user.model';

@Component({
	selector: 'app-chat-input',
	templateUrl: './chat-input.component.html',
	styleUrls: [
		'./chat-input.component.scss'
	]
})
export class ChatInputComponent implements OnInit, AfterViewInit {
	@ViewChild('chatInput') chatInput: ElementRef;
	@Input() selectedUser: User;

	formGroup: FormGroup;
	controlName = 'message';

	readonly ENTER_KEY = 13;

	constructor(private fb: FormBuilder, private renderer: Renderer2, private firebaseService: FirebaseService) {}

	ngOnInit() {
		this.formGroup = this.fb.group({});
	}

	ngAfterViewInit() {
		this.renderer.listen(this.chatInput.nativeElement, 'keydown', (e) => {
			if (e.keyCode === this.ENTER_KEY) {
				this.sendMessage();
			}
		});
	}

	sendMessage(): void {
		this.firebaseService.addMessage(this.formGroup.value.message, this.selectedUser.id);
		this.formGroup.reset();
	}
}
