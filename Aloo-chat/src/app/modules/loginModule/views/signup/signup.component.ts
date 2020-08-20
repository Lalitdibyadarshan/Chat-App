import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignupStepEnum } from './enums/step.enum';
import { SignupConstant } from './constants/signup.constant';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {
	signupForm: FormGroup;
	steps = SignupConstant.SIGNUP_STEPS;
	currentStep: SignupStepEnum;

	mobile = false;
	constructor(private fb: FormBuilder, @Inject('Window') private window: Window) {
	}

	ngOnInit() {
		this.createForm();
		if (this.window.innerWidth < 766) {
			this.mobile = true;
		}
	}

	private createForm() {
		this.signupForm = this.fb.group({});
	}

	submit(): void {
		console.log('here');

		// TODO auth call
		const { firstName, lastName } = this.signupForm.value;
		console.log(`name: ${firstName} ${lastName}`);
	}

	getCallback() {
		return this.submit.bind(this);
	}

}
