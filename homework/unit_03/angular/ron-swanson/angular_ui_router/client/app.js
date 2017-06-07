const angular = require('angular');
require('angular-ui-router');

angular
    .module('RonSwansonApp', ['ui.router'])
    .config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/', // telling the browser where to go
			template: '<home></home>' // calling the component that we have created
		})

    $urlRouterProvider.otherwise('/');
}

// Set up your UI Router HERE

