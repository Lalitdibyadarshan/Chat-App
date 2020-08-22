import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { ImageSrcDirective } from './directives/image-src.directive';
import { CommonModule } from '@angular/common';
import { PreventDefaultDirective } from './directives/prevent-default.directive';

@NgModule({
	declarations: [
		ImageSrcDirective,
		PreventDefaultDirective
	],
	imports: [
		NgxsModule.forRoot([

		], {
			developmentMode: !environment.production
		}),
		CommonModule
	],
	exports: [
		ImageSrcDirective,
		PreventDefaultDirective
	],
	providers: []
})
export class SharedModule { }
