angular.module('player.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.search = function() {
    // var source = video.multiSource();
    // source.addSource('mp4', 'http://www.example.com/master-and-margarita.mp4');
    // source.addSource('ogg', 'http://www.example.com/master-and-margarita.ogg');
    // source.save();
    // $scope.data.videos = source;
    console.log("hello world");
    Links.getAll().then(function(data) {
      $scope.data.videos = data
      console.log(data);
    }).catch(function(err) {
      console.log(err);
    })
  }
  $scope.search();
});

