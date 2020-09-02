import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/modules/sharedModule/services/alert.service';
import { Alert } from 'src/app/modules/sharedModule/models/alert.model';
import { AlertType } from 'src/app/modules/sharedModule/enums/alert-type.enum';
import { LoaderService } from 'src/app/modules/sharedModule/services/loader.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor(private fb: FormBuilder, private alertService: AlertService, private loaderService: LoaderService) {
		this.createForm();
	}

	ngOnInit() {
	}

	private createForm() {
		this.loginForm = this.fb.group({});
	}

	submit(): void {
		// TODO auth call
		this.loaderService.setLoader(true);
		if (this.loginForm.valid) {
			const { email, password } = this.loginForm.value;
			console.log(`Email: ${email}, Password: ${password}`);
		} else {
			setTimeout(() => {
				this.loaderService.setLoader(false);
				this.alertService.addAlert(new Alert('Something went wrong', AlertType.ERROR));
			}, 3000);
		}
	}

}
