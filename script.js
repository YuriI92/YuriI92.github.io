var client_id = 'bf8c5db27c99417e921ce6b9739bf1a5';
var redirect_uri = 'https://slayersband.com/callback/';

var scope = 'user-read-private user-read-email';

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

fetch(url)
    .then(function(response) {
        console.log(response);
    });
