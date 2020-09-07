import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoaderService {
	showLoader$ = new BehaviorSubject(false);

	getLoader(): BehaviorSubject<boolean> {
		return this.showLoader$;
	}

	showLoader(): void {
		this.showLoader$.next(true);
	}

	hideLoader(): void {
		this.showLoader$.next(false);
	}
}
