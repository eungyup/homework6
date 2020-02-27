var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
	// console.log(video)
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

// Slow the current video speed by 20% each time the button is clicked 
// and log the new speed to the console. 
function decreaseSpeed() { 
	// playbackRate => get current speed
	video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

// Increase the current video speed by 25%  each time the button is clicked 
// and log the new speed to the console.
function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60;
	// var duration = video.duration
	// console.log("duration" + video.duration)
	if (video.currentTime >= video.duration){
		// reset the play speed to “normal.”
		video.currentTime = 0;
		video.pause()
		video.playbackRate = 1;
		// According to instructor's comment, we should not play
		// the video automatically.
		console.log("Current location is 0")
	}
	else{
		console.log("Current location is " + video.currentTime);
	}
} 

function mute() { 
	if(video.muted){
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Unmuted");
		video.muted = false;
	}
	else{
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Muted")
		video.muted = true;
	}
}

function changeVolume() {
	// my
	var slider = document.querySelector('#volumeSlider').value;
	video.volume = slider / 100;
	document.querySelector('#volume').innerHTML = slider + "%"
	console.log("Volume is " + slider);
}

function gray() { 
	// document.body.style.margin = '20px';
	video.classList.add("grayscale")
	console.log("In grayscale")
}

function color() {
	video.classList.remove("grayscale")
	console.log("In color") 
}
