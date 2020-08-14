import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-input-email',
	templateUrl: './email.component.html',
	styleUrls: [
		'./email.component.scss'
	]
})
export class EmailFormComponent implements OnInit {
	@Input() formGroup: FormGroup;
	@Input() controlName: string;
	@Input() isRequired = false;

	formControl: FormControl;

	ngOnInit() {
		this.addFormControl();
	}

	private addFormControl(): void {
		this.formControl = new FormControl('');
		this.formGroup.addControl(this.controlName, this.formControl);
		this.addValidators();
	}

	private addValidators(): void {
		this.isRequired ?
		this.formControl.setValidators([Validators.required, Validators.email]) :
		this.formControl.setValidators([Validators.email]);
	}
}
