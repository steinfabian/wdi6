var movePixels = 10;
var delayMs = 200;
var catTimer = null;

var catWalk = function () {
  var img = document.getElementsByTagName('img')[0]; //get the first image from the page
  var currentLeft = parseInt(img.style.left); //take its start position from the left as currentLeft variable, make sure the value is an integer
  img.style.left = (currentLeft + movePixels) + 'px';

  //in the next step set the right movePixels value that is considered above
  if (currentLeft > (window.innerWidth-img.width)) { //when it reaches the right side of the screen, reset movePixel to negative number to make it move back to the left
  	movePixels = -10
    img.style.left = (currentLeft + movePixels) + 'px';
  } else if (currentLeft === 0){
  	movePixels = 10
  	img.style.left = (currentLeft + movePixels) + 'px';
  }
  if (movePixels < 0) { //when cat is walking to the left, flip the image around
	img.style.transform = "scaleX(-1)";
  } else { //flip it back when it is moving to the right
  		img.style.transform = "scaleX(+1)";
  }
}

var cattimer_start = []; //define array to pass in button events to later clear them all when clicking stop
var startCatWalk = function () {
	if (cattimer_start.length === 0) //to avoid that clicking on start again and again will make the cat move faster
	  catTimer = window.setInterval(catWalk, delayMs);
	  cattimer_start.push(catTimer);
};

var cattimer_speed = []; //define array to pass in button events to later clear them all when clicking stop
var speedUpCat = function() {
	catTimer = window.setInterval(catWalk, delayMs/4);
	cattimer_speed.push(catTimer);
};

var stopCatWalk = function () {
	// stop all the start cattimers
	for (var i = 0; i < cattimer_start.length; i++) {
		window.clearInterval(cattimer_start[i]);		
	}
	// stop all the speed cattimers
	for (var i = 0; i < cattimer_speed.length; i++) {
		window.clearInterval(cattimer_speed[i]);		
	}	
};

var buttonStart = document.getElementById('start-button');
var buttonSpeed = document.getElementById('speed-button');
var buttonStop = document.getElementById('stop-button');


buttonStart.addEventListener('click', startCatWalk, false);
buttonSpeed.addEventListener('click', speedUpCat, false);
buttonStop.addEventListener('click', stopCatWalk, false);

addEventListener("keydown", function(event) {
	if (event.keyCode === 66)
		document.body.style.background = "blue";
});

addEventListener("keyup", function(event) {
	if (event.keyCode === 66)
		document.body.style.background = "";
});




