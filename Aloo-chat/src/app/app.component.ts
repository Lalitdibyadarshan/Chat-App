import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './modules/sharedModule/services/theme.service';
import { DomService } from './modules/sharedModule/services/dom.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Aloo-chat';
	theme: string;

	constructor(private themeService: ThemeService, private renderer: Renderer2, private domService: DomService) {}

	ngOnInit() {
		this.themeService.theme.subscribe(res => {
			this.renderer.removeClass(document.body, this.theme);
			this.renderer.addClass(document.body, res);
			this.theme = res;
		});
	}

	changeTheme(theme: string) {
		this.themeService.theme.next(theme);
	}
}
