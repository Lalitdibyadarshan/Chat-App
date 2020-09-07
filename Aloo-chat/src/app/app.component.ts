import { Component, OnInit, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from './modules/sharedModule/services/theme.service';
import { BaseClass } from './modules/sharedModule/base';
import { AuthService } from './modules/apiModule/authService/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseClass implements OnInit {
	title = 'Friday';
	theme: string;
	initializeApp = false;

	constructor(
		private themeService: ThemeService,
		private renderer: Renderer2,
		private authService: AuthService) {
		super();
	}

	ngOnInit() {
		this.getTheme();
		this.authService.initializeExistingSession()
			.subscribe(() => this.initializeApp = true);
	}

	private getTheme(): void {
		this.obsGC(this.themeService.theme$).subscribe(res => {
			this.renderer.removeClass(document.body, this.theme);
			this.renderer.addClass(document.body, res);
			this.theme = res;
		});
	}

	changeTheme(theme: string) {
		this.themeService.theme$.next(theme);
	}
}
