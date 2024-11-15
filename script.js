document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const closeMenu = document.querySelector(".fa-times");
    const navHeader = document.getElementById("mobile_nav_logo");
    const nav = document.querySelector("nav");

    // Ouvrir le menu
    hamburger.addEventListener("click", () => {
        navLinks.classList.add("active");
        hamburger.style.display = "none"; 
        closeMenu.style.display = "block"; 
        navHeader.style.display = "block";
        nav.style.display = "block";
    });

    // Fermer le menu
    closeMenu.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.style.display = "block"; 
        closeMenu.style.display = "none";  
        navHeader.style.display = "none";
        nav.style.display = "none";
    });
});


//arrow for questions
let arrowBtns = document.getElementsByClassName("fa-chevron-up");

//question-answer 1
let btnArrow1 = document.getElementById("q1");
let answerFirst = document.getElementById("answer1");

btnArrow1.addEventListener("click", () => {
    if (answerFirst.style.display === "none") {
        answerFirst.style.display = "flex";
        arrowBtns[0].classList.add("active"); 
    } else {
        answerFirst.style.display = "none";
        arrowBtns[0].classList.remove("active");
    }
});

//question-answer2
let btnArrow2 = document.getElementById("q2");
let answerSecond = document.getElementById("answer2");

btnArrow2.addEventListener("click", () => {
    if (answerSecond.style.display === "none") {
        answerSecond.style.display = "flex";        
        arrowBtns[1].classList.add("active"); 
    } else {
        answerSecond.style.display = "none";
        arrowBtns[1].classList.remove("active");
    }
});

//question-reponse3
let btnArrow3 = document.getElementById("q3");
let answerThird = document.getElementById("answer3");

btnArrow3.addEventListener("click", () => {
    if (answerThird.style.display === "none") {
        answerThird.style.display = "flex";
        arrowBtns[2].classList.add("active"); 
    } else {
        answerThird.style.display = "none";
        arrowBtns[2].classList.remove("active");
    }
});

//question-reponse4
let btnArrow4 = document.getElementById("q4");
let answerFourth = document.getElementById("answer4");

btnArrow4.addEventListener("click", () => {
    if (answerFourth.style.display === "none") {
        answerFourth.style.display = "flex";
        arrowBtns[3].classList.add("active"); 
    } else {
        answerFourth.style.display = "none";
        arrowBtns[3].classList.remove("active");
    }
});

//verification email contact
const emailInput = document.querySelector(".search_input");
const searchMessage = document.getElementById("search_message");

// Fonction pour valider l'email avec une expression régulière
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Ajoute l'événement 'blur' pour la validation lorsque l'utilisateur quitte le champ
emailInput.addEventListener("blur", () => {
    if (!validateEmail(emailInput.value)) {
        searchMessage.classList.add("error"); 
    } else {
        searchMessage.classList.remove("error"); 
    }
});

// Ajoute l'événement 'input' pour validation en direct
emailInput.addEventListener("input", () => {
    if (validateEmail(emailInput.value)) {
        searchMessage.classList.remove("error"); 
    }
});
