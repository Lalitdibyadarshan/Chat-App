import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../sharedModule/router-guards/auth-guard';
import { ProfileComponent } from './profileComponent/profile.component';

const routes: Routes = [
	{
		path: '',
		component: ProfileComponent,
		children: [
		],
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProfileRoutingModule { }
