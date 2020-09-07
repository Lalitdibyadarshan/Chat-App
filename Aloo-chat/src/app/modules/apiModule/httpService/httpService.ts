import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../sharedModule/services/loader.service';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private loaderService: LoaderService) {}

	showLoader(obs: Observable<any>): Observable<any> {
		this.loaderService.showLoader();
		return obs.pipe(
			tap(() => {
				this.loaderService.hideLoader();
			})
		);
	}

}
