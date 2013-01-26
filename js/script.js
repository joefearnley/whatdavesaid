$(document).ready(function() {

  var Clip = Backbone.Model.extend({
    filename: "",
    title: ""
  });

  var ClipList = Backbone.Collection.extend({
    model: Clip
  });

  var ClipView = Backbone.View.extend({
    el: $("#clips"),
    clipTemplate: $("#clip-template").html(),
    rowTemplate: $("#row-template").html(),
    initialize: function(options) {
      this.collection = new ClipList(options.clips);
      this.renderClips();
    },
    renderClips: function() {

      var clips = [];
      var that = this;
      $.each(this.collection.models, function(i, clip) {
        clips.push(clip);

        var index = i + 1;
        if(index % 4 === 0) {

          // render the row of clips
          var clipsHtml = "";
          $.each(clips, function(i, clip) {
            var html = Mustache.to_html(that.clipTemplate, clip.toJSON());
            clipsHtml += html;
          });

          // put it all together and render the row
          var rowHtml = Mustache.to_html(that.rowTemplate, { html: clipsHtml });
          $(that.el).append(rowHtml);

          // clear clips array
          clips = [];
        }
      });
    }
  });

  var clips = [
    { filename: "wheres-the-buffet", title: "Where's the Buffet?" },
    { filename: "hot-damn", title: "Hot Damn" },
    { filename: "pansy-immune-system", title: "Pansy Immune System" },
    { filename: "upper-football", title: "Upper Football" },
    { filename: "william-butterfield", title: "William Butterfield" },
    { filename: "smooth-as-silk", title: "Smooth as Silk" },
    { filename: "black-metal", title: "Black Metal" },
    { filename: "large-can-of-beer", title: "Large Can of Beer" },
    { filename: "bought-a-new-part", title: "Bought a New Part" },
    { filename: "who-is-this", title: "Who is this?" },
    { filename: "futons-instead-of-pews", title: "Futons Instead of Pews" },
    { filename: "challenge-to-a-duel", title: "Challenge to a Dual" },
    { filename: "hahaha", title: "Hahahaha" },
    { filename: "where-you-going", title: "Where You Going?" },
    { filename: "pessimistic", title: "Pessimistic" },
    { filename: "clamy-feeling", title: "Clamy Feeling" }
  ];

  var clipView = new ClipView({
    clips: clips
  });

  $(".clip").click(function() {
    var element = $(this);
    var icon = element.children("i");
    icon.removeClass("icon-play").addClass("icon-pause");

    var player = $("#player").jPlayer({
      swfPath: "js/jplayer",
      supplied: "mp3"
    });

    player.bind($.jPlayer.event.playing, function() {
        icon.removeClass("icon-play").addClass("icon-pause"); 
    });

    player.bind($.jPlayer.event.ended, function() {
      icon.removeClass("icon-pause").addClass("icon-play");
      player.unbind($.jPlayer.event.playing);
      player.unbind($.jPlayer.event.ended);

    });

    player.jPlayer("setMedia", {
      mp3: "audio/" + element.attr("id") + ".mp3"
    }).jPlayer("play");

    return false;
  });

});
