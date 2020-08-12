import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { ImageSrcDirective } from './directives/image-src.directive';

@NgModule({
	declarations: [
		ImageSrcDirective
	],
	imports: [
		NgxsModule.forRoot([

		], {
			developmentMode: !environment.production
		})
	],
	exports: [
		ImageSrcDirective
	],
	providers: []
})
export class SharedModule { }
