import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StepModel } from 'src/app/modules/ui-components/progress-bar/model/step.model';
import { SignupStepEnum } from './enums/step.enum';

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
    const {firstName, lastName} = this.signupForm.value;
    console.log(`name: ${firstName} ${lastName}`);
  }

  createSteps() {
    this.currentStep = SignupStepEnum.PERSONAL_DETAILS;
    this.steps = [new StepModel(this.currentStep, true)];
    [SignupStepEnum.CONTACT, SignupStepEnum.ADDRESS, SignupStepEnum.PASSWORD].forEach(step => {
      this.steps.push(new StepModel(step, false));
    });
  }

}
