import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiComponentsModule } from './modules/ui-components/ui-components.module';
import { TopNavModule } from './modules/topNavModule/top-nav.module';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { SharedModule } from './modules/sharedModule/shared.module';
import { ApiModule } from './modules/apiModule/api.module';

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
		UiComponentsModule,
		SharedModule,
		ApiModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
