//base code from http://blog.teamtreehouse.com/building-custom-controls-for-html5-videos
// ----------------VIDEO 4 CONTROLS CODE---------------------------------------------------------------------------------------------------     
  // Video 4
      var video4 = document.getElementById("video4");
      
      // Video Controls 4
      var videoControls4 = document.getElementById("video-controls4");

      // Buttons for Video 4
      var playButton4 = document.getElementById("play-pause4");
      var muteButton4 = document.getElementById("mute4");
      var fullScreenButton4 = document.getElementById("full-screen4");

      // Sliders for Video 4
      var seekBar4 = document.getElementById("seek-bar4");
      var volumeBar4 = document.getElementById("volume-bar4");

      // Containers for Vido 4
      var playContainer4 = document.getElementById("play-pause-container4");

    
    //Display Video 4 controls on hover
    videoControls4.addEventListener("mouseenter", function(){
      videoControls4.style.opacity="1";
    });

    videoControls4.addEventListener("mouseleave", function(){
      //keep controls on when video is paused
      if (video4.paused == true) {
      videoControls4.style.opacity="1";
      } else {
      // hide controls when video is playing
      videoControls4.style.opacity="0";
     }
    });
                        

    // Event listener for the play/pause button
    playButton4.addEventListener("click", function(){
      if (video4.paused == true) {
      // Play the video
      video4.play();
      videoControls4.style.opacity="0";
      } else {
      // Pause the video
      video4.pause();
     }
    });

    playButton4.addEventListener("mouseover", function(){
      if (video4.paused == true) {
      playButton4.className = "fa fa-play-circle fa-5x";
      } else {
      playButton4.className = "fa fa-pause-circle fa-5x";
      }
    });

  playButton4.addEventListener("mouseleave", function(){
      if (video4.paused == true) {
      playButton4.className = "fa fa-play-circle fa-5x";
      } else {
      playButton4.className = "fa fa-play-circle fa-5x";
      }
    });
 
  

  

    // Event listener for the mute button
      muteButton4.addEventListener("click", function() {
        if (video4.muted == false) {
          // Mute the video
          video4.muted = true;
          // Update the button text
          muteButton4.className = "fa fa-volume-off fa-2x mute";
          //Move thumb to far left
          volumeBar4.value = "0";
          
        } else {
          // Unmute the video
          video4.muted = false;
          // Update the button text
          muteButton4.className = "fa fa-volume-up fa-2x mute";
          //Move thumb to far right
          volumeBar4.value = "100";
        }
      });

      


      // Event listener for the full-screen button
      fullScreenButton4.addEventListener("click", function() {
        if (video4.requestFullscreen) {
          video4.requestFullscreen();
        } else if (video4.mozRequestFullScreen) {
          video4.mozRequestFullScreen(); // Firefox
        } else if (video4.webkitRequestFullscreen) {
          video4.webkitRequestFullscreen(); // Chrome and Safari
        }
      });

    // Event listener for the seek bar
    seekBar4.addEventListener("change", function() {
      // Calculate the new time
      var time4 = video4.duration * (seekBar4.value / 100);

      // Update the video time
      video4.currentTime = time4;
    });

    // Update the seek bar as the video plays
    video4.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value4 = (100 / video4.duration) * video4.currentTime;

      // Update the slider value
      seekBar4.value = value4;
    });

    // Pause the video when the slider handle is being dragged
    seekBar4.addEventListener("mousedown", function() {
      video4.pause();
    });

    // Play the video when the slider handle is dropped
    seekBar4.addEventListener("mouseup", function() {
      video4.play();
    });
  
    // Event listener for the volume bar
    volumeBar4.addEventListener("change", function() {
      // Update the video volume
      video4.volume = volumeBar4.value;
    });

    


