import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Store } from '@ngxs/store';
import { Alert } from '../models/alert.model';
import { AlertType } from '../enums/alert-type.enum';
import { AuthState } from '../store/states/auth-state';


@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private alertService: AlertService,
		private store: Store,
		private router: Router) {
	}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		if (this.store.selectSnapshot(AuthState.isLoggedIn) || sessionStorage.getItem('existingSession') === 'true') {
			return true;
		} else {
			this.alertService.addAlert(new Alert('Please login to view this', AlertType.WARNING));
			this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
			return false;
		}
	}
}
