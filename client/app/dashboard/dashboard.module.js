(function () {

	'use strict';

	angular.module('moose.dashboard', [])

		.config(DashboardModule);


	function DashboardModule($stateProvider, $urlRouterProvider) {

		$stateProvider

			.state('dashboard', {
	      url: '/',
	      templateUrl: 'dashboard/dashboard.html',
	      controller: 'DashboardCtrl as dashboardCtrl'
	    });

	  $urlRouterProvider.otherwise('/');

   }

})();
