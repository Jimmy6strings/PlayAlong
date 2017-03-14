angular.module('player', [
  'player.services',
  'player.links',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/links', {
      templateUrl: 'app/links/links.html',
      controller: 'LinksController'
    })
    .otherwise({
      redirectTo: '/links'
    });
});

