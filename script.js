// ===============================
// Typing Animation
// ===============================

const words = [
    "Assistant Professor",
    "AI Researcher",
    "Machine Learning Enthusiast",
    "Python Developer",
    "Automation Specialist",
    "UiPath Academic Alliance Educator"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex > current.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Theme Toggle
// ===============================

const toggle = document.getElementById("themeToggle");

let dark = true;

toggle.addEventListener("click", () => {

    if (dark) {

        document.documentElement.style.setProperty("--bg", "#ffffff");
        document.documentElement.style.setProperty("--card", "#f3f4f6");
        document.documentElement.style.setProperty("--text", "#111827");
        document.documentElement.style.setProperty("--gray", "#374151");

        document.body.style.color = "#111827";

        toggle.textContent = "☀️";

    } else {

        document.documentElement.style.setProperty("--bg", "#0b1120");
        document.documentElement.style.setProperty("--card", "#111827");
        document.documentElement.style.setProperty("--text", "#ffffff");
        document.documentElement.style.setProperty("--gray", "#cbd5e1");

        document.body.style.color = "#ffffff";

        toggle.textContent = "🌙";

    }

    dark = !dark;

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===============================
// Skill Bar Animation
// ===============================

const fills = document.querySelectorAll(".fill");

const skillObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.width = entry.target.dataset.width;

        }

    });

});

fills.forEach(fill=>{

    skillObserver.observe(fill);

});


// ===============================
// Fade Animation
// ===============================

const cards = document.querySelectorAll(".card,.project,.timeline-item");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.2
});

cards.forEach(card=>{

card.style.opacity=0;
card.style.transform="translateY(50px)";
card.style.transition=".8s";

observer.observe(card);

});


// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}
else{

counter.innerText=target;

}

}

update();

});


// ===============================
// Back To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.background="#38bdf8";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.display="none";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ===============================
// Active Navigation
// ===============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ===============================
// Contact Form Validation
// ===============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=form.querySelector("input[type=text]");
const email=form.querySelector("input[type=email]");
const message=form.querySelector("textarea");

if(!name.value.trim()){

alert("Please enter your name.");

return;

}

if(!email.value.includes("@")){

alert("Please enter a valid email.");

return;

}

if(message.value.trim().length<10){

alert("Message should contain at least 10 characters.");

return;

}

alert("Thank you! Your message has been submitted.");

form.reset();

});

}


// ===============================
// Greeting
// ===============================

const hour=new Date().getHours();

let greeting="";

if(hour<12){

greeting="Good Morning ☀️";

}
else if(hour<18){

greeting="Good Afternoon 🌤️";

}
else{

greeting="Good Evening 🌙";

}

console.log(greeting);


// ===============================
// Footer Year
// ===============================

const footer=document.querySelector("footer");

if(footer){

footer.innerHTML += "<br>© "+new Date().getFullYear()+" Jikku Thomas";

}