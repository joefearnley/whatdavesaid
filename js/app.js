(function ($) {

  $.get('partials/clip.html', function(templates) {

    var clips = [
      { 
        filename: "wheres-the-buffet",
        title: "Where's the Buffet?"
      },{
        filename: "hot-damn",
        title: "Hot Damn"
      },{
        filename: "pansy-immune-system",
        title: "Pansy Immune System"
      },{
        filename: "upper-football",
        title: "Upper Football"
      },{
        filename: "william-butterfield",
        title: "William Butterfield"
      },{
        filename: "smooth-as-silk",
        title: "Smooth as Silk"
      },{
        filename: "black-metal",
        title: "Black Metal"
      },{
        filename: "large-can-of-beer",
        title: "Large Can of Beer"
      },{
        filename: "bought-a-new-part",
        title: "Bought a New Part"
      },{
        filename: "who-is-this",
        title: "Who is this?"
      },{
        filename: "futons-instead-of-pews",
        title: "Futons Instead of Pews"
      },{
        filename: "challenge-to-a-duel",
        title: "Challenge to a Dual"
      },{
        filename: "hahaha",
        title: "Hahahaha"
      },{
        filename: "where-you-going",
        title: "Where You Going?"
      },{
        filename: "pessimistic",
        title: "Pessimistic"
      },{
        filename: "clamy-feeling",
        title: "Clamy Feeling"
      }
    ];

    var clipsElement = $("#clips");
	  var clipTemplate = $(templates).filter("#clip-template").html();

    // load clips into body....
	  $.each(clips, function(i, clip) {
	    var html = Mustache.to_html(clipTemplate, clip);
	    clipsElement.append(html);
	  });

    // find main player
    var p = $(".player");
    p.addClass("stopped");

    // watch for click
    $(".clip").click(function() {
      var element = $(this);
      var icon = element.children("i");

      var player = $("#player").jPlayer({
        swfPath: "js/jplayer",
        supplied: "mp3"
      });

      player.bind($.jPlayer.event.playing, function() {
        p.removeClass("stopped").addClass("playing");
      });

      player.bind($.jPlayer.event.ended, function() {
        player.unbind($.jPlayer.event.playing);
        player.unbind($.jPlayer.event.ended);
        p.removeClass("playing").addClass("stopped");
      });

      player.jPlayer("setMedia", {
        mp3: "audio/" + element.attr("id") + ".mp3"
      }).jPlayer("play");

      return false;
    });
  });
}(jQuery));
