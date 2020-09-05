import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignupStepEnum } from './enums/step.enum';
import { SignupConstant } from './constants/signup.constant';
import { SignUpPayload } from 'src/app/modules/apiModule/authService/models/signUpPayload';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/apiModule/authService/auth.service';

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
	constructor(
		private fb: FormBuilder,
		@Inject('Window') private window: Window,
		private router: Router,
		private authService: AuthService
	) {}

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
		const invalidForm = this.signUpForms.filter(form => form.invalid);
		// TODO add lodash
		if (invalidForm.length === 0) {
			const { firstName, lastName } = this.signUpForms[0].value;
			const { email, phoneNumber } = this.signUpForms[1].value;
			const { newPassword } = this.signUpForms[2].value;

			this.authService.signup(new SignUpPayload(firstName, lastName, email, newPassword, phoneNumber))
				.subscribe(() => {
					this.router.navigateByUrl('/chat');
				});
		}
	}

	getCallback() {
		return this.submit.bind(this);
	}
}
