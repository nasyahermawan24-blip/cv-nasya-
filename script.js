// ======================
// TYPING EFFECT
// ======================

const words = [
  "Mahasiswa Sistem Informasi",
  "Front-End Beginner",
  "Belajar JavaScript",
  "Future Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing =
document.getElementById("typing");

function typeEffect(){

  if(!typing) return;

  currentWord = words[wordIndex];

  if(isDeleting){

    typing.textContent =
    currentWord.substring(0,charIndex--);

  }else{

    typing.textContent =
    currentWord.substring(0,charIndex++);

  }

  if(
    !isDeleting &&
    charIndex === currentWord.length
  ){

    isDeleting = true;

    setTimeout(typeEffect,1000);

    return;
  }

  if(isDeleting && charIndex === 0){

    isDeleting = false;

    wordIndex++;

    if(wordIndex === words.length){
      wordIndex = 0;
    }

  }

  setTimeout(
    typeEffect,
    isDeleting ? 50 : 100
  );

}

typeEffect();


// ======================
// TOP BUTTON
// ======================

const topBtn =
document.getElementById("topBtn");

if(topBtn){

  window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

      topBtn.style.display = "block";

    }else{

      topBtn.style.display = "none";

    }

  });

  topBtn.onclick = ()=>{

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };

}


// ======================
// CURSOR GLOW
// ======================

const glow =
document.querySelector(".cursor-glow");

if(glow){

  document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

  });

}


// ======================
// REAL TIME CLOCK
// ======================

function updateClock(){

  const clock =
  document.getElementById("clock");

  if(!clock) return;

  const now = new Date();

  const time =
  now.toLocaleTimeString("id-ID");

  clock.textContent = time;

}

setInterval(updateClock,1000);

updateClock();


// ======================
// SCROLL REVEAL
// ======================

const hiddenElements =
document.querySelectorAll(
  ".card, .project-card, .stat-box, .why-card, .motivasi-box, .motto-box, .clock-box, .detail-container, .experience-card"
);

const observer =
new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el)=>{

  el.classList.add("hidden");

  observer.observe(el);

});


// ======================
// DARK LIGHT MODE
// ======================

const themeToggle =
document.getElementById("themeToggle");

const body =
document.body;

if(themeToggle){

  // CEK LOCAL STORAGE
  if(localStorage.getItem("theme") === "light"){

    body.classList.add("light-mode");

    themeToggle.textContent = "☀️";

  }

  themeToggle.addEventListener("click",()=>{

    body.classList.toggle("light-mode");

    if(body.classList.contains("light-mode")){

      themeToggle.textContent = "☀️";

      localStorage.setItem("theme","light");

    }else{

      themeToggle.textContent = "🌙";

      localStorage.setItem("theme","dark");

    }

  });

}


// ======================
// FORM THANK YOU BUBBLE
// ======================

const form =
document.getElementById("contactForm");

const thankYou =
document.getElementById("thankYouMessage");

if(form){

  form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action,{
      method:"POST",
      body:data,
      headers:{
        Accept:"application/json"
      }
    });

    if(response.ok){

      // RESET FORM
      form.reset();

      // SHOW MESSAGE
      if(thankYou){

        thankYou.classList.add("show-bubble");

        setTimeout(()=>{

          thankYou.classList.remove("show-bubble");

        },3000);

      }

    }

  });

}


// ======================
// AUTO IMAGE SLIDER
// ======================

const sliderImage =
document.getElementById("sliderImage");

const images = [

  "Acca2.jpeg",
  "duta.jpeg",
  "azza.jpeg",
  "hermawan.jpeg"

];

let imageIndex = 0;

if(sliderImage){

  setInterval(()=>{

    imageIndex++;

    if(imageIndex >= images.length){

      imageIndex = 0;

    }

    sliderImage.style.opacity = 0;

    setTimeout(()=>{

      sliderImage.src =
      images[imageIndex];

      sliderImage.style.opacity = 1;

    },500);

  },3000);

}


// ======================
// LOADER SCREEN
// ======================

window.addEventListener("load",()=>{

  const loader =
  document.getElementById("loader");

  if(loader){

    setTimeout(()=>{

      loader.classList.add(
        "loader-hidden"
      );

    },1800);

  }
// ======================
// MOTTO CLOCK
// ======================

function updateMottoClock(){

  const now = new Date();

  const time =
  now.toLocaleTimeString("id-ID");

  const mottoClock =
  document.getElementById("mottoClock");

  if(mottoClock){

    mottoClock.textContent = time;

  }

}

setInterval(updateMottoClock,1000);

updateMottoClock();

});
// ======================
// EXPERIENCE SLIDER
// ======================

const slider =
document.querySelector(".experience-container");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

nextBtn.addEventListener("click",()=>{

  slider.scrollBy({
    left:370,
    behavior:"smooth"
  });

});

prevBtn.addEventListener("click",()=>{

  slider.scrollBy({
    left:-370,
    behavior:"smooth"
  });

});
// ======================
// WHY ME SLIDER
// ======================

const whyCards =
document.querySelectorAll(".why-card");

const nextWhy =
document.querySelector(".next-why");

const prevWhy =
document.querySelector(".prev-why");

let whyIndex = 0;

function showWhyCard(index){

  whyCards.forEach((card)=>{

    card.classList.remove("active");

  });

  whyCards[index]
  .classList.add("active");

}

nextWhy.addEventListener("click",()=>{

  whyIndex++;

  if(whyIndex >= whyCards.length){

    whyIndex = 0;

  }

  showWhyCard(whyIndex);

});

prevWhy.addEventListener("click",()=>{

  whyIndex--;

  if(whyIndex < 0){

    whyIndex = whyCards.length - 1;

  }

  showWhyCard(whyIndex);

});