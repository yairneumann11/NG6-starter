import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import cardComponent from '../card/card';


let homeModule = angular.module('home', [
    cardComponent.name,
    uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })
    //.state('home.subs', {
    //  views: {
    //    'view1@home': {
    //      template: "Im View1"
    //    },
    //    'view2@home': {
    //      template: "Im View2"
    //    }
    //  }
    //});
})/*.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state, $stateParams) {
    $state.transitionTo('home.subs');
  }])*/

.directive('home', homeComponent);

export default homeModule;
