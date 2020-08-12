import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StepModel } from 'src/app/modules/ui-components/progress-bar/model/step.model';
import { SignupStepEnum } from './enums/step.enum';
import { SignupConstant } from './constants/signup.constant';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {
	signupForm: FormGroup;
	steps: StepModel[];
	currentStep: SignupStepEnum;

	constructor(private fb: FormBuilder) {
	}

	ngOnInit() {
		this.createSteps();
		this.createForm();
	}

	private createForm() {
		this.signupForm = this.fb.group({});
	}

	submit(): void {
		// TODO auth call
		const { firstName, lastName } = this.signupForm.value;
		console.log(`name: ${firstName} ${lastName}`);
	}

	createSteps() {
		this.currentStep = SignupStepEnum.PERSONAL_DETAILS;
		this.steps = SignupConstant.SIGNUP_STEPS.map(step => {
			return new StepModel(step, false);
		});
	}

	goToNextStep() {

	}

	goToPreviousStep() {

	}

	isFirstStep() {

	}

	isLastStep() {

	}

}
