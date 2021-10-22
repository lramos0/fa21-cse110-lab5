// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //associated elements
  const textBox = document.getElementById("text-to-speak");
  var selectedVoice = document.querySelector('select');
  const button = document.querySelector("button");
  //synthesis object
  var synth = window.speechSynthesis;
  var chosenVoice = '';
  var voices = [];
  var image = document.querySelector('img');

  if(typeof synth === 'undefined') {
      return;
  }
  
  voices = synth.getVoices();
  console.log(voices);

  //populate language and speaker options
  for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.value = i;
      selectedVoice.appendChild(option)
  }
  
  //construct utter, speak it, update image until utter ends.
  button.addEventListener('click', function() {
    let testInput = textBox.value;
    let utterThis = new SpeechSynthesisUtterance(testInput);
    console.log(voices[selectedVoice.value]);
    utterThis.voice = voices[selectedVoice.value];
    image.setAttribute('src', 'assets/images/smiling-open.png');
    synth.speak(utterThis);
    textBox.blur();
    utterThis.addEventListener('end', function(){
      image.setAttribute('src', 'assets/images/smiling.png');
    });
  });
}

