import { Component, OnInit, NgZone } from '@angular/core';
import { AlertService } from '../../sharedModule/services/alert.service';
import { Alert } from '../../sharedModule/models/alert.model';
import { AlertType } from '../../sharedModule/enums/alert-type.enum';
import { BaseClass } from '../../sharedModule/base';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: [
		'./alert.component.scss'
	]
})
export class AlertComponent extends BaseClass implements OnInit {

	currentAlert: Alert;
	alertType = AlertType;
	successAnimationPath = '/assets/lottie-animations/success.json';
	errorAnimationPath = '/assets/lottie-animations/error.json';

	constructor(private alertService: AlertService, private ngZone: NgZone) {
		super();
	 }

	ngOnInit() {
		this.obsGC(this.alertService.getAlerts()).subscribe(alerts => {
			this.renderAlert(alerts);
		});
	}

	renderAlert(alerts: Alert[]): void {
		alerts = alerts.reverse();
		this.currentAlert = alerts.pop();
		const timer = setInterval(() => {
			this.currentAlert = null;
			if (alerts.length > 0) {
				this.currentAlert = alerts.pop();
			} else {
				this.alertService.resetAlerts();
				this.ngZone.run(() => this.currentAlert);
				clearInterval(timer);
			}
		}, 5000);
	}
}
