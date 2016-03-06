(function () {

	'use strict';

	angular.module('moose.main', [])

		.config(MainModule);


	function MainModule(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }

})();
