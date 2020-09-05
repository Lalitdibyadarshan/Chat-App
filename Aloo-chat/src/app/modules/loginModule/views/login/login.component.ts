import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginModel } from 'src/app/modules/apiModule/authService/models/login.model';
import { AuthService } from 'src/app/modules/apiModule/authService/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	returnUrl: string;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private authService: AuthService
	) {
		this.createForm();
	}

	ngOnInit() {
		this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/chat';
	}

	private createForm() {
		this.loginForm = this.fb.group({});
	}

	submit(): void {
		if (this.loginForm.valid) {
			const { email, password } = this.loginForm.value;
			this.authService.login(new LoginModel(email, password)).subscribe(() => {
				this.router.navigateByUrl(this.returnUrl);
			});
		}
	}
}
