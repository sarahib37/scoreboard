let score = document.getElementById("homescore")
let gScore = document.getElementById("guestscore")
let periodEl = document.getElementById("period")
let hFoul = document.getElementById("homefoul")
let gFoul = document.getElementById("guestfoul")

let homeScore = 0
let guestScore = 0
let period = 0
let hfouls = 0
let gfouls = 0


function home1() {
    homeScore += 1
    score.textContent = homeScore
}

function home2() {
    homeScore += 2
    score.textContent = homeScore
}

function home3() {
    homeScore += 3
    score.textContent = homeScore
}

function guest1(){
    guestScore += 1
    gScore.textContent = guestScore
}

function guest2(){
    guestScore += 2
    gScore.textContent = guestScore
}

function guest3(){
    guestScore += 3
    gScore.textContent = guestScore
}

var countDown = new Date("May 5, 2023 20:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDown - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = minutes + ":" + seconds
})

function periodPlus() {
    period += 1
    periodEl.textContent = period
}

function periodSubtract() {
    period -= 1
    periodEl.textContent = period
}

function homeFouls() {
    hfouls += 1
    hFoul.textContent = hfouls
}

function guestFouls() {
    gfouls += 1
    gFoul.textContent = gfouls
}

function newgame() {
    score.textContent = 0
    gScore.textContent = 0
    periodEl.textContent = 0
    hFoul.textContent = 00
    gFoul.textContent = 00
    homeScore = 0
    guestScore = 0
    period = 0
    hfouls = 0
    gfouls = 0
}