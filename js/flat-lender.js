(function(){
	var app = angular.module('flat-lender', []);
	var gems  = [
		{
			name : 'Paul',
			price : 2.90,
			description : 'no-desc', 
			canPurchase: true,
			soldOut:true
		},
		{
			name : 'Patricx',
			price : 2.90,
			description : 'no-desc', 
			canPurchase: true,
			soldOut:false
		}
	];

	app.controller('StoreCtrl', ['$scope', function ($scope) {
		this.products = gems;
	}]);
})();