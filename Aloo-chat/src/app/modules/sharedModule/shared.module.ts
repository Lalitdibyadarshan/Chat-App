import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { ImageSrcDirective } from './directives/image-src.directive';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		ImageSrcDirective
	],
	imports: [
		NgxsModule.forRoot([

		], {
			developmentMode: !environment.production
		}),
		CommonModule
	],
	exports: [
		ImageSrcDirective
	],
	providers: []
})
export class SharedModule { }
