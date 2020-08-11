import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ProgressBarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ProgressBarComponent
    ],
    providers: []
})
export class UiComponentsModule { }
