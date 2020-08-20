import { Component, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../sharedModule/services/form.service';

@Component({
	selector: 'app-stepper-mobile',
	templateUrl: './stepper-mobile.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperMobileComponent {
	@Input() parentForm: FormGroup;
	@Input() stepNames: string[];
	@Input() submitCallBack: () => void;

	constructor(private formService: FormService, private elRef: ElementRef) {}

	checkFormValidity() {
		this.formService.checkFormValidity(this.parentForm, this.elRef);
	}
}
