import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
	imports: [
		CommonModule
	],
	exports: [
	],
	providers: [
		{ provide: 'Window',  useValue: window }
	]
})
export class ApiModule { }
