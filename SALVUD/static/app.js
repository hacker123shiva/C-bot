const speak = document.querySelector("#speak");
const inp = document.querySelector('#inp');

speak.addEventListener("click", () => {
  var speech = true;
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  // Creating a list
  // const li = document.createElement("li");

  // list.appendChild(li);

  // const li = document.createElement('li');  
   
  

  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    
    // list.appendChild(li); 
    // li.innerText = transcript;
    inp.value = transcript
    console.log(transcript);

  });
  recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();

}


  if (speech == true) {
    recognition.start();
    recognition.addEventListener("end" , );
    
  }

});