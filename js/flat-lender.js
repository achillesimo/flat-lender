(function(){
	var app = angular.module('flat-lender', []);
	var gem  = {
		name : 'Paul',
		price : 2.90,
		description : 'no-desc'
	};

	app.controller('StoreCtrl', ['$scope', function ($scope) {
		this.product = gem;
	}]);
})();