import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cardComponent from './card.component';

let cardModule = angular.module('card', [
    uiRouter
])

.directive('card', cardComponent);

export default cardModule;
