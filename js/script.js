/*
 * Author: Joe Fearnley
 */

$(document).ready(function() {
  $("#wheres-the-buffet").click(function() {

    $("#wheres-the-buffet").children("i").removeClass("icon-play").addClass("icon-pause");
    playSound($(this));
    //$(this).children("i").removeClass("icon-pause").addClass("icon-play");
  });

  $("#hot-damn").click(function() { playSound($(this)); });
  $("#pansy-immune-system").click(function() { playSound($(this)); });
  $("#upper-football").click(function() { playSound($(this)); });
  $("#challenge-to-a-duel").click(function() { playSound($(this)); });
});

function playSound(element) {
  var player = $("#player").jPlayer({
    swfPath: "jplayer",
    supplied: "mp3",
  });

  player.jPlayer("setMedia", {
    mp3: "audio/" + element.attr("id") + ".mp3"
  });

  console.log(element.children("i").attr("class"));

  element.children("i").removeClass("icon-play").addClass("icon-pause");
  player.jPlayer("play");
  element.children("i").removeClass("icon-pause").addClass("icon-play");
}
