import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './modules/sharedModule/services/theme.service';
import { BaseClass } from './modules/sharedModule/base';
import { LoaderService } from './modules/sharedModule/services/loader.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseClass implements OnInit {
	title = 'Aloo-chat';
	theme: string;

	constructor(private themeService: ThemeService, private renderer: Renderer2, private loaderService: LoaderService) {
		super();
	}

	ngOnInit() {
		this.getTheme();
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
