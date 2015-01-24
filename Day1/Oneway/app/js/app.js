var app = angular.module('app', ['ngRoute']);

app.controller('HeaderCtrl', function ($scope) {
  var count = 0;

  // variable
  $scope.msg = 'Click count: ' + count;

  // array for repeat
  $scope.languages = ['C', 'C++', 'JAVA', 'JavaScript', 'Python'];

  $scope.updateCount = function() {
    count++;
    $scope.msg = 'Click count: ' + count;
  }
});

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/users', {
        templateUrl: 'html/users.html',
        controller: 'usersCtrl',
        controllerAs: 'usersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
