import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';

@NgModule({
    declarations: [
    ],
    imports: [
        NgxsModule.forRoot([

        ], {
            developmentMode: !environment.production
        })
    ],
    exports: [
    ],
    providers: []
})
export class CommonModule { }
