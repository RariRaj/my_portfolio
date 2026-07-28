const roles = [

    "Machine Learning Engineer",

    "Data Scientist",

    "AI Enthusiast"

];

let index = 0;

let charIndex = 0;

const typingElement = document.querySelector(".hero-text h2");

function typeEffect(){

    if(charIndex < roles[index].length){

        typingElement.textContent += roles[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex >0){

        typingElement.textContent = roles[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        index++;

        if(index>=roles.length){

            index=0;

        }

        setTimeout(typeEffect,300);

    }

}

typingElement.textContent="";

typeEffect();

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));

const topBtn = document.getElementById("topBtn");
console.log(topBtn);

window.onscroll = function(){

    if(document.documentElement.scrollTop > 400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

};

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    });

});


