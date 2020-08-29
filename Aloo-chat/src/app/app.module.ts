import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiComponentsModule } from './modules/ui-components/ui-components.module';
import { TopNavModule } from './modules/topNavModule/top-nav.module';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		NgxsModule.forRoot([], {
			developmentMode: !environment.production
		}),
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		TopNavModule,
		UiComponentsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
