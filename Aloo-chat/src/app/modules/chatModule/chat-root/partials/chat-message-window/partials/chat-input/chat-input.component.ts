import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-chat-input',
	templateUrl: './chat-input.component.html',
	styleUrls: [
		'./chat-input.component.scss'
	]
})
export class ChatInputComponent implements OnInit, AfterViewInit {
	@ViewChild('chatInput') chatInput: ElementRef;

	formGroup: FormGroup;
	controlName = 'message';

	readonly ENTER_KEY = 13;

	constructor(private fb: FormBuilder, private renderer: Renderer2) {}

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
		console.log(this.formGroup.value.message);
		this.formGroup.reset();
	}
}
