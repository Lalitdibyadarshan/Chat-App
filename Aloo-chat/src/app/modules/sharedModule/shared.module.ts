import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ImageSrcDirective } from './directives/image-src.directive';
import { CommonModule } from '@angular/common';
import { PreventDefaultDirective } from './directives/prevent-default.directive';
import { AuthState } from './store/states/auth-state';

@NgModule({
	declarations: [
		ImageSrcDirective,
		PreventDefaultDirective
	],
	imports: [
		NgxsModule.forFeature([
		]),
		CommonModule
	],
	exports: [
		ImageSrcDirective,
		PreventDefaultDirective
	],
	providers: []
})
export class SharedModule { }
