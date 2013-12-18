////////////////////////
// FOR FITVID.JS
////////////////////////
$(document).ready(function(){
  // Target your .container, .wrapper, .post, etc.
  $(".videobox").fitVids();
});

////////////////////////
// FOR BUTTON CLICKING
////////////////////////
$(".down-arrow").click(function(){
  $("#bottom").addClass("totop");
  $("#top").addClass("fade");
  Froogaloop( $('iframe')[0] ).api('pause');
});

$(".gotop").click(function(){
  $("#bottom").removeClass("totop");
  $("#top").removeClass("fade");
});

////////////////////////////////////////
//FOR MOUSEWHEEL OR TRACKPAD SCROLLING
////////////////////////////////////////
$('#top')
  .mousewheel(function(event, delta, deltaX, deltaY) {
    var thepos = delta;
    var scrollPos = thepos;
    if (scrollPos < 50) {
      $("#bottom").addClass("totop");
      $("#top").addClass("fade");
      console.log($('#bottom').scrollTop())
      Froogaloop( $('iframe')[0] ).api('pause');
    }
});

$('#bottom')
  .mousewheel(function(event, delta, deltaX, deltaY) {
    var thepos = delta;
    var scrollPos2 = thepos;
      // check if user has scrolled to top of container first
      if ( ( scrollPos2 > 50 ) & ( $('#bottom').scrollTop() == 0 ) ) {
        console.log(scrollPos2);
        $("#bottom").removeClass("totop");
        $("#top").removeClass("fade");
      }
});

////////////////////////
// FOR TOUCH SCROLLING
////////////////////////
// $('#top')
//   .on('swipeup', function(e) {
//     $("#bottom").addClass("totop");
//     $("#top").addClass("fade");
//     Froogaloop( $('iframe')[0] ).api('pause');
//   }
// );

// $('#bottom')
//   .on('swipedown', function(e) {
//     $("#bottom").removeClass("totop");
//     $("#top").removeClass("fade");
//   }
// );

/////////////////////////
// VIMEO API
/////////////////////////

$('iframe#vidplayer')
  .each(function(){
    Froogaloop(this).addEvent('ready', ready);
});

function ready(playerID){
  // Add event listeners
  Froogaloop(playerID).addEvent('play', function(data) {play(playerID);});
  Froogaloop(playerID).addEvent('pause', function(data) {pause(playerID);});
  Froogaloop(playerID).addEvent('finish', function(data) {finish(playerID);});
}

function play(playerID){
  // fade background while playing video
  $('#fadeit').css('background', 'rgba(0, 0, 0, .7)');
}

function pause(playerID){
  // return background to normal while paused
  $('#fadeit').css('background', 'rgba(0, 0, 0, 0)');
}

function finish(playerID){
  // when the video has finished playing, return background to normal
  // and bring up the overlaytext
  $("#bottom").addClass("totop");
  $("#top").addClass("fade");
  $('#fadeit').css('background', 'rgba(0, 0, 0, 0)');
}