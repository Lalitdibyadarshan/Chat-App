import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-input-email',
	templateUrl: './email.component.html'
})
export class EmailFormComponent implements OnInit {
	@Input() parentForm: FormGroup;
	@Input() controlName: string;
	@Input() required;
	@Input() initialValue = '';
	@Input() outlineAppearance = true;

	formControl: FormControl;
	appearance: string;

	ngOnInit() {
		this.appearance = this.outlineAppearance ? 'outline' : '';
		this.addFormControl();
	}

	private addFormControl(): void {
		this.formControl = new FormControl(this.initialValue);
		this.parentForm.addControl(this.controlName, this.formControl);
		this.addValidators();
	}

	private addValidators(): void {
		this.required ?
		this.formControl.setValidators([Validators.required, Validators.email]) :
		this.formControl.setValidators([Validators.email]);
	}
}
