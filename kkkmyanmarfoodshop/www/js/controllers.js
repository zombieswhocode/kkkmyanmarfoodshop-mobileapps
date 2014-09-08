angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
    
    //sign up 
      // Form data for the signup modal
  $scope.signupData = {};
  // Create the signup modal that we will use later
  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  // Triggered in the signup modal to close it
  $scope.closeSignup = function() {
    $scope.modal2.hide();
  };

  // Open the signup modal
  $scope.signup = function() {
    $scope.modal2.show();
  };

  // Perform the signup action when the user submits the signup form
  $scope.doSignup = function() {
    console.log('Doing signup', $scope.signupData);

    // Simulate a login delay. Remove this and replace with your signup
    // code if using a login system
    $timeout(function() {
      $scope.closeSignup();
    }, 1000);
  };
    
})


.controller('PlaylistsCtrl', function($scope, FoodService) {
  $scope.playlists = FoodService.all();
    
})

.controller('PlaylistCtrl', function($scope, $stateParams, FoodService) {
  $scope.playlist  = FoodService.get($stateParams.foodId);
})
.controller('PlanlistsCtrl', function($scope, $stateParams, MonthlyService) {
  $scope.planlists  = MonthlyService.all();
})
.controller('PlanlistCtrl', function($scope, $stateParams, MonthlyService) {
  $scope.planlist  = MonthlyService.get($stateParams.planId);
})
.controller('CateringCtrl', function($scope, $stateParams, FoodService) {
  $scope.food  = FoodService.get($stateParams.foodId);
});