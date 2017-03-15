var GUITARPARTY_API_KEY = '3736b6f62d67d483d9d5f7aefd22c2883e890d15';

$('document').ready(
  function() {
    $('#requestButton').click(function() {

      $.ajax({
        url: 'http://api.guitarparty.com/v2/songbooks/5',
        method: 'GET',
        data: {
          key: GUITARPARTY_API_KEY
        },
        success: function(data) {
          $('.main').text(JSON.stringify(data));
        },
        error: function(error) {
          console.log('error thrown ' + error)
        }
      });


    });
  });

