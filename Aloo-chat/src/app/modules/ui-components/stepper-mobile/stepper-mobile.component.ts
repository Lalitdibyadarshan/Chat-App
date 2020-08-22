import { Component, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../sharedModule/services/form.service';

@Component({
	selector: 'app-stepper-mobile',
	templateUrl: './stepper-mobile.component.html',
	styleUrls: ['./stepper-mobile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperMobileComponent {
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
