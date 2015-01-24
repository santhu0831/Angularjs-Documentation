// A simple module with no dependencies
var mainModule = angular.module("mainModule", [])
  

  mainModule.controller("simpleController", function ($scope)
  {
    // Initialize the model
    $scope.person = {
      firstName: "Santosh",
      lastName: "Kumar",

      // Define utility functions on the model object
      getFullName: function ()
      {
        return this.firstName + " " + this.lastName;
      }
    };
  });

  /*   We write modules to avoid to declare objects in global name space.
       A module can be defined by simply calling angular.module function , 
       where angular is global name space exposed by angular and always availble to us.
       The angular module accepts two parameters the name of the module and array of dependencies
       on other module.
   */
