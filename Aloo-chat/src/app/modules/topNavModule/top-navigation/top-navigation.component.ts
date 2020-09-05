import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../sharedModule/services/theme.service';
import { ThemeTypeEnum } from '../../sharedModule/enums/theme-type.enum';
import { Select } from '@ngxs/store';
import { AuthState } from '../../sharedModule/store/states/auth-state';
import { Observable } from 'rxjs';
import { AuthService } from '../../apiModule/authService/auth.service';

@Component({
	selector: 'app-top-nav',
	templateUrl: './top-navigation.component.html',
	styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
	@Input() title: string;
	@Select(AuthState.isLoggedIn) isLoggedInUser$: Observable<boolean>;

	themes: string[];
	currentTheme: string;
	isloggedinUSer: boolean;

	constructor(
		private theming: ThemeService,
		private authService: AuthService
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

	logout(): void {
		this.authService.logout();
	}
}
