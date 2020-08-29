import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { InputTypeEnum } from './enums/input-type.enum';
import { ValidatorsConstant } from './constants/validators-enum';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
	@Input() parentForm: FormGroup;
	@Input() required = false;
	@Input() controlName: string;
	@Input() labelName: string;
	@Input() type = InputTypeEnum.TEXT;
	@Input() maxLength?: number;
	@Input() minLength?: number;
	@Input() pattern?: string;
	@Input() outlineAppearance = true;
	@Input() placeHolder = this.labelName;

	appearance: string;
	formControl: FormControl;

	ngOnInit() {
		this.appearance = this.outlineAppearance ? 'outline' : '';
		this.addFormControl();
	}

	private addFormControl(): void {
		this.formControl = new FormControl('');
		this.parentForm.addControl(this.controlName, this.formControl);
		this.formControl.setValidators(this.getValidators());
	}

	getValidators(): ValidatorFn[] {
		const ValidatorsList: ValidatorFn[] = [];
		[ValidatorsConstant.MAXLENGTH,
		ValidatorsConstant.MINLENGTH, ValidatorsConstant.PATTERN].forEach(validator => {
			if (this[validator]) {
				ValidatorsList.push(Validators[validator](this[validator]));
			}
		});

		if (this.required) {
			ValidatorsList.push(Validators.required);
		}
		return ValidatorsList;
	}

	getLableName() {
		return this.required ? this.labelName + ' *' : this.labelName;
	}

	formatInput() {
		if (this.formControl.value) {
			const formattedValue = this.formControl.value.replace(/ +/g, ' ').trim();
			this.formControl.patchValue(formattedValue);
		}
	}
}