// ----------------VIDEO 3 CONTROLS CODE---------------------------------------------------------------------------------------------------     
  // Video 3
      var video3 = document.getElementById("video3");
      
      // Video Controls 3
      var videoControls3 = document.getElementById("video-controls3");

      // Buttons for Video 3
      var playButton3 = document.getElementById("play-pause3");
      var muteButton3 = document.getElementById("mute3");
      var fullScreenButton3 = document.getElementById("full-screen3");

      // Sliders for Video 3
      var seekBar3 = document.getElementById("seek-bar3");
      var volumeBar3 = document.getElementById("volume-bar3");

      // Containers for Vido 3
      var playContainer3 = document.getElementById("play-pause-container3");

    
    //Display Video 3 controls on hover
    videoControls3.addEventListener("mouseenter", function(){
      videoControls3.style.opacity="1";
    });

    videoControls3.addEventListener("mouseleave", function(){
      //keep controls on when video is paused
      if (video3.paused == true) {
      videoControls3.style.opacity="1";
      } else {
      // hide controls when video is playing
      videoControls3.style.opacity="0";
     }
    });
                        

    // Event listener for the play/pause button
    playButton3.addEventListener("click", function(){
      if (video3.paused == true) {
      // Play the video
      video3.play();
      videoControls3.style.opacity="0";
      } else {
      // Pause the video
      video3.pause();
     }
    });

    playButton3.addEventListener("mouseover", function(){
      if (video3.paused == true) {
      playButton3.className = "fa fa-play-circle fa-5x";
      } else {
      playButton3.className = "fa fa-pause-circle fa-5x";
      }
    });

  playButton3.addEventListener("mouseleave", function(){
      if (video3.paused == true) {
      playButton3.className = "fa fa-play-circle fa-5x";
      } else {
      playButton3.className = "fa fa-play-circle fa-5x";
      }
    });
 
  

  

    // Event listener for the mute button
      muteButton3.addEventListener("click", function() {
        if (video3.muted == false) {
          // Mute the video
          video3.muted = true;
          // Update the button text
          muteButton3.className = "fa fa-volume-off fa-2x mute";
          //Move thumb to far left
          volumeBar3.value = "0";
          
        } else {
          // Unmute the video
          video3.muted = false;
          // Update the button text
          muteButton3.className = "fa fa-volume-up fa-2x mute";
          //Move thumb to far right
          volumeBar3.value = "100";
        }
      });

      


      // Event listener for the full-screen button
      fullScreenButton3.addEventListener("click", function() {
        if (video3.requestFullscreen) {
          video3.requestFullscreen();
        } else if (video3.mozRequestFullScreen) {
          video3.mozRequestFullScreen(); // Firefox
        } else if (video3.webkitRequestFullscreen) {
          video3.webkitRequestFullscreen(); // Chrome and Safari
        }
      });

    // Event listener for the seek bar
    seekBar3.addEventListener("change", function() {
      // Calculate the new time
      var time3 = video3.duration * (seekBar3.value / 100);

      // Update the video time
      video3.currentTime = time3;
    });

    // Update the seek bar as the video plays
    video3.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value3 = (100 / video3.duration) * video3.currentTime;

      // Update the slider value
      seekBar3.value = value3;
    });

    // Pause the video when the slider handle is being dragged
    seekBar3.addEventListener("mousedown", function() {
      video3.pause();
    });

    // Play the video when the slider handle is dropped
    seekBar3.addEventListener("mouseup", function() {
      video3.play();
    });
  
    // Event listener for the volume bar
    volumeBar3.addEventListener("change", function() {
      // Update the video volume
      video3.volume = volumeBar3.value;
    });



// ----------------VIDEO 2 CONTROLS CODE---------------------------------------------------------------------------------------------------     
  // Video 2
      var video2 = document.getElementById("video2");
      
      // Video Controls 2
      var videoControls2 = document.getElementById("video-controls2");

      // Buttons for Video 2
      var playButton2 = document.getElementById("play-pause2");
      var muteButton2 = document.getElementById("mute2");
      var fullScreenButton2 = document.getElementById("full-screen2");

      // Sliders for Video 2
      var seekBar2 = document.getElementById("seek-bar2");
      var volumeBar2 = document.getElementById("volume-bar2");

      // Containers for Vido 2
      var playContainer2 = document.getElementById("play-pause-container2");

    
    //Display Video 2 controls on hover
    videoControls2.addEventListener("mouseenter", function(){
      videoControls2.style.opacity="1";
    });

    videoControls2.addEventListener("mouseleave", function(){
      //keep controls on when video is paused
      if (video2.paused == true) {
      videoControls2.style.opacity="1";
      } else {
      // hide controls when video is playing
      videoControls2.style.opacity="0";
     }
    });
                        

    // Event listener for the play/pause button
    playButton2.addEventListener("click", function(){
      if (video2.paused == true) {
      // Play the video
      video2.play();
      videoControls2.style.opacity="0";
      } else {
      // Pause the video
      video2.pause();
     }
    });

    playButton2.addEventListener("mouseover", function(){
      if (video2.paused == true) {
      playButton2.className = "fa fa-play-circle fa-5x";
      } else {
      playButton2.className = "fa fa-pause-circle fa-5x";
      }
    });

  playButton2.addEventListener("mouseleave", function(){
      if (video2.paused == true) {
      playButton2.className = "fa fa-play-circle fa-5x";
      } else {
      playButton2.className = "fa fa-play-circle fa-5x";
      }
    });
 
  

  

    // Event listener for the mute button
      muteButton2.addEventListener("click", function() {
        if (video2.muted == false) {
          // Mute the video
          video2.muted = true;
          // Update the button text
          muteButton2.className = "fa fa-volume-off fa-2x mute";
          //Move thumb to far left
          volumeBar2.value = "0";
          
        } else {
          // Unmute the video
          video2.muted = false;
          // Update the button text
          muteButton2.className = "fa fa-volume-up fa-2x mute";
          //Move thumb to far right
          volumeBar2.value = "100";
        }
      });

      


      // Event listener for the full-screen button
      fullScreenButton2.addEventListener("click", function() {
        if (video2.requestFullscreen) {
          video2.requestFullscreen();
        } else if (video2.mozRequestFullScreen) {
          video2.mozRequestFullScreen(); // Firefox
        } else if (video2.webkitRequestFullscreen) {
          video2.webkitRequestFullscreen(); // Chrome and Safari
        }
      });

    // Event listener for the seek bar
    seekBar2.addEventListener("change", function() {
      // Calculate the new time
      var time2 = video2.duration * (seekBar2.value / 100);

      // Update the video time
      video2.currentTime = time2;
    });

    // Update the seek bar as the video plays
    video2.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value2 = (100 / video2.duration) * video2.currentTime;

      // Update the slider value
      seekBar2.value = value2;
    });

    // Pause the video when the slider handle is being dragged
    seekBar2.addEventListener("mousedown", function() {
      video2.pause();
    });

    // Play the video when the slider handle is dropped
    seekBar2.addEventListener("mouseup", function() {
      video2.play();
    });
  
    // Event listener for the volume bar
    volumeBar2.addEventListener("change", function() {
      // Update the video volume
      video2.volume = volumeBar2.value;
    });



