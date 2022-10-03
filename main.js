// Buttons

document.getElementById("btn-1").addEventListener("click", btnFunc1);
document.getElementById("btn-2").addEventListener("click", btnFunc2);
document.getElementById("btn-3").addEventListener("click", btnFunc3);
document.getElementById("btn-4").addEventListener("click", btnFunc4);
document.getElementById("btn-5").addEventListener("click", btnFunc5);
document.getElementById("btn-6").addEventListener("click", btnFunc6);
document.getElementById("btn-7").addEventListener("click", btnFunc7);
document.getElementById("btn-8").addEventListener("click", btnFunc8);
document.getElementById("btn-9").addEventListener("click", btnFunc9);
document.getElementById("btn-10").addEventListener("click", btnFunc10);

function btnFunc1() {
// Input
    let userName = prompt("Please enter your name").toLowerCase();

// Check userName
    if (userName === "oliver") {
    	alert("Wow, we have the same name.");
    } else {
    	alert("We don’t have the same name.");
    }
}

function btnFunc2() {
    let height = prompt("How tall are you in centimeters?")

    if (height >= 82) {
        alert("All aboard!")
    } else {
        alert("Shorty.")
    }
}

function btnFunc3() {
    let sign = prompt("Provide a number with a sign")

    if (sign > 0) {
        alert("Positive")
    } else if (sign < 0) {
        alert("Negative")
    } else {
        alert("Zero")
    }
}

function btnFunc4() {
    let courseRecommendation = prompt("What is your grade average?")

    if (courseRecommendation >= 90) {
        alert("You will do well at the next level.")
    } else if (courseRecommendation >= 70) {
        alert("You should do well at the next level.")
    } else if (courseRecommendation >= 50) {
        alert("The next level may be difficult for you.")
    } else {
        alert("You may not go to the next level.")
    }
}

function btnFunc5() {
    
}

function btnFunc6() {
    
}

function btnFunc7() {
    
}

function btnFunc8() {
    
}

function btnFunc9() {
    
}

function btnFunc10() {
    
}