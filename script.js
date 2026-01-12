let questions = [
  " What is a sweet memory from your past that still feels like a warm hug when you think about it?",
  " What is something you loved doing as a kid that still secretly makes your heart happy even now?",
  " If you could go back to one peaceful moment in your life just to feel that comfort again, which moment would it be?",
  " What is something you’ve never really spoken about, but sometimes your heart wishes someone would gently ask you?",
  " Is there something you always wanted to express, but life or circumstances made you stay quiet about it?",
  " What is one thing your heart is still healing from, even if you don’t always show it?",
  " What makes you feel truly loved?",
  " When you are tired emotionally, what kind of love do you wish I would give you?",
  " What kind of love story do you secretly wish to live…?",
  " If your heart whispered the truth… how much do you love me, and how does your heart imagine our future together?"
];

let videos = [
  "Videos/Udal Porul Aavi.mp4",
  "Videos/I'm a fool.mp4",
  "Videos/Dheema Dheema.mp4"
];

let videoCaptions = [
  "Udal Porul Aavi neethanae... 😊",
  "All I dream is You 💛",
  "A minute for my wiSH 🎁"
];

let qIndex = 0;
let videoIndex = 0;
let transitionMode = 0;

function sendAnswerToSheet(questionText, answerText) {
  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbxyufdJ6AMwwMBjBxtydXbz5H92olUQJMiANqrtLh-2HwGF5BdPM0hQdomPgAz9GRQ9cQ/exec";

  fetch(WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: questionText,
      answer: answerText,
      time: new Date().toLocaleString()
    })
  });
}

function showQuestion() {
  const transition = document.getElementById("transitionScreen");
  const name = document.getElementById("transitionName");
  const qBox = document.getElementById("questionBox");

  name.classList.remove("silver", "gold", "platinum");

  if (qIndex === questions.length - 1) {
    name.classList.add("platinum");
  } else {
    name.classList.add(transitionMode === 0 ? "silver" : "gold");
    transitionMode = transitionMode === 0 ? 1 : 0;
  }

  transition.classList.remove("hidden");
  qBox.classList.add("hidden");

  setTimeout(() => {
    transition.classList.add("hidden");
    qBox.classList.remove("hidden");
    document.getElementById("questionText").innerText = questions[qIndex];
    document.getElementById("answerInput").focus();
  }, 1200); // ⬅ matches your 1.2s requirement
}

function nextQuestion() {
  const inputField = document.getElementById("answerInput");
  const answer = inputField.value.trim();

  if (!answer) {
    alert("Your thoughts are important, Type something for me❤️");
    return;
  }

  // Save question + answer
  sendAnswerToSheet(questions[qIndex], answer);

  inputField.value = "";
  qIndex++;

  if (qIndex >= questions.length) {
    showFinal();
    return;
  }

  if (qIndex % 3 === 0) {
    showVideo();
  } else {
    showQuestion();
  }
}

function showVideo() {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("videoBox").classList.remove("hidden");

  document.getElementById("clip").src = videos[videoIndex];
  document.getElementById("videoCaption").innerText =
    videoCaptions[videoIndex];

  videoIndex++;
}

function continueQuestions() {
  document.getElementById("videoBox").classList.add("hidden");
  document.getElementById("questionBox").classList.remove("hidden");
  showQuestion();
}

