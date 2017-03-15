angular.module('player.links', [])

.controller('LinksController', ['$scope', 'video', function ($scope, Links, video) {
   $scope.data = {};

  $scope.search = function() {


    console.log("hello world");
    Links.getAll().then(function(data) {
      $scope.data.videos = data
      console.log(data);
    }).catch(function(err) {
      console.log(err);
    })
   }
  $scope.search();
}]);

