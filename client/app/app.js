import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
// Material design css
import 'angular-material/angular-material.css';
// Icons
import 'font-awesome/css/font-awesome.css';
// Materail Design lib
import angularMaterial from 'angular-material';

angular.module('app', [
  uiRouter,
  angularMaterial,
  Common.name,
  Components.name
])
.directive('app', AppComponent);
