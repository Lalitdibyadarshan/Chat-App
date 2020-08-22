import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginPageConstant } from './constants/login-page.constant';
import { DoodleEnum } from '../../sharedModule/enums/doodle.enum';

@Component({
	selector: 'app-login-root',
	templateUrl: './login-root.component.html',
	styleUrls: ['./login-root.component.scss']
})
export class LoginRootComponent implements OnInit {
	doodles: string = DoodleEnum.AUTHENTICATION;

	constructor(private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.router.navigate(['login'], { relativeTo: this.route });
	}
}
