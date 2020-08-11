import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/auth'
	},
	{
		path: 'auth',
		loadChildren: () => import('./modules/loginModule/login.module').then(m => m.LoginModule)
	},
	{
		path: '**',
		redirectTo: '/auth'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
