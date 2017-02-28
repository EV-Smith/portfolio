
//Thumb 6 Caption Functions

var thumbSix = document.getElementById('thumb6');
var thumbCaptionSix = document.getElementById('thumbCaption6');

    if (screen.width >= 851) {
      thumbSix.addEventListener('mouseover', displayCaption6);
      thumbCaptionSix.addEventListener('mouseover', displayCaption6);
    }

    if (screen.width >= 851) {
      thumbSix.addEventListener('mouseout', displayThumb6);
      thumbCaptionSix.addEventListener('mouseout', displayThumb6);
    }

    function displayCaption6() {
      thumbCaptionSix.style.opacity="1";
      thumbSix.className = "thumb6-overlay thumb"; 
    }

    function displayThumb6() {
      thumbSix.className = "thumb thumb6"; 
      thumbCaptionSix.style.opacity="0";
    }

//Thumb 5 Caption Functions

var thumbFive = document.getElementById('thumb5');
var thumbCaptionFive = document.getElementById('thumbCaption5');

    if (screen.width >= 851) {
      thumbFive.addEventListener('mouseover', displayCaption5);
      thumbCaptionFive.addEventListener('mouseover', displayCaption5);
    }

    if (screen.width >= 851) {
      thumbFive.addEventListener('mouseout', displayThumb5);
      thumbCaptionFive.addEventListener('mouseout', displayThumb5);
    }

    function displayCaption5() {
      thumbCaptionFive.style.opacity="1";
      thumbFive.className = "thumb5-overlay thumb"; 
    }

    function displayThumb5() {
      thumbFive.className = "thumb thumb5"; 
      thumbCaptionFive.style.opacity="0";
    }


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