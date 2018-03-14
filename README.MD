# angular-file-form-control

The angular-file-form-control transform the files received in input of type file to object with data in base64!

The secture f object is:
```typescript
  interface File {
      name: string;
      type: string;
      value: string;
  }
```
## Installation

To install this library, run:

```bash
$ npm install angular-file-form-control --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular Module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { FileFormControlModule } from 'angular-file-form-control';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    FileFormControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use the directive in your Angular application:

```html
<!-- You can now use your library component in app.component.html -->
<input type="file" [fileFormControl]="fileFormControl"><
```


## License

MIT © [João Lourenço](mailto:jrelourenco@outlook.pt)
