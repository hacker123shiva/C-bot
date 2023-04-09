/*

  1. Add Chat
  2. Remove Chat

  ---> On refreshing the web page out ChatText got vanishes i.e we have to store the Chat.
  
  3. Store Chat




*/

// Selecting elements
const inp = document.querySelector('#inp')
const btn = document.querySelector('#btn')
const list = document.querySelector('#list');

// Add events
// So, on click add button following function will work.
btn.addEventListener('click', () => {
    
    // Text that the user has enetered will be stored in the todoText.
    const todoText = inp.value;
    
    // If i tried to add chat without entering anything in the input then a alert will be generated.
    if(todoText === "") {
         
        alert("Empty todo");
        return
    }
    
    // Creating a list
    const li = document.createElement('li');
    
    // Adding the todoText in the list
    li.innerText = todoText;

    // adding remove chatText
    // On selecting li if we want to delete the li
    // Har ek chatText ke saath ye event attach ho raha hoga.
    li.addEventListener('click' , () => {

         li.remove();
    })
    
    // append that li in the list.
    list.append(li);

    // But the user enetered text is not vanishing by itself.
    // Clear the input
    inp.value = ""

})
const speak = document.querySelector("#speak");

speak.addEventListener("click", () => {
  var speech = true;
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  // Creating a list
  // const li = document.createElement("li");

  // list.appendChild(li);

  const li = document.createElement('li');  
   
  

  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    
    list.appendChild(li); 
    li.innerText = transcript;
    console.log(transcript);

  });
  if (speech == true) {
    recognition.start();
    recognition.addEventListener("end" , );
    //Preventing page refresh
   event.preventDefault();
    
  }

});
