import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profileComponent/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../sharedModule/shared.module';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
	declarations: [
		ProfileComponent
	],
	imports: [
		CommonModule,
		ProfileRoutingModule,
		SharedModule,
		UiComponentsModule,
		ReactiveFormsModule,
		MatIconModule,
		MatMenuModule
	],
	exports: [
	],
	providers: [
		{ provide: 'Window',  useValue: window }
	]
})
export class ProfileModule { }
