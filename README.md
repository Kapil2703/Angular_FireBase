# MyStreamProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

run `npm install -g @angular/cli`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy on firebase

## Create an account in firebase

https://firebase.google.com/


## Create a project in firebase

my-angular-project

## Run following in Terminal in your project directory 

Run `npm install -g firebase-tools` Install the firebase-tools CLI that will handle your deployment

Run `firebase login` to login from your account.

Run `ng build --prod` it will create dist folder

Run `firebase init` to intialize firebase

Continue with default settings most the places.......

## Most of the entries are default just make sure following selections about public directory and index html:

select your public directory as :
? What do you want to use as your public directory? dist/my-stream-project

## No need to Override index.html
Configure as a single-page app (rewrite all urls to /index.html)? N

Run `firebase deploy` to deploy

## If we get following error

Found 1 error.

npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! functions@ build: `tsc`
npm ERR! Exit status 2

## then remove `build` from firebase.json in following line :

"npm --prefix \"\$RESOURCE_DIR\" run build"

## It should be

npm --prefix \"\$RESOURCE_DIR\" run

## Fiinal outout will show the published URL as below :

Project Console: https://console.firebase.google.com/project/my-angular-project-1bde8/overview
Hosting URL: https://my-angular-project-1bde8.firebaseapp.com

## Hit and open the app, we are done :)

## #####\***\*\*\*\***NOTE\***\*\*\*\*\***########

In case static contents are not loading then check your tsconfig.json's output directory it should be
Pointing to dist folder like "outDir": "./dist",

## Once done just run following after change in your code to deploy.

Run `ng build --prod`

## After Build to Deploy the Changes

Run `firebase deploy` 



