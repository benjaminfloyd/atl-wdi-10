angular.module('worldbank')
.controller('WorldBankController', WorldBankController);

WorldBankController.$inject = ['$http'];

function WorldBankController($http){
    var vm = this;
    vm.all = "";
    vm.getWbinfo = getWbinfo;

    getWbinfo();

    function getWbinfo(){
        $http
            .get('/wbinfo/count')
            .then(function(response){
                vm.all = response.data;
            }),
            function(error) { 
			console.log(error);
    };

    
}

