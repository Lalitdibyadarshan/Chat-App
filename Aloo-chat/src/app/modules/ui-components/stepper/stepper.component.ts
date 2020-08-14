import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: [
		'./stepper.component.scss'
	]
})
export class StepperComponent {

	@Input() parentForm: FormGroup;
	@Input() stepNames: string[];

}
