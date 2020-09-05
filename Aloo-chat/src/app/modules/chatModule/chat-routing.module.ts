import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRootComponent } from './chat-root/chat-root.component';
import { AuthGuard } from '../sharedModule/router-guards/auth-guard';

const routes: Routes = [
	{
		path: '',
		component: ChatRootComponent,
		children: [
		],
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ChatRoutingModule { }
