import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormControlEnum } from '../../enums/form-control.enum';

@Component({
    selector: 'app-personal-details',
    templateUrl: './personal-details.component.html'
})
export class PersonalDetailsComponent implements OnInit {
    @Input() parentForm: FormGroup;

    ngOnInit() {
        this.addFormControllers();
    }

    private addFormControllers(): void {
        this.parentForm.addControl(FormControlEnum.FIRST_NAME, new FormControl('', Validators.required));
        this.parentForm.addControl(FormControlEnum.LAST_NAME, new FormControl('', Validators.required));
    }
}
