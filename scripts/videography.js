//code from http://blog.teamtreehouse.com/building-custom-controls-for-html5-videos
      // Video
      var video = document.getElementById("video");
      
      // Video Controls
      var videoControls = document.getElementById("video-controls");

      // Buttons
      var playButton = document.getElementById("play-pause");
      var muteButton = document.getElementById("mute");
      var fullScreenButton = document.getElementById("full-screen");

      // Sliders
      var seekBar = document.getElementById("seek-bar");
      var volumeBar = document.getElementById("volume-bar");

      // Containers
      var playContainer = document.getElementById("play-pause-container");

    
    //Display controls on hover
    videoControls.addEventListener("mouseenter", function(){
      videoControls.style.opacity="1";
    });

    videoControls.addEventListener("mouseleave", function(){
      //keep controls on when video is paused
      if (video.paused == true) {
      videoControls.style.opacity="1";
      } else {
      // hide controls when video is playing
      videoControls.style.opacity="0";
     }
    });
                        

    // Event listener for the play/pause button
    playButton.addEventListener("click", function(){
      if (video.paused == true) {
      // Play the video
      video.play();
      videoControls.style.opacity="0";
      } else {
      // Pause the video
      video.pause();
     }
    });

    playButton.addEventListener("mouseover", function(){
      if (video.paused == true) {
      playButton.className = "fa fa-play-circle fa-5x";
      } else {
      playButton.className = "fa fa-pause-circle fa-5x";
      }
    });

  playButton.addEventListener("mouseleave", function(){
      if (video.paused == true) {
      playButton.className = "fa fa-play-circle fa-5x";
      } else {
      playButton.className = "fa fa-play-circle fa-5x";
      }
    });
 
  

  

    // Event listener for the mute button
      muteButton.addEventListener("click", function() {
        if (video.muted == false) {
          // Mute the video
          video.muted = true;

          // Update the button text
          muteButton.className = "fa fa-volume-off fa-2x";
        } else {
          // Unmute the video
          video.muted = false;

          // Update the button text
          muteButton.className = "fa fa-volume-up fa-2x";
        }
      });

      


      // Event listener for the full-screen button
      fullScreenButton.addEventListener("click", function() {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen(); // Chrome and Safari
        }
      });

    // Event listener for the seek bar
    seekBar.addEventListener("change", function() {
      // Calculate the new time
      var time = video.duration * (seekBar.value / 100);

      // Update the video time
      video.currentTime = time;
    });

    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;

      // Update the slider value
      seekBar.value = value;
    });

    // Pause the video when the slider handle is being dragged
    seekBar.addEventListener("mousedown", function() {
      video.pause();
    });

    // Play the video when the slider handle is dropped
    seekBar.addEventListener("mouseup", function() {
      video.play();
    });
  
    // Event listener for the volume bar
    volumeBar.addEventListener("change", function() {
      // Update the video volume
      video.volume = volumeBar.value;
    });
