(function(){
  'use strict';

  angular
    .module('baseApp', ['ui.router'])
    .config( [ '$locationProvider', '$stateProvider', config ] );

    function config($locationProvider, $stateProvider) {

      // Configure the app's path
      $locationProvider.html5Mode({
        // Disables hashbang mode
        enabled: true,
        // Unrelated to hashbang but avoids $location error
        requireBase: false
      });

      // Setup the template routes/states
      $stateProvider
        .state('home', {
          url: '/',
          controller: 'homeCtrl',
          templateUrl: '/templates/home.html'
        })
        .state('example', {
          url: '/example',
          controller: 'exampleCtrl',
          templateUrl: '/templates/example.html'
        });

    }

})();
