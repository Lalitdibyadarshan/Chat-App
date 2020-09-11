import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseClass } from '../../sharedModule/base';
import { FirebaseService } from '../../apiModule/fireBaseService/fire-base.service';

@Component({
	selector: 'app-image-upload',
	templateUrl: './image-upload.component.html',
	styleUrls: [
		'./image-upload.component.scss'
	]
})
export class ImageUploadComponent extends BaseClass implements OnInit {
	@Input() parentForm: FormGroup;
	@Input() label: string;
	@Input() imgsrc: any;
	@Input() controlName: any;
	@Output() uploadComplete = new EventEmitter<string>();

	defaultImagePath = '/assets/images/placeholder.png';

	selectedImage: any;
	imageFormControl: FormControl;

	constructor(private firebaseService: FirebaseService) {
		super();
	}

	ngOnInit() {
		this.imageFormControl = new FormControl();
		this.parentForm.addControl(this.controlName, this.imageFormControl);
	}

	showPreview(e) {
		if (e.target.files && e.target.files[0]) {
			const reader = new FileReader();
			reader.onload = (event) => this.imgsrc = event.target.result;
			reader.readAsDataURL(e.target.files[0]);
			this.selectedImage = e.target.files[0];
		} else {
			this.selectedImage = null;
			this.imgsrc = '';
		}
	}

	upload() {
		this.firebaseService.uploadImage(this.selectedImage)
			.subscribe((url) => {
				this.uploadComplete.emit(url);
			});
	}

}
