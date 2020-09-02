import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OnDestroy } from '@angular/core';

export class BaseClass implements OnDestroy {
	destroyObs$ = new ReplaySubject(1);

	obsGC(obs: Observable<any>): Observable<any> {
		return obs
			.pipe(takeUntil(this.destroyObs$));
	}

	ngOnDestroy() {
		this.destroyObs$.next(true);
		this.destroyObs$.complete();
	}
}
