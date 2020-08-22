import { Component, Input, ChangeDetectionStrategy, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../sharedModule/services/form.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
	selector: 'app-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: [
		'./stepper.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
	}]
})
export class StepperComponent {

	@Input() parentForms: FormGroup[];
	@Input() stepNames: string[];
	@Input() submitCallBack: () => void;

	constructor(private formService: FormService, private elRef: ElementRef) {}

	checkFormValidity(stepIndex: number): void {
		this.formService.checkFormValidity(this.parentForms[stepIndex], this.elRef);
	}

	isFormsInvalid(): boolean {
		const invalidForm = this.parentForms.filter(form => form.invalid);
		return invalidForm.length > 0;
	}
}
