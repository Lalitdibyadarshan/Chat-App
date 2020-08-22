import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _moment from 'moment';

@Component({
	selector: 'app-date-picker',
	templateUrl: './date-picker.component.html'
})
export class DatePickerComponent implements OnInit {
	@Input() parentForm: FormGroup;
	@Input() controlName: string;
	@Input() labelName: string;
	@Input() required: boolean;

	formControl: FormControl;

	ngOnInit() {
		this.addFormControl();
	}

	private addFormControl(): void {
		this.formControl = new FormControl('');
		this.parentForm.addControl(this.controlName, this.formControl);

		// TODO add validators
		this.addValidators();
	}

	private addValidators(): void {
		this.required ?
		this.formControl.setValidators([Validators.required]) :
		this.formControl.setValidators([]);
	}

}
