import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignupStepEnum } from './enums/step.enum';
import { SignupConstant } from './constants/signup.constant';
import { FormControlEnum } from './enums/form-control.enum';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {
	signUpForms: FormGroup[];
	personalDetailsForm: FormGroup;
	contactDetailsForm: FormGroup;
	passwordForm: FormGroup;
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
		this.signUpForms = this.steps.map(step => {
			return this.fb.group({});
		});
	}

	submit(): void {
		// TODO auth call
		const { firstName, lastName } = this.signUpForms[0].value;
		const { email, phoneNumber } = this.signUpForms[1].value;
		const { newPassword } = this.signUpForms[2].value;
		console.log(`name: ${firstName} ${lastName}
		email: ${email}
		phone: ${phoneNumber}
		password: ${newPassword}`);
	}

	getCallback() {
		return this.submit.bind(this);
	}
}
