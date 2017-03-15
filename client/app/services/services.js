angular.module('player.services', [])

.factory('Links', function ($http) {
    var getAllVideos = function () {
        return $http({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3', // google api v3
            params: {
            key: YOUTUBE_API_KEY, // your secret key
            maxResults: 5, // max results per page
            part: 'snippet', // groups of properties as player, status, topicDetails
            type: 'video' // video, channel, playlist
            }
        })
        .then(function(res){
            return res.data;

    }, function(res) {
        res.error;
    });
    };

return {
    getAll: getAll
  };

});











