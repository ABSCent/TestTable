# TestTable
Test task on angular.js and gulp.js.That's some kind of app with table of persons and their skills.Everything is stored in local storage.

#Getting started
To start testing application You have to go through a few easy steps.
Firstly, run the following commands in the CMD,in project's directory:
```
npm install
```
This will install node modules,needed in the application. The we have to install client-side dependencies,by running:
```
bower install
```
#Tasks
In this project is used Gulp task-manager. So, to run default tasks just write in the command prompt:
```
gulp
```
This will create style.css file, that will contain all project's sass files converted to css,concatenated and minified. Also after running tasks, You will have two JS files: one for all client-side libraries and frameworks and another for all custom javascript files. All these files You can find in the dist directory. To make Gulp watch changes and immediately refresh files, run:
```
gulp watch
```
