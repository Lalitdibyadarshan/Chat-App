import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
		{
		path: 'auth',
		loadChildren: () => import('./modules/loginModule/login.module').then(m => m.LoginModule)
	},
	{
		path: 'chat',
		loadChildren: () => import('./modules/chatModule/chat.module').then(m => m.ChatModule)
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/auth'
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
