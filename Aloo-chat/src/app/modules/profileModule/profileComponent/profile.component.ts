import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserDetails } from '../../apiModule/authService/models/userDetails.model';
import { Store } from '@ngxs/store';
import { AuthState } from '../../sharedModule/store/states/auth-state';
import { take } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from '../../apiModule/fireBaseService/fire-base.service';

@Component({
	selector: 'app-selector',
	templateUrl: './profile.component.html',
	styleUrls: [
		'./profile.component.scss'
	]
})
export class ProfileComponent implements OnInit {
	currentUser: UserDetails;
	fallbackImage =
		'https://firebasestorage.googleapis.com/v0/b/friday-7f374.appspot.com/o/profile.png?alt=media&token=0d4d5303-aebf-430f-b18d-7c408abd2e91';
	isEditMode = false;
	profileForm: FormGroup;

	constructor(
		private store: Store,
		private fb: FormBuilder,
		private firebaseService: FirebaseService,
		private cdr: ChangeDetectorRef) {}

	ngOnInit() {
		this.store.select(AuthState.logginUser).subscribe((user) => {
			this.currentUser = user;
		});
		this.profileForm = this.fb.group({});
	}

	saveChanges(picture?: string): void {
		this.cdr.detectChanges();
		this.isEditMode = !this.isEditMode;
		const {firstName, lastName, email, mobileNumber} = this.profileForm.value;
		const newDetails: UserDetails = JSON.parse(JSON.stringify(this.currentUser));
		newDetails.firstName = firstName;
		newDetails.lastName = lastName;
		newDetails.email = email;
		newDetails.mobileNumber = mobileNumber;
		newDetails.picture = picture ? picture : newDetails.picture;
		this.firebaseService.updateUserDetails(newDetails);
		this.profileForm = this.fb.group({});
	}

	showForm() {
		this.isEditMode = !this.isEditMode;
	}
}
