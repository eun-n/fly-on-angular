var app = angular.module('AirplaneApp', ['AirplaneCtrls', 'ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('takeoff', {
  	url: '/',
  	templateUrl: '/views/takeoff.html',
  	controller: 'TakeOffCtrl'
  })
  .state('inventory', {
  	url: '/inventory',
  	templateUrl: '/views/inventory.html',
  	controller: 'InventoryCtrl'
  })
  .state('404', {
  	url: '/404',
  	templateUrl: '/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);