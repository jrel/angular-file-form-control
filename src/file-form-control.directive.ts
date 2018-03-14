import {Directive, HostListener, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {first, take} from 'rxjs/operators';
import {FileJson} from './file-form-control.interface';

@Directive({
    selector: 'input[type=file][fileFormControl]',
})

export class FileFormControlDirective {

    @Input() private fileFormControl: FormControl;

    @HostListener('change', ['$event'])
    public onChange(event: any) {

        const files = event.target.files;
        if (!(files && files.length > 0)) {
            this.fileFormControl.setValue(undefined);
        } else {
            const callbackFn = (array: FileJson[], file: File) => [...array, this.transform(file)];
            forkJoin(
                Array.prototype.reduce.call(files, callbackFn, []),
            ).pipe(
                take(1),
            ).subscribe((value: FileJson[]) => this.fileFormControl.setValue(value));
        }
    }

    private transform(file: File): Observable<FileJson> {
        return new Observable<FileJson>((subscriber) => {
            const reader = new FileReader();
            const listener = () => subscriber.next({name: file.name, type: file.type, value: reader.result});
            reader.addEventListener('load', listener);
            reader.readAsDataURL(file);
        }).pipe(
            first(),
        );
    }
}
