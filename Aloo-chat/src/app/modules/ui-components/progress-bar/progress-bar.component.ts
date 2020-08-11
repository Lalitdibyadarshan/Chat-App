import { Component, Input } from '@angular/core';
import { StepModel } from './model/step.model';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: [
        './progress-bar.component.scss'
    ]
})
export class ProgressBarComponent {
    @Input() steps: StepModel[];

    isFirstStep(step: StepModel): boolean {
        return this.steps && this.steps[0].stepName === step.stepName;
    }

    isLastStep(step: StepModel): boolean {
        return this.steps && this.steps[this.steps.length - 1].stepName === step.stepName;
    }

    isMiddleStep(step: StepModel): boolean {
        return !this.isFirstStep(step) && !this.isLastStep(step);
    }
}