function showFinal() {
    // 1. Hide the questions and show the final screen
    document.getElementById("mainContainer").classList.add("hidden");
    const finalBox = document.getElementById("finalBox");
    finalBox.classList.remove("hidden");
    
    // IMPORTANT: Allow the final box to receive touch/clicks
    finalBox.style.pointerEvents = "auto"; 
    
    document.body.classList.add("galaxy-mode");

    // 2. Play the background music
    const song = document.getElementById("birthdaySong");
    if (song) {
        song.volume = 0.5;
        song.play().catch(() => console.log("Music interaction required"));
    }

    // 3. Set your message
    const msgEl = document.getElementById("finalMessage");
    msgEl.innerText = `Happy Birthday My Thangapula 🎉💝

    Wishing you a very happy birthday.
    This is your first birthday with me, so I wanted to make it special.
    I may not always create something grand every year, but I promise I will always try.

    Today is not just about celebrating your birthday, it is about celebrating you 💕. You are the person who slowly, quietly, and beautifully became the most important part of my life. I don’t know when it happened, but your presence started feeling like home 🤍. Just knowing that you exist in my world brings me comfort and calm.

    What truly makes everything special is you. Not the plans, not the words, not the effort. It is you. Your presence in my life turns ordinary moments into memories I hold close to my heart 💖. Even silence feels meaningful when it is shared with you.

    I had my own expectations of what love should be. I thought love had rules, conditions, and definitions. But the way you love me changed everything ✨. You showed me that love does not need to be loud to be real. It doesn’t need perfection to be beautiful. It only needs honesty and care ❤️.

    It is not about looks or wealth. It is about a connection so deep that words often fail. A bond that lives quietly inside the heart, growing stronger without asking for attention 🤍. I have never felt this way before, and that truth still amazes me.

    You showed me a version of love that feels safe and pure 💕. Loving you makes my life feel complete, like something missing finally found its place. It feels as if the search I did not even know I was on has finally ended.

    Even though I have not seen you angry, I have seen how deeply you feel for me. That vulnerability tells me how rare your heart is 💖. It tells me how precious your soul is. You are the miracle I was not looking for, but the one I truly needed.

    I don’t just love you. I choose you ❤️.
    I choose you every single day, not only when things are easy, but even when life feels uncertain.

    I choose you for my lifetime 💕. I want us to grow old together, to build a life filled with warmth and laughter 🤍. I want to share every fear, every dream, every small joy, and every quiet moment. I want to know your unspoken wishes and spend my life trying to make them real.

    Whether it is a big milestone or a simple day, I want to celebrate everything with you ✨. You may have entered my life unexpectedly, but now I cannot imagine a future where you are not part of it.

    I ask for your patience as I build myself up. Give me time to find my footing and stand strong ❤️. Just stay with me. We will face life together, holding each other through everything 🤗.

    These are not just birthday words. These are promises 💖. Even if the entire world turns against me, if you choose me, that love would be my whole world 🤍.

    I do not want you to be a stranger. I do not want you to be just a friend. I want you to be my girl, my partner, my wife, my everything ❤️.

    Be my anchor when life feels heavy 🤗. Hold my heart, wipe my tears, and comfort me when things get hard. This journey may be long-distance for now, and I know I may miss some moments physically, but my heart will never leave your side 💕.

    I may not have a kingdom to offer, but I promise you honesty, loyalty, and effort ❤️. I will protect your heart as carefully as my own. No matter how time changes us, I will keep choosing you again and again ✨.

    If heaven truly exists, for me it is a life lived with you 🤍. More than anything, I want to see you happy 😊. Even in your anger, I will step back, but my care for you will never fade.

    And if pain ever reaches you, before your tears fall, I will be there 🫂.

    Nandhini, you are my future 💖. No one comes close to the woman I want to call my wife.

    My commitment does not start with “I” and end with “you.”
    It starts with Will and ends with You ❤️.

    Will walk with you.
    Will grow with you.
    Will stay with you.

    Do not think too much and do not think too little. Just believe in us 💕.
    If you are ready to walk this path with me, despite distance and hurdles, just hold my hand 🤍.

    Indha manidha piravi
    Pen anbinil adangidum

    Endhan periya ulagam
    Un vizhiyinil adangidum

    At the end of everything,
    nee venum 🫂💝

    Happy Birthday Nandhini 🤍😘
    — Yours, always ❤️✨`;

    // 4. Start the scroll and listeners
    setTimeout(() => {
        msgEl.classList.add("start-credit-roll");

        // We attach listeners to finalBox directly now that pointer-events are auto
        finalBox.addEventListener("touchstart", (e) => {
            e.preventDefault(); // Prevents accidental zooming on some phones
            msgEl.classList.add("paused");
        });

        finalBox.addEventListener("touchend", () => {
            msgEl.classList.remove("paused");
        });

        // Mouse listeners for laptop testing
        finalBox.addEventListener("mousedown", () => {
            msgEl.classList.add("paused");
        });
        finalBox.addEventListener("mouseup", () => {
            msgEl.classList.remove("paused");
        });

    }, 500);
}


