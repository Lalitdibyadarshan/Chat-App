import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailComponent } from './email/email.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
	declarations: [
		ProgressBarComponent,
		EmailComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatInputModule
	],
	exports: [
		ProgressBarComponent,
		EmailComponent
	],
	providers: []
})
export class UiComponentsModule { }
