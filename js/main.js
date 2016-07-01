var songList = [];
var nameList = [];
$(document).ready(function(){
  $('input:submit').click(function(e) {
    // e.preventDefault();
    nameList.push($('input:text').val());
    songList.push($('textarea').val());
    for (i = 0; i < nameList.length; i++) {
      $('#name-display').html(nameList.join(" "));
    }
    for (i = 0; i < songList.length; i++) {
      $('#song-display').html(songList.join(" "));
    }
    // for (var i = 0; i < songList.length; i++) {
    //   $('#song-display').html(songList[i].key().join(' '));
    // }
    $('input:text').val("");
    $('textarea').val("");
  });
  $('#name-display').mouseenter(function(){
    $('#song-display').fadeIn(500);
  });
  $('#name-display').mouseleave(function(){
    $('#song-display').fadeOut(500);
  });
});
