/*
 * Author: Joe Fearnley
 */
$(document).ready(function() {
  var clips = ["wheres-the-buffet", "hot-damn", "pansy-immune-system", "upper-football", "challenge-to-a-duel"];
  $.each(clips, function(i, v) {
    var element = $("#" + clips[i]);
    var icon = element.children("i");
    element.click(function() {
      icon.removeClass("icon-play").addClass("icon-pause");
      var player = $("#player").jPlayer({
        swfPath: "jplayer",
        supplied: "mp3",
      });
      player.jPlayer("setMedia", {
        mp3: "audio/" + element.attr("id") + ".mp3"
      });
      player.jPlayer("play");
      icon.removeClass("icon-pause").addClass("icon-play");
    });
  });
});
