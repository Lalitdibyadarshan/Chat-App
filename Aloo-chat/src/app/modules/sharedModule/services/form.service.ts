import { Injectable, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class FormService {
	constructor() {}

	checkFormValidity(form: FormGroup, elRef: ElementRef) {
		if (form.invalid || form.untouched) {
			for (const key of Object.keys(form.controls)) {
				if (form.controls[key].untouched || form.controls[key].invalid) {
					form.controls[key].markAsTouched();
				}
			}
			const invalidNodes = elRef.nativeElement.querySelectorAll('.ng-invalid');
			for (const node of invalidNodes) {
				if (node.tagName === 'INPUT') {
					node.focus();
					break;
				}
			}
		}
	}
}
