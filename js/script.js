/*
 * Author: Joe Fearnley
 */
$(document).ready(function() {
  $(".clip").click(function() {
    var element = $(this);
    var icon = element.children("i");
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
