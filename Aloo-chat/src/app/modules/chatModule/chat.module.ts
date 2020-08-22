import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRootComponent } from './chat-root/chat-root.component';
import { ChatRoutingModule } from './chat-routing.module';


@NgModule({
	declarations: [
		ChatRootComponent
	],
	imports: [
		CommonModule,
		ChatRoutingModule
	],
	exports: [
	],
	providers: [
		{ provide: 'Window',  useValue: window }
	]
})
export class ChatModule { }
