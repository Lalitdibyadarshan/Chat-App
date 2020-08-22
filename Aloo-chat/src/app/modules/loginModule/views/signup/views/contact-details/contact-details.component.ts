import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegexEnum } from 'src/app/modules/sharedModule/enums/regex.enum';


@Component({
	selector: 'app-contact-details',
	templateUrl: './contact-details.component.html'
})
export class ContactDetailsComponent {
	@Input() parentForm: FormGroup;
	pattern = RegexEnum.MOBILE_NUMBER;
}
