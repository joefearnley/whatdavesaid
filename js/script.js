(function($){
 
  var clips = [
    { filname: "wheres-the-buffet", title: "Where's the Buffet?" },
    { filname: "hot-damn", title: "Hot Damn" },
    { filname: "pansy-immune-system", title: "Pansy Immune System" },
    { filname: "upper-football", title: "Upper Football" },
    { filname: "william-butterfield", title: "William Butterfield" },
    { filname: "smooth-as-silk", title: "Smooth as Silk" },
    { filname: "black-metal", title: "Black Metal" },
    { filname: "large-can-of-beer", title: "Large Can of Beer" },
    { filname: "bought-a-new-part", title: "Bought a New Part" },
    { filname: "who-is-this", title: "Who is this?" },
    { filname: "futons-instead-of-pews", title: "Futons Instead of Pews" },
    { filname: "challenge-to-a-duel", title: "Challenge to a Dual" },
    { filname: "hahaha", title: "Hahahaha" },
    { filname: "where-you-going", title: "Where You Going?" },
    { filname: "pessimistic", title: "Pessimistic" },
    { filname: "clamy-feeling", title: "Clamy Feeling" }
  ];
 
  $(".clip").click(function() {
    var element = $(this);
    var icon = element.children("i");
    icon.removeClass("icon-play").addClass("icon-pause");

    var player = $("#player").jPlayer({
      swfPath: "js/jplayer",
      supplied: "mp3",
    });

    player.jPlayer("setMedia", {
      mp3: "audio/" + element.attr("id") + ".mp3"
    });

    player.jPlayer("play");
    icon.removeClass("icon-pause").addClass("icon-play");

    return false;
  });

})(jQuery);
