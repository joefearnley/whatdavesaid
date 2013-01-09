(function($){

  var clips = [
    {
      filname: "wheres-the-buffet",
      title: "Where's the Buffet?"
    },
    {
      filname: "hot-damn",
      title: "Hot Damn"
    },
    {
      filname: "pansy-immune-system",
      title: "Pansy Immune System"
    },
    {
      filname: "upper-football",
      title: "Upper Football"
    },
    {
      filname: "william-butterfield",
      title: "William Butterfield"
    },
    {
      filname: "smooth-as-silk",
      title: "Smooth as Silk"
    },
    {
      filname: "black-metal",
      title: "Black Metal"
    },
    {
      filname: "large-can-of-beer",
      title: "Large Can of Beer"
    },
    {
      filname: "bought-a-new-part",
      title: "Bought a New Part"
    },
    {
      filname: "who-is-this",
      title: "Who is this?"
    },
    {
      filname: "futons-instead-of-pews",
      title: "Futons Instead of Pews"
    },
    {
      filname: "challenge-to-a-duel",
      title: "Challenge to a Dual"
    },
    {
      filname: "hahaha",
      title: "Hahahaha"
    },
    {
      filname: "where-you-going",
      title: "Where You Going?"
    },
    {
      filname: "pessimistic",
      title: "Pessimistic"
    },
    {
      filname: "clamy-feeling",
      title: "Clamy Feeling"
    }
  ];

  var Clip = Backbone.Model.extend({
    filename: "",
    title: ""
  });

  var ClipList = Backbone.Collection.extend({
    model: Clip
  });

  var ClipView = Backbone.View.extend({
    el: $("#clips"),
    template: $('#clip-template').html(),
    initialize: function() {
      this.collection = new ClipList(clips);
      this.renderClips();
    },
    renderClips: function() {
      var that = this;
      $.each(this.collection.models, function(i, clip) {
        var html = Mustache.to_html(that.template, clip.toJSON());
        $(that.el).append(html);
      });
    },
    renderRow: function() {
    },
    renderClip: function(clip) {
    }
  });

  var clipView = new ClipView();

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

})(jQuery);
