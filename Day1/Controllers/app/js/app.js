var simpleController = function ($scope)
{
  // Initialize the model variables
  $scope.firstName = "Santosh";
  $scope.lastName = "Kumar";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.lastName+" " +$scope.firstName;
  };
};

