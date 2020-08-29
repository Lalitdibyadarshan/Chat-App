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
import { AlertComponent } from './alert/alert.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AnimationComponent } from './animation/animation.component';
@NgModule({
	declarations: [
		ProgressBarComponent,
		EmailFormComponent,
		PasswordFormComponent,
		PasswordStrengthComponent,
		InputComponent,
		StepperComponent,
		StepperMobileComponent,
		DatePickerComponent,
		AlertComponent,
		AnimationComponent
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
		SharedModule,
		LottieModule.forRoot({ player: () => player }),

	],
	exports: [
		ProgressBarComponent,
		EmailFormComponent,
		PasswordFormComponent,
		InputComponent,
		StepperComponent,
		StepperMobileComponent,
		DatePickerComponent,
		AlertComponent,
		AnimationComponent
	],
	providers: []
})
export class UiComponentsModule { }
