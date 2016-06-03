

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

