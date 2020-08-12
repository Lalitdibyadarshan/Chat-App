import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

@Component({
	selector: 'app-input-email',
	templateUrl: './email.component.html',
	styleUrls: [
		'./email.compoent.scss'
	]
})
export class EmailComponent implements OnInit {
	@Input() formGroup: FormGroup;
	@Input() formControlName: string;
	@Input() isRequired = false;

	validators: ValidatorFn[] = [
		Validators.email
	];
	formControl: FormControl;

	ngOnInit() {
		this.addFormControl();
	}

	addFormControl(): void {
		this.formControl = new FormControl('');
		this.formGroup.addControl(this.formControlName, this.formControl);
		this.addValidators();
	}

	addValidators(): void {
		this.isRequired ?
		this.formControl.setValidators([Validators.required, Validators.email]) :
		this.formControl.setValidators([Validators.email]);
	}
}
