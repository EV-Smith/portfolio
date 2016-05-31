

// -----------------------------------------------MY CODE ----------------------------------------------------------

//Thumb 4 Caption Functions
    if (screen.width >= 851) {
      document.getElementById('thumb4').addEventListener('mouseover', displayCaption4);
    }

    if (screen.width >= 851) {
      document.getElementById('thumb4').addEventListener('mouseout', displayThumb4);
    }

    function displayCaption4() {
      document.getElementById('thumbCaption4').style.opacity="1";
      document.getElementById('thumb4').innerHTML = '<img class="thumb" src="images/photography/2015-12_01-overlay.jpg">'; 
    }

    function displayThumb4() {
      document.getElementById('thumb4').innerHTML = '<img class="thumb" src="images/photography/2015-12_01.jpg">'; 
      document.getElementById('thumbCaption4').style.opacity="0";
    }
    
    //Thumb 3 Caption Functions
    if (screen.width >= 851) {
      document.getElementById('thumb3').addEventListener('mouseover', displayCaption3);
    }

    if (screen.width >= 851) {
      document.getElementById('thumb3').addEventListener('mouseout', displayThumb3);
    }

    function displayCaption3() {
      document.getElementById('thumb3').innerHTML = '<img class="thumb" src="images/photography/halloween-2015-02-overlay.jpg">'; 
      document.getElementById('thumbCaption3').style.opacity="1";
    }
    function displayThumb3() {
      document.getElementById('thumb3').innerHTML = '<img class="thumb" src="images/photography/halloween-2015-02.jpg">'; 
      document.getElementById('thumbCaption3').style.opacity="0";
    }
    
    //Thumb 2 Caption Functions
     if (screen.width >= 851) {
      document.getElementById('thumb2').addEventListener('mouseover', displayCaption2);
    }

    if (screen.width >= 851) {
      document.getElementById('thumb2').addEventListener('mouseout', displayThumb2);
    }

    function displayCaption2() {
      document.getElementById('thumb2').innerHTML = '<img class="thumb" src="images/photography/2015-07-04_01-overlay.jpg">'; 
      document.getElementById('thumbCaption2').style.opacity="1";
    }
    function displayThumb2() {
      document.getElementById('thumb2').innerHTML = '<img class="thumb" src="images/photography/2015-07-04_01.JPG">'; 
      document.getElementById('thumbCaption2').style.opacity="0";
    }
    
    //Thumb 1 Caption Functions
     if (screen.width >= 851) {
      document.getElementById('thumb1').addEventListener('mouseover', displayCaption1);
    }

    if (screen.width >= 851) {
      document.getElementById('thumb1').addEventListener('mouseout', displayThumb1);
    }

    function displayCaption1() {
      document.getElementById('thumb1').innerHTML = '<img class="thumb" src="images/photography/oregon-coast-01-overlay.jpg">'; 
      document.getElementById('thumbCaption1').style.opacity="1";
    }
    function displayThumb1() {
      document.getElementById('thumb1').innerHTML = '<img class="thumb" src="images/photography/oregon-coast-01.JPG">'; 
      document.getElementById('thumbCaption1').style.opacity="0";
    }

//code from http://blog.teamtreehouse.com/building-custom-controls-for-html5-videos
      // Video
      var video = document.getElementById("video");

      // Buttons
      var playButton = document.getElementById("play-pause");
      var muteButton = document.getElementById("mute");
      var fullScreenButton = document.getElementById("full-screen");

      // Sliders
      var seekBar = document.getElementById("seek-bar");
      var volumeBar = document.getElementById("volume-bar");

    
    // Event listener for the play/pause button
    playButton.addEventListener("click", function(){
      if (video.paused == true) {
      // Play the video
      video.play();
       // Update the button Pause
      playButton.innerHTML = '<i class="fa fa-pause-circle fa-5x" aria-hidden="true" id="play-pause"></i>';
      } else {
      // Pause the video
      video.pause();
      // Update the button text to 'Play'
      playButton.innerHTML = '<i class="fa fa-play-circle fa-5x" aria-hidden="true" id="play-pause"></i>';  
     }
    });

    playButton.addEventListener("mouseover", function(){
          if (video.paused == true) {
          playButton.innerHTML = '<i class="fa fa-pause-circle fa-5x" aria-hidden="true" id="play-pause"></i>';
          } else {
          playButton.innerHTML = '<i class="fa fa-play-circle fa-5x" aria-hidden="true" id="play-pause"></i>';
         }
        });
  

  

    // Event listener for the mute button
      muteButton.addEventListener("click", function() {
        if (video.muted == false) {
          // Mute the video
          video.muted = true;

          // Update the button text
          muteButton.innerHTML = "Unmute";
        } else {
          // Unmute the video
          video.muted = false;

          // Update the button text
          muteButton.innerHTML = "Mute";
        }
      });

       muteButton.addEventListener("mouseover", function(){
          if (video.muted == true) {
          muteButton.innerHTML = '<i class="fa fa-volume-up fa-2x" aria-hidden="true" id="mute"></i>';
          } else {
          muteButton.innerHTML = '<i class="icon-volume-off icon-5x" aria-hidden="true" id="mute"></i>';
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
