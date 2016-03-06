(function () {

	'use strict';

	angular.module('moose.project', [])

		.config(DashboardModule);


	function DashboardModule($stateProvider) {

		$stateProvider

			.state('project', {
	      url: '/{slug}',
	      templateUrl: 'project/project.html',
	      controller: 'ProjectCtrl as projectCtrl'
	    });

   }

})();
