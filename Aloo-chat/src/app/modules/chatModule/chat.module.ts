import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRootComponent } from './chat-root/chat-root.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatRoomListComponent } from './chat-root/partials/chat-room-list/chat-room-list.component';
import { ChatMessageWindowComponent } from './chat-root/partials/chat-message-window/chat-message-window.component';
import { ChatTitleComponent } from './chat-root/partials/chat-message-window/partials/chat-title/chat-title.component';
import { ChatBodyComponent } from './chat-root/partials/chat-message-window/partials/chat-body/chat-body.component';
import { ChatInputComponent } from './chat-root/partials/chat-message-window/partials/chat-input/chat-input.component';
import { NgxsModule } from '@ngxs/store';
import { ChatState } from './chat-root/store/chat.state';
import { UiComponentsModule } from '../ui-components/ui-components.module';


@NgModule({
	declarations: [
		ChatRootComponent,
		ChatRoomListComponent,
		ChatMessageWindowComponent,
		ChatTitleComponent,
		ChatBodyComponent,
		ChatInputComponent
	],
	imports: [
		NgxsModule.forFeature([
			ChatState
		]),
		CommonModule,
		ChatRoutingModule,
		UiComponentsModule
	],
	exports: [
	],
	providers: [
		{ provide: 'Window',  useValue: window }
	]
})
export class ChatModule { }
