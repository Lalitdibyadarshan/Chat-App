import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './modules/sharedModule/services/theme.service';
import { BaseClass } from './modules/sharedModule/base';
import { LoaderService } from './modules/sharedModule/services/loader.service';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { InitializeExistingSessionAction } from './modules/sharedModule/store/actions/auth-action';
import { AuthService } from './modules/apiModule/authService/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseClass implements OnInit {
	title = 'Friday';
	theme: string;

	constructor(
		private themeService: ThemeService,
		private renderer: Renderer2,
		private loaderService: LoaderService,
		private authService: AuthService) {
		super();
	}

	ngOnInit() {
		this.getTheme();
		this.authService.initializeExistingSession();
	}

	getLoader(): Observable<boolean> {
		return this.obsGC(this.loaderService.getLoader());
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
