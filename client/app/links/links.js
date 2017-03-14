angular.module('player.links', [])

.controller('youtubeCtrl', ['$scope', function(t) {
  t.theBestVideo  = 'JGSGhb8tzoA'
}])
// .controller('LinksController', ['$scope', 'video', function ($scope, Links, video) {
//    $scope.data = {};
//   // var result = video.addSource('mp4', 'http://www.example.com/alice-in-wonderland.mp4');
//   // result.save();
//  // $scope.data.result = result;
//   $scope.search = function() {

//     var source;
//     source.addSource('mp4', 'http://www.example.com/master-and-margarita.mp4');
//     //source.addSource('ogg', 'http://www.example.com/master-and-margarita.ogg');
//     source.save();
//     $scope.data.videos = source;
//   //   console.log("hello world");
//   //   Links.getAll().then(function(data) {
//   //     $scope.data.videos = data
//   //     console.log(data);
//   //   }).catch(function(err) {
//   //     console.log(err);
//   //   })
//    }
//   //$scope.search();
// }]);

