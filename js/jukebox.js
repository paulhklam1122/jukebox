// document.addEventListener("DOMContentLoaded", function() {
document.addEventListener("DOMContentLoaded", function() {
  var parseNote = function(arraySong) {
    noteArray = arraySong.split("*");
    notesObject = {};
    for (var i = 0; i < noteArray.length; i++) {
      if (noteArray.length === 1) {
        notesObject["pitch"] = noteArray[0];
        notesObject["beats"] = 1;
      }
      else {
        notesObject["pitch"] = noteArray[0];
        notesObject["beats"] = noteArray[1];
      }
    }
    return notesObject;
  };

  var parseSong = function(song) {
    var parsed = [];
    var arraySong = song.split(" ");
    for(i = 0; i < arraySong.length; i++) {
      parsed.push(parseNote(arraySong[i]));
    }
    return parsed;
  };

  var playNextSong = function() {
    if (songList.length >= 1) {
      $('#now-playing').html('Now Playing: ' + nameList[0]);
      var song = parseSong(songList.shift());
      var name = parseSong(nameList.shift());
      var songNote = songList.shift();
      var songName = nameList.shift();
      $('#name-display').html(nameList.join(" "));
      playSong(song, 400, onComplete);
    } else {
      $('#name-display').html("");
      $('#play-button').toggle(500);
      $('#play-button').html('Play').attr('disabled', false);
      $('#now-playing').html('Enter a song to play!');
      $('#now-playing2').html('');
      $('#song-display').html('');
    }
  };

  $(document).ready(function(){
    $(document).keypress(function(event){
      var charCode = event.which;
      var key = String.fromCharCode(charCode);
      var invalid = $(document.activeElement).hasClass('name');
      var invalid2 = $(document.activeElement).hasClass('notes');
      if (key === ' ' && !invalid && !invalid2) {
        $('#play-button').html('Playing...').attr('disabled', true);
        $('#play-button').toggle(500);
        playNextSong();
      }
    });
    $('#play-button').click(function(){
      $(this).html('Playing...').attr('disabled', true);
      $(this).toggle(500);
      // var song = prompt("Please enter some notes and beats with spaces(i.e. A*1 B*4)");
      // for (var i = 0; i < songList.length; i++) {
      //   notes = songList[i];
      //   console.log(notes);
      //   playSong(parseSong(songList[i]), 400, onComplete);
      //   $(this).html('Playing...').attr('disabled', true);
      // }
      // songList = [];
      playNextSong();
    });
  });
  // onComplete();
// console.log(parseSong("A*5 B*6 C#*6"));

function onComplete() {
//   var song = prompt("Please enter some notes and beats with spaces(i.e. A*1 B*4)");
  // playSong(parseSong(song), 400, onComplete);
  $('#play-button').html('Play').attr('disabled', false);
  playNextSong();
}
// onComplete();
});

// input = ["A*5 B*2 C#*7 D"]
// arraySong = ["A*5", "B*2", "C#*7", "D"]
// song = [["A", 5], ["B", 2], ["C#", 7],["D"]]
// notesObject = {pitch: "A", beats: 5} {pitch: "B", beats: 2} {pitch: "C#", beats: 7} {pitch: "D", beats: 1}
// arraySong = [{pitch: "A", beats: 5}, {pitch: "B", beats: 2}, {pitch: "C#", beats: 7}, {pitch: "D", beats: 1}]
