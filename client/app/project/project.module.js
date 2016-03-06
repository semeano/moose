(function () {

	'use strict';

	angular.module('moose.project', [])

		.config(DashboardModule);


	function DashboardModule($stateProvider, $urlRouterProvider) {

		$stateProvider

			.state('project', {
	      url: '/{id}',
	      templateUrl: 'project/project.html',
	      controller: 'ProjectCtrl as projectCtrl'
	    });

   }

})();
