import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as _moment from 'moment';

@Component({
	selector: 'app-date-picker',
	templateUrl: './date-picker.component.html'
})
export class DatePickerComponent {
	@Input() parentForm: FormGroup;
}
