import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
	imports: [
		CommonModule,
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireStorageModule
	],
	exports: [
	],
	providers: [
		{ provide: 'Window',  useValue: window }
	]
})
export class ApiModule { }