// ----------------VIDEO 1 CONTROLS CODE---------------------------------------------------------------------------------------------------     
   // Video 1
      var video1 = document.getElementById("video1");
      
      // Video Controls 1
      var videoControls1 = document.getElementById("video-controls1");

      // Buttons for Video 1
      var playButton1 = document.getElementById("play-pause1");
      var muteButton1 = document.getElementById("mute1");
      var fullScreenButton1 = document.getElementById("full-screen1");

      // Sliders for Video 1
      var seekBar1 = document.getElementById("seek-bar1");
      var volumeBar1 = document.getElementById("volume-bar1");

      // Containers for Vido 1
      var playContainer1 = document.getElementById("play-pause-container1");

    
    //Display Video 1 controls on hover
    videoControls1.addEventListener("mouseenter", function(){
      videoControls1.style.opacity="1";
    });

    videoControls1.addEventListener("mouseleave", function(){
      //keep controls on when video is paused
      if (video1.paused == true) {
      videoControls1.style.opacity="1";
      } else {
      // hide controls when video is playing
      videoControls1.style.opacity="0";
     }
    });
                        

    // Event listener for the play/pause button
    playButton1.addEventListener("click", function(){
      if (video1.paused == true) {
      // Play the video
      video1.play();
      videoControls1.style.opacity="0";
      } else {
      // Pause the video
      video1.pause();
     }
    });

    playButton1.addEventListener("mouseover", function(){
      if (video1.paused == true) {
      playButton1.className = "fa fa-play-circle fa-5x";
      } else {
      playButton1.className = "fa fa-pause-circle fa-5x";
      }
    });

  playButton1.addEventListener("mouseleave", function(){
      if (video1.paused == true) {
      playButton1.className = "fa fa-play-circle fa-5x";
      } else {
      playButton1.className = "fa fa-play-circle fa-5x";
      }
    });
 
  

  

    // Event listener for the mute button
      muteButton1.addEventListener("click", function() {
        if (video1.muted == false) {
          // Mute the video
          video1.muted = true;
          // Update the button text
          muteButton1.className = "fa fa-volume-off fa-2x mute";
          //Move thumb to far left
          volumeBar1.value = "0";
          
        } else {
          // Unmute the video
          video1.muted = false;
          // Update the button text
          muteButton1.className = "fa fa-volume-up fa-2x mute";
          //Move thumb to far right
          volumeBar1.value = "100";
        }
      });

      


      // Event listener for the full-screen button
      fullScreenButton1.addEventListener("click", function() {
        if (video1.requestFullscreen) {
          video1.requestFullscreen();
        } else if (video1.mozRequestFullScreen) {
          video1.mozRequestFullScreen(); // Firefox
        } else if (video1.webkitRequestFullscreen) {
          video1.webkitRequestFullscreen(); // Chrome and Safari
        }
      });

    // Event listener for the seek bar
    seekBar1.addEventListener("change", function() {
      // Calculate the new time
      var time1 = video1.duration * (seekBar1.value / 100);

      // Update the video time
      video1.currentTime = time1;
    });

    // Update the seek bar as the video plays
    video1.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value1 = (100 / video1.duration) * video1.currentTime;

      // Update the slider value
      seekBar1.value = value1;
    });

    // Pause the video when the slider handle is being dragged
    seekBar1.addEventListener("mousedown", function() {
      video1.pause();
    });

    // Play the video when the slider handle is dropped
    seekBar1.addEventListener("mouseup", function() {
      video1.play();
    });
  
    // Event listener for the volume bar
    volumeBar1.addEventListener("change", function() {
      // Update the video volume
      video1.volume = volumeBar1.value;
    });