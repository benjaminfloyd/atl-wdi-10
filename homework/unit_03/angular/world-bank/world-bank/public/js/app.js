var app = angular.module("myApp", []);

app.controller("MainController", ['$http', '$scope', function($http, $scope){

	var vm = this;
	vm.total = "";
	vm.regions = [];
	vm.infos = "";
	vm.formdata = {};

	$http.get('/wbinfo/count').then(
		function(response){ 
			vm.total = response.data;
		}),
		function(err) { 
			console.log(err);
		};

	
	$http.get('wbinfo/uniqueRegions').then(
		function(response) {
			(response.data)
			vm.regions = response.data;
		}), 
		function(err) {
			console.log(err);
		};

	this.showRegion = function(name) {
		$http.get('wbinfo/byName/' + name).then(
			function(response) {
				(response.data)
				vm.infos = response.data;
				(vm.infos)
			}),
			function (err) {
				console.log(err);
			}
	};

	
	this.addRecord = function() {
		console.log("Hey it worked");
		$http({
			method: 'POST',
			url: '/wbinfo',
			data: this.formdata
		}).then(
		function(response) {
			
			vm.regions.push(response.data.region);
			
			vm.formdata = {};
		}),
		function(err) {
			console.log(err);
		}
	};

	
	this.delete = function(data, index) {
		
		var id = data._id;
		("delete button fired: ", data._id)
		$http({
			method: 'DELETE',
			url: '/wbinfo/' + id,
			data: this
		}).then( 
			function(response) {
			("This is the response ", response)
			("This is vm.infos ", vm.infos)
			
			vm.infos.splice(index, 1);
			
			vm.regions.pop(response.data.region);
		}),
		function(err) {
			console.log(err);
		}
	};


	this.edit = function(data, index) {
		
		var id = data._id
		
		$http({
			method: 'PUT',
			url: '/wbinfo/' + id,
			data: this.infos[index]
		}).then(
			function(response) {
				
			}), 
			function(err) {
				console.log(err);
			}
	};

}]);
