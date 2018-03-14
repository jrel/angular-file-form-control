const packageJson = require('../package');
const fs = require("fs");
const path = require("path");


newPackageJson = {
    "name": packageJson.name,
    "version": packageJson.version,
    "description": packageJson.description,
    "keywords": packageJson.keywords,
    "author": packageJson.author,
    "repository": packageJson.repository,
    "license": packageJson.license,
    "bugs": packageJson.bugs,
    "homepage": packageJson.homepage,
    "peerDependencies": packageJson.dependencies,
    "main": "bundles/module.umd.js",
    "module": "src/index.js",
    "typings": "src/index.d.ts",
};

fs.writeFileSync(path.resolve(__dirname, '../dist/package.json'), JSON.stringify(newPackageJson, null, 4));
fs.writeFileSync(path.resolve(__dirname, '../dist/README.MD'),fs.readFileSync(path.resolve(__dirname, '../README.MD')));