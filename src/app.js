var $ = function (id) {
    return document.getElementById(id);
},
secondsToMinutes = function (time) {
  var addPadding = function (tm) {
    return '0' + tm;
  },
  // bitwise double not (~~) is an alias for Math.floor
  minutes = ~~(time / 60),
  seconds = time % 60;

  minutes = minutes.toString().length === 1 ? addPadding(minutes) : minutes;
  seconds = seconds.toString().length === 1 ? addPadding(seconds) : seconds;

  return {"minutes": minutes, "seconds": seconds};
};

function trackChanged () {
  $('artist').innerHTML = Player.currentTrack().property('artist') || 'The Nameless';
  $('song').innerHTML = Player.currentTrack().property('title') || 'Nameless song';
}

function pollingUpdate () {
    var currentPosition = secondsToMinutes(Player.playerPosition());
    $('min').innerHTML = currentPosition.minutes || 0;
    $('sec').innerHTML = currentPosition.seconds || 0;
}