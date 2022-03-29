var apiKey = '4da80e5512c9db1543dad0a071ed0134';
// var redirect_url = 'http://musicslayers.com';

var scope = 'user-read-private user-read-email';

var url = 'http://www.last.fm/api/auth/?api_key=' + apiKey;
//  + '&cb=' + redirect_url;

fetch(url, {
    headers: {Authentication: 'Bearer Token'}
  })
    .then(function(response) {
        console.log(response);
    });