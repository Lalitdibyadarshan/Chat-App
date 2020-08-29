import { Component, NgZone, Input, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
	selector: 'app-animation',
	template: `
		<ng-lottie
			[options]="options"
			(loopComplete)="loopComplete($event)"
			(animationCreated)="animationCreated($event)">
		</ng-lottie>
	`
})
export class AnimationComponent implements OnInit {
	@Input() animationDataPath: string;
	@Input() isInfiniteLoop: boolean;
	@Input() slowDown: boolean;

	private animCreated: AnimationItem;
	private readonly SLOW = 0.4;

	options: AnimationOptions = {};
	constructor(private ngZone: NgZone) { }

	ngOnInit() {
		this.options = {
			...this.options,
			path: this.animationDataPath
		};
	}

	animationCreated(e: AnimationItem) {
		this.animCreated = e;
		if (this.slowDown) {
			e.setSpeed(this.SLOW);
		}
	}

	loopComplete() {
		if (!this.isInfiniteLoop) {
			this.ngZone.runOutsideAngular(() => this.animCreated.stop());
		}
	}
}
