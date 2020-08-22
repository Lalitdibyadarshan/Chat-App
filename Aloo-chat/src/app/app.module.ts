import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/sharedModule/shared.module';
import { UiComponentsModule } from './modules/ui-components/ui-components.module';
import { TopNavModule } from './modules/topNavModule/top-nav.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		TopNavModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
