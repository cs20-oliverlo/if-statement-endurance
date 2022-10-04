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
    let height = prompt("How tall are you in centimeters?");

    if (height >= 82) {
        alert("All aboard!");
    } else {
        alert("Shorty.");
    }
}

function btnFunc3() {
    let sign = prompt("Provide a number with a sign");

    if (sign > 0) {
        alert("Positive");
    } else if (sign < 0) {
        alert("Negative");
    } else {
        alert("Zero");
    }
}

function btnFunc4() {
    let courseRecommendation = prompt("What is your grade average?");

    if (courseRecommendation >= 90) {
        alert("You will do well at the next level.");
    } else if (courseRecommendation >= 70) {
        alert("You should do well at the next level.");
    } else if (courseRecommendation >= 50) {
        alert("The next level may be difficult for you.");
    } else {
        alert("You may not go to the next level.");
    }
}

function btnFunc5() {
    let absValue = prompt("Provide a number to find the absolute");

    if (absValue >= 0) {
        alert(absValue);
    } else {
        alert(absValue * -1);
    }
}

function btnFunc6() {
    let evenNumber = prompt("Enter an even number");

    if ((evenNumber % 2) == 0) {
        alert("True");
    } else {
        alert("False");
    }
}

function btnFunc7() {
    let divided = prompt("Enter the number you want to divide");
    let divisor = prompt("Enter the number you want to divide by");

    if (divided % divisor == 0) {
        alert("True");
    } else {
        alert("False");
    }
}

function btnFunc8() {
    let xValue = prompt("Enter the x value");
    let yValue = prompt("Enter the y value");

    if (xValue == 0 && yValue == 0) {
        alert("Origin");
    } else if (xValue != 0 && yValue == 0) {
        alert("X Axis");
    } else if (xValue == 0 && yValue != 0) {
        alert("Y Axis");
    } else if (xValue > 0 && yValue > 0) {
        alert("Quadrant 1");
    } else if (xValue < 0 && yValue > 0) {
        alert("Quadrant 2");
    } else if (xValue < 0 && yValue < 0) {
        alert("Quadrant 3");
    } else {
        alert("Quadrant 4");
    }
}

function btnFunc9() {
    let num = prompt("Provide a number from 1 to 9");

    if (num == 1) {
        alert("1st");
    } else if (num == 2) {
        alert("2nd");
    } else if (num == 3) {
        alert("3rd");
    } else if (num == 4) {
        alert("4th");
    } else if (num == 5) {
        alert("5th");
    } else if (num == 6) {
        alert("6th");
    } else if (num == 7) {
        alert("7th");
    } else if (num == 8) {
        alert("8th");
    } else if (num == 9) {
        alert("9th");
    } else {
        alert("IDK");
    }
}

function btnFunc10() {
    let balance = prompt("Enter your balance");

    if (balance > 0) {
        if (balance * 0.021 > 10) {
            alert("Your minimun payment is $" + (balance * 0.021));
        } else if (balance * 0.021 < 10 && balance > 10) {
            alert("Your minimum payment is $10");
        } else {
            alert("Your minimum payment is $" + balance)
        }
    } else {
        alert("Please input a valid balance")
    }
}