import { NgModule } from '@angular/core';

import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [
		TopNavigationComponent
	],
	imports: [
		CommonModule,
		AppRoutingModule,
		MatToolbarModule,
		MatMenuModule,
		MatIconModule
	],
	exports: [
		TopNavigationComponent
	],
	providers: []
})
export class TopNavModule { }
