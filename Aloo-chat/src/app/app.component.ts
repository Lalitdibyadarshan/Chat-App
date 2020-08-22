import { Component, OnInit } from '@angular/core';
import { ThemeService } from './modules/sharedModule/services/theme.service';
import { ThemeTypeEnum } from './modules/sharedModule/enums/theme-type.enum';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Aloo-chat';
	theme: string;

	constructor(private themeService: ThemeService) {}

	ngOnInit() {
		this.themeService.theme.subscribe(res => {
			this.theme = res;
		});
	}

	changeTheme(theme: string) {
		this.themeService.theme.next(theme);
	}
}
