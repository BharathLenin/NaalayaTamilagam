(function() {
  'use strict';

  angular
    .module('nt')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
  }
})();
