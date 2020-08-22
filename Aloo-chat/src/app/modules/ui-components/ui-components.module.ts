import { NgModule, Input } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailFormComponent } from './email/email.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PasswordStrengthComponent } from './password/password-strength/password-strength.component';
import { PasswordFormComponent } from './password/password.component';
import { InputComponent } from './input/input.component';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StepperMobileComponent } from './stepper-mobile/stepper-mobile.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SharedModule } from '../sharedModule/shared.module';

@NgModule({
	declarations: [
		ProgressBarComponent,
		EmailFormComponent,
		PasswordFormComponent,
		PasswordStrengthComponent,
		InputComponent,
		StepperComponent,
		StepperMobileComponent,
		DatePickerComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatInputModule,
		MatIconModule,
		MatStepperModule,
		MatButtonModule,
		MatMomentDateModule,
		MatDatepickerModule,
		SharedModule
	],
	exports: [
		ProgressBarComponent,
		EmailFormComponent,
		PasswordFormComponent,
		InputComponent,
		StepperComponent,
		StepperMobileComponent,
		DatePickerComponent
	],
	providers: []
})
export class UiComponentsModule { }
