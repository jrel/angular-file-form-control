import {NgModule} from '@angular/core';
import {FileFormControlDirective} from './file-form-control.directive';

@NgModule({
    declarations: [
        FileFormControlDirective,
    ],
    exports: [
        FileFormControlDirective,
    ],
})
export class FileFormControlModule {
}
