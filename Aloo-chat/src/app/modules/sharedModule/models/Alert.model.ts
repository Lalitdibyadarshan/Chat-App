import { AlertType } from '../enums/alert-type.enum';

export class Alert {
	constructor(public text: string, public alertType: AlertType) {}
}
