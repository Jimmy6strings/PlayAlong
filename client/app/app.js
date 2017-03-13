angular.module('player', ['player.links'])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/index.html',
    controller: 'LinksController'
  })
})