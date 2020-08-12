import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRootComponent } from './login-root/login-root.component';
import { LoginComponent } from './views/login/login.component';
import { SignUpComponent } from './views/signup/signup.component';

const routes: Routes = [
	{
		path: '',
		component: LoginRootComponent,
		children: [
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'signup',
				component: SignUpComponent
			},
			{
				path: '',
				redirectTo: 'login'
			},
			{
				path: '**',
				redirectTo: ''
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LoginRoutingModule { }
