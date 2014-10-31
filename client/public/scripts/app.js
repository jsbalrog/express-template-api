angular.module('myApp', ['ui.router']);

angular.module('myApp').config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'partials/home.html'
  })
  .state('home.list', {
    url: '/list',
    templateUrl: 'partials/home-list.html',
    controller: 'ListCtrl'
  })
  .state('home.paragraph', {
    url: '/paragraph',
    template: 'Here is a template'
  });
});

angular.module('myApp').controller('MyCtrl', function($scope) {
  $scope.title = "My App";
});