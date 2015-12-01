import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';

require('expose?$!expose?jQuery!jquery');
import 'semantic-ui/dist/semantic.min.css'
require('semantic-ui/dist/semantic.js');


import AppComponent from './app.component';
import 'normalize.css';
// Icons
import 'font-awesome/css/font-awesome.css';
//
//import 'semantic-ui/dist/semantic.css';

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name
])
.directive('app', AppComponent);

