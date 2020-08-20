import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeTypeEnum } from '../enums/theme-type.enum';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	themes = [ThemeTypeEnum.DARK_THEME, ThemeTypeEnum.LIGHT_THEME];
	theme = new BehaviorSubject<string>(ThemeTypeEnum.LIGHT_THEME);

	constructor(private ref: ApplicationRef) {
		// initially trigger dark mode if preference is set to dark mode on system
		const darkModeOn =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (darkModeOn) {
			this.theme.next(ThemeTypeEnum.DARK_THEME);
		}

		// watch for changes of the preference
		// tslint:disable-next-line: deprecation
		window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
			const turnOn = e.matches;
			this.theme.next(turnOn ? ThemeTypeEnum.DARK_THEME : ThemeTypeEnum.LIGHT_THEME);

			// trigger refresh of UI
			this.ref.tick();
		});
	}
}
