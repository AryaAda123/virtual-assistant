// let btn = document.querySelector("#btn");
// let content = document.querySelector("#content");
// let voice = document.querySelector("#voice");

// function speak(text) {
//   let text_speak = new SpeechSynthesisUtterance(text);
//   text_speak.rate = 1;
//   text_speak.pitch = 1;
//   text_speak.volume = 1;
//   text_speak.lang="hi-GB"
//   window.speechSynthesis.speak(text_speak);
// }

// function wishMe() {
//   let day = new Date();
//   let hours = day.getHours();
//   if (hours >= 0 && hours < 12) {
//     speak("Good Morning Sir");
//   } else if (hours >= 12 && hours < 16) {
//     speak("Good afternoon Sir");
//   } else {
//     speak("Good Evening Sir");
//   }
// }
// // window.addEventListener('load',()=>{
// //     wishMe()
// // })
// let speechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = new speechRecognition();
// recognition.onresult = (event) => {
//   let currentIndex = event.resultIndex;
//   let transcript = event.results[currentIndex][0].transcript;
//   content.innerText = transcript;
//   takeCommand(transcript.toLowerCase());
// };

// btn.addEventListener("click", () => {
//   recognition.start();
//   btn.style.display = "none";
//   voice.style.display = "block";
// });
// function takeCommand(message) {
//   btn.style.display = "felx";
//   voice.style.display = "none";
//   if (message.includes("hello") || message.includes("hey")) {
//     speak("hello sir, what can i help you?");
//   } else if (message.includes("who are you")) {
//     speak("I am virtual assistant, crated by Vishal Patel Sir");
//   } else if (message.includes("open youtube")) {
//     speak("opening youtube...");
//     window.open("https://www.youtube.com", "_blank");
//   } else if (message.includes("open instagram")) {
//     speak("opening instagram...");
//     window.open("https://www.instagram.com/", "_blank");
//   } else if (message.includes("open facebook")) {
//     speak("opening facebook...");
//     window.open("https://www.facebook.com/", "_blank");
//   } else if (message.includes("open whatsapp")) {
//     speak("opening whatsapp...");
//     window.open("https://web.whatsapp.com/", "_blank");
//   } else if (message.includes("open twitter")) {
//     speak("opening twitter...");
//     window.open("https://www.instagram.com/", "_blank");
//   } else if (message.includes("open google")) {
//     speak("opening google...");
//     window.open("https://google.com/", "_blank");
//   } else if (message.includes("open calculator")) {
//     speak("opening calculator...");
//     window.open("calculator://");
//   }
//   else if (message.includes("time")) {
//     let time =new Date(). toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
//     speak(time)
// }
// else if (message.includes("date")) {
//     let date =new Date(). toLocaleString(undefined,{date:"numeric",month:"short"})
//     speak(date)
// }
//   else {
//     let finalText =
//       "this is what i found on internet regarding" +
//         message.replace("shifra", "") || message.replace("shipra", "");
//     speak(finalText);
//     window.open(
//       `https://www.google.com/search?q=${message.replace("shipra", "")}`,
//       "_blank"
//     );
//   }
// }






let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

// Initially hide the 'voice' element as it's meant to show when listening
voice.style.display = "none";

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "en-US"; // Changed to en-US for better English pronunciation. If you want Hindi, use "hi-IN" or "hi-GB"
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning Sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}

// Uncomment this line if you want the assistant to wish on page load
window.addEventListener('load', () => {
  wishMe();
});

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

// Set properties for better control
recognition.continuous = false; // Stop listening after one command
recognition.interimResults = false; // Only return final results

// Event when speech recognition starts
recognition.onstart = () => {
  btn.style.display = "none"; // Hide the button
  voice.style.display = "block"; // Show the listening indicator (voice.gif)
  content.innerText = "Listening..."; // Update button text to show listening state
};

// Event when a speech result is obtained
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript; // Display the recognized text
  takeCommand(transcript.toLowerCase());
};

