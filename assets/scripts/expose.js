// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Requirement 1:
  ///////////////////////////////////////////////////
  // Set correct audio sound file
  // Display correct image based on selection of horn
  var selection = document.getElementById("horn-select");
  var expose = document.getElementById("expose");
  var aud = expose.getElementsByClassName("hidden");
  selection.addEventListener('change', function(){
    var img = expose.querySelector("img");
    aud.src = "assets/audio/air-horn.mp3";
    if(selection.value == "air-horn"){
      img.src = "assets/images/air-horn.svg"; 
      aud.src = "assets/audio/air-horn.mp3";
    }
    else if(selection.value == "car-horn"){
      img.src = "assets/images/car-horn.svg";
      aud.src = "assets/audio/car-horn.mp3";
    }
    else if(selection.value == "party-horn"){
      img.src = "assets/images/party-horn.svg";
      aud.src = "assets/audio/party-horn.mp3";
    }
    else {
      img.src = "assets/images/no-image.png";
      aud.src = "";
    }
  });
  
  // Requirement 2:
  // When you change the volume on the slider, the following should occur:
  // At zero volume, the mute icon (level 0) should be displayed
  // From 1 to < 33 volume the first volume level should be displayed
  // From 33 to < 67 volume the second volume level should be displayed
  // From 67 and up the third volume level should be displayed
  // The correct volume icon should be set
  // The corresponding volume should be set for the audio element (note: this element’s volume is not out of 100)
  var vol = document.getElementById("volume-controls");
  var vol_img = vol.querySelector("img");
  vol.addEventListener('input', function(){
    var volume = document.getElementById("volume");
    if(volume.value >= 1 && volume.value < 33){
      vol_img.src = "assets/icons/volume-level-1.svg";
    }
    else if(volume.value >= 33 && volume.value < 67){
      vol_img.src = "assets/icons/volume-level-2.svg";
    }
    else if(volume.value > 67){
      vol_img.src = "assets/icons/volume-level-3.svg";
    }
    else{
      vol_img.src = "assets/icons/volume-level-0.svg";
    }
    aud.volume = volume.value / 100;
  });
  // Requirement 3
  // When you click the “Play Sound” button the following should occur:
  // The corresponding sound for the horn selected should play out loud at the specified volume
  // If the Party Horn is selected, confetti should shoot out out, as shown in the video
  // A library has been included for you to accomplish this, more on how to use it here https://github.com/loonywizard/js-confetti (Links to an external site.)
  // Do not run the installation steps, or include the import statement as we have already installed and imported the confetti library for you 
}