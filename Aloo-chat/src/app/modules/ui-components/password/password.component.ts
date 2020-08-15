import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-input-password',
	templateUrl: './password.component.html'
})
export class PasswordFormComponent implements OnInit {
	@Input() formGroup: FormGroup;
	@Input() controlName: string;
	@Input() checkStrength: boolean;

	formControl: FormControl;
	hide = true;
	isBlured = true;
	isStrongPassword: boolean;

	ngOnInit() {
		this.addFormControl();
	}

	addFormControl(): void {
		this.formControl = new FormControl('');
		this.formGroup.addControl(this.controlName, this.formControl);
		this.formControl.setValidators([Validators.required, Validators.minLength(8)]);
	}

	onBlur() {
		if (this.checkStrength) {
			this.isBlured = true;
			this.passwordValid(this.isStrongPassword);
		}
	}

	passwordValid(event) {
		this.isStrongPassword = event;
		if (this.isBlured) {
			this.formControl.setErrors(!this.isStrongPassword ? { weak: !this.isStrongPassword } : null);
		}
	}
}
