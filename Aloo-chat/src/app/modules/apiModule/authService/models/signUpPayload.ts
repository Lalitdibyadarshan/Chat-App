import { UserDetails } from './userDetails.model';

export class SignUpPayload extends UserDetails {
	password: string;
	constructor(
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		mobileNumber?: string,
	) {
		super(firstName, lastName, email, mobileNumber);
		this.password = password;
	}
}
