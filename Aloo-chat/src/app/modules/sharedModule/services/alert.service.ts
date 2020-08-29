import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../models/Alert.model';

@Injectable({
	providedIn: 'root'
})
export class AlertService {
	private alerts: Alert[] = [];
	private alerts$ = new BehaviorSubject<Alert[]>(this.alerts);

	getAlerts(): BehaviorSubject<Alert[]> {
		return this.alerts$;
	}

	addAlert(alert: Alert): void {
		this.alerts.push(alert);
		this.alerts$.next(this.alerts);
	}

	resetAlerts(): void {
		this.alerts = [];
	}
}
