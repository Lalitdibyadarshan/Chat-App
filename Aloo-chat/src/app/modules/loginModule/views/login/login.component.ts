import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.createForm();
	}

	ngOnInit() {
	}

	private createForm() {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(8)]]
		});
	}

	submit(): void {
		// TODO auth call
		const { email, password } = this.loginForm.value;
		console.log(`Email: ${email}, Password: ${password}`);

	}

}
