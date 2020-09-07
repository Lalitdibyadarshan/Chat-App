import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseClass } from '../../sharedModule/base';
import { LoaderService } from '../../sharedModule/services/loader.service';

@Component({
	selector: 'app-progress-bar-loader',
	templateUrl: './progress-bar-loader.component.html',
	styleUrls: [
		'./progress-bar-loader.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarLoaderComponent extends BaseClass {

	constructor(private loaderService: LoaderService) {
		super();
	}

	getLoader(): Observable<boolean> {
		return this.obsGC(this.loaderService.getLoader());
	}
}
