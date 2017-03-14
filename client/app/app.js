angular.module('player', [
  'player.services',
  'player.links',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/index.html',
      controller: 'LinksController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

