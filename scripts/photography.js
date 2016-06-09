
//Thumb 4 Caption Functions

var thumbFour = document.getElementById('thumb4');
var thumbCaptionFour = document.getElementById('thumbCaption4');

    if (screen.width >= 851) {
      thumbFour.addEventListener('mouseover', displayCaption4);
      thumbCaptionFour.addEventListener('mouseover', displayCaption4);
    }

    if (screen.width >= 851) {
      thumbFour.addEventListener('mouseout', displayThumb4);
      thumbCaptionFour.addEventListener('mouseout', displayThumb4);
    }

    function displayCaption4() {
      thumbCaptionFour.style.opacity="1";
      thumbFour.className = "thumb4-overlay thumb"; 
    }

    function displayThumb4() {
      thumbFour.className = "thumb thumb4"; 
      thumbCaptionFour.style.opacity="0";
    }

//Thumb 3 Caption Functions

var thumbThree = document.getElementById('thumb3');
var thumbCaptionThree = document.getElementById('thumbCaption3');

    if (screen.width >= 851) {
      thumbThree.addEventListener('mouseover', displayCaption3);
      thumbCaptionThree.addEventListener('mouseover', displayCaption3);
    }

    if (screen.width >= 851) {
      thumbThree.addEventListener('mouseout', displayThumb3);
      thumbCaptionThree.addEventListener('mouseout', displayThumb3);
    }

    function displayCaption3() {
      thumbCaptionThree.style.opacity="1";
      thumbThree.className = "thumb3-overlay thumb"; 
    }

    function displayThumb3() {
      thumbThree.className = "thumb thumb3"; 
      thumbCaptionThree.style.opacity="0";
    }

//Thumb 2 Caption Functions

var thumbTwo = document.getElementById('thumb2');
var thumbCaptionTwo = document.getElementById('thumbCaption2');

    if (screen.width >= 851) {
      thumbTwo.addEventListener('mouseover', displayCaption2);
      thumbCaptionTwo.addEventListener('mouseover', displayCaption2);
    }

    if (screen.width >= 851) {
      thumbTwo.addEventListener('mouseout', displayThumb2);
      thumbCaptionTwo.addEventListener('mouseout', displayThumb2);
    }

    function displayCaption2() {
      thumbCaptionTwo.style.opacity="1";
      thumbTwo.className = "thumb2-overlay thumb"; 
    }

    function displayThumb2() {
      thumbTwo.className = "thumb thumb2"; 
      thumbCaptionTwo.style.opacity="0";
    }

//Thumb 1 Caption Functions

var thumbOne = document.getElementById('thumb1');
var thumbCaptionOne = document.getElementById('thumbCaption1');

    if (screen.width >= 851) {
      thumbOne.addEventListener('mouseover', displayCaption1);
      thumbCaptionOne.addEventListener('mouseover', displayCaption1);
    }

    if (screen.width >= 851) {
      thumbOne.addEventListener('mouseout', displayThumb1);
      thumbCaptionOne.addEventListener('mouseout', displayThumb1);
    }

    function displayCaption1() {
      thumbCaptionOne.style.opacity="1";
      thumbOne.className = "thumb1-overlay thumb"; 
    }

    function displayThumb1() {
      thumbOne.className = "thumb thumb1"; 
      thumbCaptionOne.style.opacity="0";
    }