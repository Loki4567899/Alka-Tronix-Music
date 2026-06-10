const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.background =
"rgba(5,8,22,.85)";

header.style.backdropFilter =
"blur(20px)";

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.background =
"rgba(255,255,255,.03)";

header.style.boxShadow = "none";

}

});

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document.querySelectorAll(
".hero,.stats,.album-section,.bio-section,.gallery-section,.contact-section"
).forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

const cards = document.querySelectorAll(
".floating-card,.stat-card,.album-card,.bio-card"
);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY =
((x / rect.width) - 0.5) * 10;

const rotateX =
((y / rect.height) - 0.5) * -10;

card.style.transform =
perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg);

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});
