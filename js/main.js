$(document).ready(function() {

    var player = $("#player").jPlayer({
      preload: "auto",
      swfPath: "swf",
      supplied: "mp3",
      solution:"flash,html",
    /*
      ready: function() {
        icon.removeClass("icon-play").addClass("icon-pause");
        console.log("play to pause");
      },
      */
      ended: function() {
        icon.removeClass("icon-pause").addClass("icon-play");
        console.log("pause to play");
        $(".clip").children("i").removeClass("icon-pause").addClass("icon-play");
      }
    });

  $(".clip").click(function() {
    var element = $(this);
    var icon = element.children("i");
    console.log("adding pause");
    icon.removeClass("icon-play").addClass("icon-pause");
    //icon.addClass("icon-pause");

    player.jPlayer("setMedia", {
      mp3: "audio/" + element.attr("id") + ".mp3"
    });

    player.jPlayer("play", function() {
      console.log("player done asdfasdf");
      icon.removeClass("icon-pause").addClass("icon-play");
    });

    //console.log("adding play");
    //icon.removeClass("icon-pause").addClass("icon-play");
    //
    //return false;
  });
});

