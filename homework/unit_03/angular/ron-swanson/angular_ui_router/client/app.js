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
   
.state('quotes', {
	url: '/quotes',
	template: '<h1>Ouotes</h1><a ui-sref="quotes">Quotes</a>'
})

.state()


 $urlRouterProvider.otherwise('/');

