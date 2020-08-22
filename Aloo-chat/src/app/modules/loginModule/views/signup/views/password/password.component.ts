import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-password',
	templateUrl: './password.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordComponent {
	@Input() parentForm: FormGroup;

}