document
  .getElementById("answerInput")
  .addEventListener("keydown", e => {
    if (e.key === "Enter") nextQuestion();
  });


showQuestion();



/* 
 `Happy Birthday My Thangapula 🎉💝

Wishing you a very happy birthday. 
This is your first birthday with me, so I wanted to make it special. 
I may not always create something grand every year, but I promise I will always try.

But honestly…
What truly makes everything special is YOU. 
Your presence in my life is what turns ordinary moments into something beautiful.

I’ll admit, I had my own expectations of what love should be, 
but the way you love me changed everything. 
It’s not about looks or wealth; 
it’s about a connection so deep that words often fail to capture it.

I have never felt like this before. 
You’ve shown me a version of love that lives quietly and purely inside the heart. 
Loving you makes my life feel complete, 
as if the search I didn’t even know I was on has finally ended. 
Even though I haven't seen you angry, 
I have seen how deeply you feel for me, 
and that vulnerability tells me how rare and precious your soul is. 
You are the miracle I wasn't looking for, but the one I desperately needed.

I don’t just love you—I choose you.

I choose you for my lifetime. 
I want us to grow old by your side, 
to build a home that echoes with our laughter, 
to raise children, and to share every fear and triumph. 
I want to know your secret wishes and spend my life making them come true. 
Whether it’s a grand milestone or a small, quiet moment, 
I want to celebrate it all with you.

Maybe you entered my life unexpectedly, 
but now, I cannot imagine a future where you aren't there. 
I am asking for your patience as I build myself up—
give me time to settle, to find my footing, and to stand strong. 
Just stay with me. 
We will navigate the challenges of life together, hand in hand.

These are not just words; 
they are a sacred promise, first to myself and then to you. 
Even if the entire world were to turn against me, 
if you choose to love me back, that love would be my entire world. 
I don't want you to be a stranger or just a friend. 
I want you to be my girl, my wife, my everything.

Be my anchor when the world feels heavy. 
Hold my heart, wipe my tears, 
and comfort me with your hugs and kisses when things get hard. 
This journey might be long-distance for a while. 
I know I’ll miss some of your happiest moments, 
and I won’t always be there to offer my shoulder physically, 
but my spirit will never leave your side.

I may not have a kingdom to offer, 
but I promise you a life of unwavering honesty, loyalty, and effort. 
I will protect your heart as carefully as my own. 
No matter how time changes, 
I will keep choosing you, again and again.

If heaven truly exists, for me it is a life lived with you. 
More than anyone ever could, I want to see you happy. 
Only in your anger I’ll step back… 
and even then, my care for you will never fade.

And if pain ever reaches you, 
before your tears fall… 
I will be there to wipe them away.

Nandhini, I have to say this...
You are my future. 
No one comes close to the woman I want to call my wife.

My commitment to you doesn't start with “I” and end with “you.” 
It starts with “Will” and ends with “You.”

Will walk with you.
Will grow with you.
Will stay with you.

Don't think too much, and don't think too little. 
Just believe in us as I do. 
If you are ready to walk this path with me, 
despite the distance and the hurdles, 
then just hold my hand.

Indha manidha piravi
Pen anbinil adangidum

Endhan periya ulagam
Un vizhiyinil adangidum

At the end of everything,
nee venum 🫂💝

Happy Birthday Nandhini 🤍😘
— Yours, always ❤️✨`
*/