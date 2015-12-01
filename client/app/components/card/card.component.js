import template from './card.html';
import controller from './card.controller';
import './card.scss';

let cardComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default cardComponent;
