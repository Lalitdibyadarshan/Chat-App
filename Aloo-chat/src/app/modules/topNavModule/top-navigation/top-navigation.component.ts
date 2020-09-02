import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../sharedModule/services/theme.service';
import { ThemeTypeEnum } from '../../sharedModule/enums/theme-type.enum';

@Component({
	selector: 'app-top-nav',
	templateUrl: './top-navigation.component.html',
	styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
	@Input() title: string;
	themes: string[];
	currentTheme: string;

	constructor(
		private theming: ThemeService
	) { }

	ngOnInit() {
		this.themes = this.theming.themes;
	}

	changeTheme(theme: string) {
		this.currentTheme = theme;
		this.theming.theme$.next(theme);
	}

	isActiveTheme(theme: string): boolean {
		return theme === this.currentTheme;
	}

	getThemeName(name: string): string {
		return name.replace('-theme', '').toLowerCase();
	}
}
