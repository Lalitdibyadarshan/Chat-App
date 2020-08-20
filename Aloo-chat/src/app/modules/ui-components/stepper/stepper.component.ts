import { Component, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../sharedModule/services/form.service';

@Component({
	selector: 'app-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: [
		'./stepper.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent {

	@Input() parentForm: FormGroup;
	@Input() stepNames: string[];
	@Input() submitCallBack: () => void;

	constructor(private formService: FormService, private elRef: ElementRef) {}

	checkFormValidity() {
		this.formService.checkFormValidity(this.parentForm, this.elRef);
	}
}
