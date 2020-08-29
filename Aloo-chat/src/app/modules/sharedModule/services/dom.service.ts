import { Injectable, Renderer2, OnDestroy, RendererFactory2, Inject } from '@angular/core';
import { WindowService } from './window.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DomService implements OnDestroy {
	private listener;
	private renderer: Renderer2;
	private scrollY$ = new BehaviorSubject<number>(0);

	constructor(private rendererFactory: RendererFactory2, private windowService: WindowService) {
		this.renderer = rendererFactory.createRenderer(null, null);
		this.addScrollListener();
	}

	private addScrollListener(): void {
		this.listener = this.renderer.listen('window', 'scroll', (e) => {
			this.scrollY$.next(this.windowService.getWindowRef().pageYOffset);
		});
	}

	getYPosition(): BehaviorSubject<number> {
		return this.scrollY$;
	}

	ngOnDestroy(): void {
		this.listener();
	}
}
