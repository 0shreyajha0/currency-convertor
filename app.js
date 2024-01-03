var app = angular.module("app", []);

app.controller("myCtrl", function ($scope, $http) {
  var apiEndpoint = "YOUR_API_ENDPOINT";

  function fetchExchangeRates() {
    $http
      .get(apiEndpoint)
      .then(function (response) {
        $scope.exchangeRates = response.data.rates;
      })
      .catch(function (error) {
        console.error("Error fetching exchange rates:", error);
      });
  }

  $scope.convertCurrency = function () {
    var fromRate = $scope.exchangeRates[fromCurrency];
    var toRate = $scope.exchangeRates[toCurrency];

    $scope.convertedAmount = ($scope.amount / fromRate) * toRate;
  };

  fetchExchangeRates();
});
