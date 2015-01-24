var firstController = function ($scope)
{
  // Initialize the model variables
  $scope.firstName = "Santosh";
  $scope.lastName = "Kumar";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.lastName;
  };
};

var secondController = function ($scope)
{
  // Initialize the model variables
  $scope.firstName = "Deepik";
  $scope.middleName = "Padukone";
  $scope.lastName = "Santosh";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
  };
};