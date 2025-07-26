

function speak(text) {
  const synth = window.speechSynthesis;
  const text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 0.9;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = 'en-GB'; // UK English (female voice milne ke chance zyada hote hain)

  // Get all available voices
  const voices = synth.getVoices();

  // Try to find a female voice (you can change name based on available voices)
  const femaleVoice = voices.find(voice =>
    voice.name.includes("Female") || voice.name.includes("Google UK English Female") || voice.name.includes("Zira")
  );

  // Set the voice
  text_speak.voice = femaleVoice || voices[0]; // fallback if female not found

  synth.speak(text_speak);
}
function wishMe(){
    let day = new Date()
    let Hours = day.getHours()
    if (Hours >= 0 && Hours < 12) {
        speak("good morning sir")
    }
    else if (Hours >= 12 && Hours < 17) {
        speak("good after noon sir")
    }
    else {
        speak("good evening sir")
    }
}
window.addEventListener('load', () => {
    wishMe()

})

window.addEventListener("load", () => {
    let btn = document.getElementById("btn");

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    

    recognition.onresult = (event) => {
        let content = document.querySelector("#content")
        let voice = document.querySelector("#voice")
        let currnetIndex = event.resultIndex
        let transcript = event.results[currnetIndex][0].transcript
        content.innerText = transcript
        takeCommand(transcript.toLowerCase())
    }

    btn.addEventListener("click", () => {
        recognition.start()
        btn.style.display = "none"
        voice.style.display = "block"
    })
})

function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello ") || message.includes("hey")) {
        speak("hello sir , how can i help you")
    }
    else if (message.includes("tell me about yourself")) {
        speak("i am siri, a virtual assistant ,created by Ayushi Sharma")
    }
    else if (message.includes("open youtube")) {
        speak("opening...youtube")
        window.open("https://www.youtube.com/")
    }
    else if (message.includes(" open whatsapp")) {
        speak("opening..whatsapp")
        window.open("https://web.whatsapp.com/")
    }
    else if (message.includes("open instagram")) {
        speak("opening..instagram")
        window.open("https://www.instagram.com//")
    }
    else if (message.includes("open google")) {
        speak("opening...google")
        window.open("https://www.google.com/")
    }
    else if (message.includes("open calculator")) {
        speak("opening..calculator")
        window.open("calculator://")
    }
    else if (message.includes("open vscode")) {
        speak("opening..vscode")
        window.open("visual studio code://")
    }
    else if (message.includes("open facebook")) {
        speak("opening...facebook")
        window.open("https://www.facebook.com/")
    }
     else if (message.includes("what's your name")) {
        speak("My name is siri")
    }
     else if (message.includes("how are you")) {
        speak("i am fine and you")
    }
     else if (message.includes("im also fine")) {
        speak("okay, what can i help you")
    }
     else if (message.includes("thank you")) {
        speak("you're welcome")
    }
     else if (message.includes("byy byy")) {
        speak("by")
    }
     
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(date)

    }

    else {
        let finalText = "this is what i found on internt regarding" + message.replace("siri", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("siri", "")}`, "_blank")
    }

}

