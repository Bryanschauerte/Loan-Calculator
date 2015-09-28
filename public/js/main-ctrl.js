var app = angular.module("LoanCalculator").controller('mainCtrl', function($scope, bankService){

var timeOfLoanYears = 4;
var timeOfLoanMonths = timeOfLoanYears*12;

bankService.getInterestRate().then(function(res){
  $scope.interest_rate = Number(res.data);

})



$scope.calculatePayment = function(){
  var totalAfterInterestAmount = $scope.principal*$scope.interest_rate*timeOfLoanYears;

  $scope.monthly_payment= Math.round(totalAfterInterestAmount/timeOfLoanMonths);
};




});
