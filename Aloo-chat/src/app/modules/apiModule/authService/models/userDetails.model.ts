export class UserDetails {
	id?: string;
	firstName: string;
	lastName: string;
	email: string;
	mobileNumber?: string;
	picture?: string;

	constructor(
		firstName: string,
		lastName: string,
		email: string,
		mobileNumber?: string,
		id?: string,
		picture?: string
	) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.picture = picture;
	}
}
