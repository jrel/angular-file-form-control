const globals = {
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms',
    'rxjs/Observable': 'Rx',
    'rxjs/observable/forkJoin': 'Rx.Observable',
    'rxjs/operators': 'Rx.Observable.prototype'
};

export default {
    input: 'dist/src/index.js',
    output: {
        file: 'dist/bundles/module.umd.js',
        format: 'umd',
        name: 'angular-file-form-control',
        sourcemap: true,
        globals: globals,
    },
}