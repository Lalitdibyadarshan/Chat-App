import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-stepper-mobile',
	templateUrl: './stepper-mobile.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperMobileComponent {
	@Input() parentForm: FormGroup;
	@Input() stepNames: string[];
	@Input() submitCallBack: () => void;

}
