    function move_div() {
       window_width = $(window).width();
       window_height = $(window).height();

      
       obj_width = $('#verycenter').width();
       obj_height = $('#verycenter').height();
     

    $('#verycenter').css('top', (window_height / 2)- (obj_height / 2) ).css('left', (window_width / 2) - (obj_width / 2) );
   }

    $(window).resize(function(){
    move_div();
   });
   move_div();
    
        

  function audioPlayer(){
      // create the function//
      var currentSong = 0;
      // setting the varibale value//
      $("#audioPlayer")[0].src = $("playlist li a")[0];
      // take sthe first link of the audioplayer//
      $("#audioPlayer")[0].play();
      // play automaticly on load of page//
      $("#playlist li a").click(function(e){
      // click funtion on the list items//
         e.preventDefault(); 
      // prevents from taking to link page (new page) //
         $("#audioPlayer")[0].src = this;
      // grabe sthe source and put it in player//
         $("#audioPlayer")[0].play();
      // play automaticly on click to playlist items//
         $("#playlist li").removeClass("current-song");
      // removes the blue style of link//
          currentSong = $(this).parent().index();
      // get the list index from the parent//
          $(this).parent().addClass("current-song");
      // adds the blue color to the link ccurent song//
          $("#logo1").addClass("spin-cw");
          $("#logo2").addClass("spin-ccw");
      //adds the spin class

      });

      $("#audioPlayer")[0].addEventListener("ended", function(){
      // play the next song of the playlist by index increase//
         currentSong++;
      // increase the current song by one//            
          if(currentSong == $("#playlist li a").length)
      // checks the end of the playlist//
              currentSong = 0;
      // takes to start of playlist//
          $("#playlist li").removeClass("current-song");
      // removing the focus from the ended song//
          $("#playlist li:eq("+currentSong+")").addClass("current-song");
      // choosing the song from the playlist//
          $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
      // setting the new song and grab the current song//
          $("#audioPlayer")[0].play();
      // playing the selected song from the list//
      });
  }



var vid = document.getElementById("audioPlayer");
function pause() { 
    $("#logo1").removeClass("spin-cw");
    $("#logo2").removeClass("spin-ccw");
    $("#beat").removeClass("pulse");
    $("#play").removeClass("glyphicon glyphicon-play");
    $("#pause").addClass("glyphicon glyphicon-pause");
} 
function play() { 
    $("#logo1").addClass("spin-cw");
    $("#logo2").addClass("spin-ccw");
    $("#beat").addClass("pulse");
    $("#play").addClass("glyphicon glyphicon-play");
    $("#pause").removeClass("glyphicon glyphicon-pause");
    addPulse();
}
function addPulse() {
  var duration = $('.current-song').data('duration');
  $(".pulse").css("-webkit-animation-duration" , duration);
}
function load(){
  $(".overlay").fadeIn("slow");
  $(".navigate").fadeIn("slow");
} 

vid.onpause = pause;
vid.onplay = play;
vid.onloadeddata = load;


$("#toggle").click( function() {

    if (vid.paused){
      vid.play()
    }
    else{
      vid.pause();
    }
});




$("#Next").click(function(){
$('.current-song').next().find('a').click();
});


$("#Prev").click(function(){
$('.current-song').prev().find('a').click();
});