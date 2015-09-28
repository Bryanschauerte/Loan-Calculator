var app = angular.module('LoanCalculator').service('bankService', function($http){

  this.getInterestRate = function(){
    return $http({method:"GET", url:"http://localhost:5500/interest_rate"});

  }


})
