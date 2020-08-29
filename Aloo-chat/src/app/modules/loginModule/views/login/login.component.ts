import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/modules/sharedModule/services/alert.service';
import { Alert } from 'src/app/modules/sharedModule/models/Alert.model';
import { AlertType } from 'src/app/modules/sharedModule/enums/alert-type.enum';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor(private fb: FormBuilder, private alertService: AlertService) {
		this.createForm();
	}

	ngOnInit() {
	}

	private createForm() {
		this.loginForm = this.fb.group({});
	}

	submit(): void {
		// TODO auth call
		if (this.loginForm.valid) {
			const { email, password } = this.loginForm.value;
			console.log(`Email: ${email}, Password: ${password}`);
		} else {
			this.alertService.addAlert(new Alert('Something went wrong', AlertType.ERROR));
		}
	}

}
