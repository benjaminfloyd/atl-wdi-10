const angular = require('angular');
require('angular-ui-router');

angular
 // Now we can add the module ui.router
  // This is saying explicitly what dependencies we have
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup);

// These are the dependencies that we inject into router setup function
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, 
// You define new states on the $stateProvider
$urlRouterProvider) {
	$stateProvider
		.state('home', {
			// When we go to url.com/#/, do this
			url: '/',
			// For example purposes, typing the HTML into template directly
      // This can get pretty ugly as we build bigger and bigger HTML files. We'll solve that soon
      // Also, check out the new directive -- ui-sref. 
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
			// template: '<about></about>' // LAB Goal #1 -- get this line to work
			template: '<h1>About</h1><a ui-sref="home">Home</a>'
			 // Say which controller should be used -- remember the diagram that the Router defines which Controller and View to use?
      // Note: It is not required to use a controller, however it's more common -- how often do you really need a view that has no controller? Really just for static content, such as About, FAQs, etc.
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
		.state('criminalsNew', {
			url: '/criminals/new',
			template: '<criminals-new></criminals-new>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		});

<<<<<<< HEAD
		 // Catch-all route
  // Will forward all non-existing router calls
  // to '/'

=======
	// default state
>>>>>>> 9cc7d65c9018b274e774f628b23a8e539134c1d3
	$urlRouterProvider.otherwise('/');
}
