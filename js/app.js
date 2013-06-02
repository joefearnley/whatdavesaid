angular.module('wdsApp', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', 
        {
          controller: 'clipController'
          //templateUrl: '../partials/clip.html'
        }
      )
      .otherwise({redirectTo: '/'});
  })
  .controller('clipController', function($scope) {
    $scope.clips = [
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
});

(function ($) {
  $(".clip").click(function() {

    console.log("lasdfjalskfdj");
    /*
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
*/
    return false;
  });
}(jQuery));
