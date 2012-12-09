$(document).ready(function() {

  var Clip = Backbone.Model.extend({
    filename: "",
    title: ""
  });

  var ClipList = Backbone.Collection.extend({
  });

  var clips = [
    { "wheres-the-buffet", "Where's the Buffet?" },
    { "hot-damn", "Hot Damn" },
    { "pansy-immune-system", "Pansy Immune System" },
    { "upper-football", "Upper Football" },
    { "william-butterfield", "William Butterfield" },
    { "smooth-as-silk", "Smooth as Silk" },
    { "black-metal", "Black Metal" },
    { "large-can-of-beer", "Large Can of Beer" },
    { "bought-a-new-part", "Bought a New Part" },
    { "who-is-this", "Who is this?" },
    { "futons-instead-of-pews", "Futons Instead of Pews" },
    { "challenge-to-a-duel", "Challenge to a Dual" },
    { "hahaha","Hahahaha," },
    { "where-you-going", "Where You Going?" },
    { "pessimistic", "Pessimistic" },
    { "clamy-feeling", "Clamy Feeling" }
  ];

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

