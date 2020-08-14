import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormControlEnum } from '../../enums/form-control.enum';
import { RegexEnum } from 'src/app/modules/sharedModule/enums/regex.enum';
import { SignupConstant } from '../../constants/signup.constant';

@Component({
	selector: 'app-personal-details',
	templateUrl: './personal-details.component.html'
})
export class PersonalDetailsComponent implements OnInit {
	@Input() parentForm: FormGroup;

	pattern = RegexEnum.NAME;
	maxLength = SignupConstant.NAME_MAXLENGTH;

	ngOnInit() {
	}

}