// Event when speech recognition ends (after a result or timeout)
recognition.onend = () => {
  // Show the button again
  btn.style.display = "flex"; // Changed from "felx" to "flex" to match CSS
  voice.style.display = "none"; // Hide the listening indicator
  // Reset content text after a brief delay so user can see what was transcribed
  setTimeout(() => {
    content.innerText = "Click here for talk to me";
  }, 1000); // 1-second delay to show the transcript
};

// Event when speech recognition encounters an error
recognition.onerror = (event) => {
  console.error("Speech recognition error:", event.error);
  speak("Sorry, I didn't catch that. Please try again.");
  // Ensure the button is visible again on error
  btn.style.display = "flex";
  voice.style.display = "none";
  content.innerText = "Click here for talk to me";
};


btn.addEventListener("click", () => {
  recognition.start();
  // The display changes are now handled by recognition.onstart
});


function takeCommand(message) {
  // These display changes are now primarily handled by onstart and onend events,
  // but we can ensure it's "flex" just in case after a command is processed.
  btn.style.display = "flex";
  voice.style.display = "none";

  if (message.includes("hello") || message.includes("hey")) {
    speak("hello sir, what can I help you?");
  } else if (message.includes("who are you")) {
    speak("I am Shifra, your virtual assistant, created by Vishal Patel Sir.");
  } else if (message.includes("how are you") || message.includes("what's up") || message.includes("how are you doing")) {
    speak("I am doing great, Sir! As an AI, I don't have feelings, but I'm fully operational and ready to assist you. How about you?");
  } else if (message.includes("what's your name")) {
    speak("My name is Shifra.");
  } else if (message.includes("where are you from") || message.includes("where were you born")) {
    speak("I exist as a computer program, so I don't have a physical location or a birthplace. I reside in the digital world!");
  } else if (message.includes("what is your purpose")) {
    speak("My purpose is to assist you with information, open applications, and answer your questions to the best of my abilities.");
  } else if (message.includes("do you have feelings") || message.includes("can you feel")) {
    speak("As an artificial intelligence, I do not have emotions or feelings like humans do. I operate based on logic and algorithms.");
  } else if (message.includes("what can you do")) {
    speak("I can open websites like YouTube and Google, tell you the current time and date, search for information, and have a basic conversation with you.");
  }
  else if (message.includes("open youtube")) {
    speak("Opening YouTube...");
    window.open("https://www.youtube.com/", "_blank");
  } else if (message.includes("open instagram")) {
    speak("Opening Instagram...");
    window.open("https://www.instagram.com/", "_blank");
  } else if (message.includes("open facebook")) {
    speak("Opening Facebook...");
    window.open("https://www.facebook.com/", "_blank");
  } else if (message.includes("open whatsapp")) {
    speak("Opening WhatsApp...");
    window.open("https://web.whatsapp.com/", "_blank");
  } else if (message.includes("open twitter")) {
    speak("Opening Twitter...");
    window.open("https://twitter.com/", "_blank");
  } else if (message.includes("open google")) {
    speak("Opening Google...");
    window.open("https://google.com/", "_blank");
  } else if (message.includes("open calculator")) {
    speak("I cannot directly open a system calculator from a web page. However, I can open an online calculator for you.");
    window.open("https://www.google.com/search?q=online+calculator", "_blank");
  } else if (message.includes("time")) {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    speak(`The current time is ${time}`);
  } else if (message.includes("date")) {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    speak(`Today's date is ${date}`);
  } else if (message.includes("search for") || message.includes("find about")) {
    let query = message.replace("search for", "").replace("find about", "").replace("shifra", "").replace("shipra", "").trim();
    if (query) {
      speak(`Searching for ${query} on Google.`);
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    } else {
      speak("Please tell me what you want to search for.");
    }
  }
  else {
    let searchText = message.replace("shifra", "").replace("shipra", "").trim();
    if (searchText) {
      let finalText = "This is what I found on the internet regarding " + searchText;
      speak(finalText);
      window.open(
        `https://www.google.com/search?q=${searchText}`,
        "_blank"
      );
    } else {
      speak("I'm sorry, I didn't understand that. Can you please rephrase?");
    }
  }
}