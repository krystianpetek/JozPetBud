var container = document.getElementById("container");
var menuMobilne = document.getElementById("menuMobilne");

function Rozwin() { // onclick button MENU
    if (menuMobilne.classList.contains("menuMobilneRozwin"))
        menuMobilne.classList.remove("menuMobilneRozwin");
    else
        menuMobilne.classList.add("menuMobilneRozwin");
}

function ScrollDoGory() { // Scroll do góry po naciśnięciu buttona strzałki do góry w prawym dolnym rogu
    window.scrollTo(0, 0);
}

var header = document.getElementById("header");
var toTop = document.getElementById("przejdzDoGory");
var logo = document.querySelector("#logo a span");
var JPB = document.querySelectorAll("#logo a span em");

function Resize() { // event po zmianie szerokości okna przeglądarki

    if (window.pageYOffset < 100) { // 
        for (var i = 0; i < JPB.length; i++) {
            JPB[i].style.textShadow = "0.1em 0.1em 0.2em black";
            JPB[i].style.color = "#f7c552";
        }
        document.querySelector("#logo a").style.textShadow = "0.1em 0.1em 0.2em black";
        logo.style.color = "#fff";
        header.style.backgroundImage = "linear-gradient(rgb(63, 63, 63),rgba(255,255,255,0.0))";
        header.style.backgroundColor = "rgba(0,0,0,0)";
        header.style.borderBottom = "0";
    }
    if (window.innerWidth < 768) {
        for (var i = 0; i < JPB.length; i++) {
            JPB[i].style.textShadow = "2px 3px 2px rgb(212, 107, 22)";
            JPB[i].style.color = "rgb(250, 214, 80)";
        }
        document.querySelector("#logo a").style.textShadow = "2px 2px 2px rgb(135, 137, 149)";
        logo.style.color = "rgb(54, 59, 82)";

        header.style.backgroundImage = "none";
        header.style.backgroundColor = "rgb(244,247,246)";
        header.style.borderBottom = "1px solid rgb(230,230,230)";

        if (menuMobilne.classList.contains("menuMobilneRozwin"))
            menuMobilne.classList.remove("menuMobilneRozwin");
    }
}


var kolory = document.getElementsByClassName("spany");
var nav = document.getElementById("pozycjeMenuGlowne").getElementsByClassName("linkiMenu");

function scrollowanie() {
    if (window.pageYOffset < 100) { // DEFAULT
        if (kolory[0].style.color != "white") {
            for (var i = 0; i < kolory.length; i++) {
                kolory[i].style.color = "white";
            }
        }
        for (var i = 0; i < nav.length; i++) // border-left
        {
            nav[i].style.textShadow = "0.1em 0.1em 0.2em black";
            nav[i].style.height = "100%";
            nav[i].style.borderLeft = "1px solid rgba(0,0,0,0)";
            if (i == nav.length - 1) {
                nav[i].style.borderRight = "1px solid rgba(0,0,0,0)";
            }
        }
        document.querySelector("#logo a").style.textShadow = "0.1em 0.1em 0.2em black";

        for (var i = 0; i < JPB.length; i++) {
            JPB[i].style.textShadow = "0.1em 0.1em 0.2em black";
            JPB[i].style.color = "#f7c552";
        }

        logo.style.color = "#fff";
        header.style.transition = "0.3s";
        toTop.style.display = "none";
        header.style.backgroundImage = "linear-gradient(rgb(63, 63, 63),rgba(255,255,255,0.0))";
        header.style.backgroundColor = "rgba(0,0,0,0)";
        header.style.borderBottom = "0";
    } else { // SCROLL DOWN

        for (var i = 0; i < JPB.length; i++) {
            JPB[i].style.textShadow = "2px 3px 2px rgb(212, 107, 22)";
            JPB[i].style.color = "rgb(250, 214, 80)";
        }

        document.querySelector("#logo a").style.textShadow = "2px 2px 2px rgb(135 137 149)";
        logo.style.color = "rgb(54, 59, 82)";
        if (kolory[0].style.color != "#202121") { // kolor diva
            for (var i = 0; i < kolory.length; i++) {
                kolory[i].style.color = "#202121";
            }
        }

        for (var i = 0; i < nav.length; i++) // border-left
        {
            nav[i].style.height = "100%";
            nav[i].style.textShadow = "0.1em 0.1em 0.3em rgba(0,0,0,0.2)";
            nav[i].style.borderLeft = "1px solid rgb(230,230,230)";

            if (i == nav.length - 1) {
                nav[i].style.borderRight = "1px solid rgb(230,230,230)";
            }
        }

        toTop.style.display = "block";
        header.style.transition = "0.3s";
        header.style.backgroundImage = "none";
        header.style.backgroundColor = "rgb(244,247,246)";
        header.style.borderBottom = "1px solid rgb(230,230,230)";
    }

    if (window.innerWidth < 768) { // MOBILE
        for (var i = 0; i < JPB.length; i++) {
            JPB[i].style.textShadow = "2px 3px 2px rgb(212, 107, 22)";
            JPB[i].style.color = "rgb(250, 214, 80)";
        }
        document.querySelector("#logo a").style.textShadow = "2px 2px 2px rgb(135, 137, 149)";
        logo.style.color = "rgb(54, 59, 82)";
        header.style.transition = "0.3s";
        header.style.backgroundImage = "none";
        header.style.backgroundColor = "rgb(244,247,246)";
        header.style.borderBottom = "1px solid rgb(230,230,230)";
    }
}

// GALERIA
function Galeria(z) {
    var zaslona = document.getElementById("zaslonaGaleria");
    var tlo = document.getElementById("tlo");
    var div = tlo.querySelector("div");
    var img = tlo.getElementsByTagName("img")[0];
    var kopia;
    if (img == undefined) {
        kopia = z.cloneNode();
        kopia.classList.add("klik");
        tlo.classList.add("fixedGaleria");
        div.appendChild(kopia);
        zaslona.classList.add("zaslonaGaleria");

    } else {
        kopia = document.querySelector("#tlo .klik");
        kopia.classList.remove("klik");
        tlo.classList.remove("fixedGaleria");
        div.removeChild(kopia);
        zaslona.classList.remove("zaslonaGaleria");
        }
}

// ANIMACJA FOOTER
var canvas, wsei, kolor, x;
canvas = document.getElementById('plotno');
if (canvas.getContext) {
    wsei = canvas.getContext('2d');
    kolor = 'rgb(255,255,255)';
    kolor = 'rgb(80,150,30)';
    x = 1;
    wsei.fillStyle = kolor;
    wsei.strokeStyle = kolor;
    wsei.beginPath();

    kwadratGorny: {
        wsei.moveTo(x * 8, x * 8);
        wsei.lineTo(x * 18, x * 8);
        wsei.lineTo(x * 18, x * 18);
        wsei.lineTo(x * 8, x * 18);
        wsei.lineTo(x * 8, x * 8);
        wsei.moveTo(x * 10, x * 26);
        wsei.lineTo(x * 26, x * 26);
        wsei.lineTo(x * 26, x * 42);
        wsei.lineTo(x * 10, x * 42);
        wsei.lineTo(x * 10, x * 26);
    }
    goraCzolo: {
        wsei.moveTo(x * 26, x * 10);
        wsei.lineTo(x * 42, x * 10);
        wsei.bezierCurveTo(x * 56, x * 10, x * 70, x * 12.5, x * 72, x * 26);
    }
    oczyNosUsta: {
        wsei.moveTo(x * 72, x * 26);
        wsei.lineTo(x * 73, x * 37);
        wsei.lineTo(x * 81, x * 45);
        wsei.quadraticCurveTo(x * 76, x * 49, x * 80, x * 50);
        wsei.quadraticCurveTo(x * 77, x * 52.5, x * 80, x * 53);
        wsei.lineTo(x * 78, x * 55.5);
    }
    brodaPodbrodek: {
        wsei.quadraticCurveTo(x * 82, x * 65, x * 75, x * 64);
        wsei.bezierCurveTo(x * 70, x * 65, x * 64, x * 62, x * 63, x * 74);
        wsei.lineTo(x * 42, x * 74);
    }
    resztaGlowy: {
        wsei.lineTo(x * 42, x * 58);
        wsei.lineTo(x * 26, x * 58);
        wsei.lineTo(x * 26, x * 42);
        wsei.lineTo(x * 42, x * 42);
        wsei.lineTo(x * 42, x * 26);
        wsei.lineTo(x * 26, x * 26);
        wsei.lineTo(x * 26, x * 10);
    }
    wsei.stroke();
    wsei.closePath();
}

// WYWOŁANIE ANIMACJI
setInterval(function () {
    if (window.pageYOffset + innerHeight >= document.body.offsetHeight) {
        document.getElementById("animacjaWSEI").classList.add("wseiLogo");
        document.getElementById("jeden").classList.add("jeden");
        document.getElementById("dwa").classList.add("dwa");
        document.getElementById("trzy").classList.add("trzy");
        document.getElementById("jeden").style.display = "inline-block";
        setInterval(function () {
            wsei.fill();
        }, 12000);
    }
    //console.log(window.pageYOffset + innerHeight);
}, 500);

/*
linia1: {
    //wsei.fillStyle = bialy;
    // wsei.fillRect(10, 10, 20, 20);
    wsei.fillStyle = kolor;
    wsei.fillRect(8, 8, 10, 10);
    wsei.fillRect(26, 10, 16, 16);
    wsei.fillRect(42, 10, 6, 16);
    wsei.beginPath();
    wsei.moveTo(48, 10);
    wsei.bezierCurveTo(56, 10, 70, 12.5, 72, 26);
    wsei.fill();
    wsei.lineTo(48, 26);
    wsei.fill();
    wsei.closePath();
}
linia2: {
    wsei.fillStyle = kolor;
    wsei.strokeStyle = kolor;
    wsei.fillRect(10, 26, 16, 16);
    wsei.fillRect(42, 26, 16, 16);
    wsei.fillRect(56, 26, 16, 16);
    wsei.beginPath();
    wsei.moveTo(72, 26);
    wsei.lineTo(73, 37);
    wsei.stroke();
    wsei.moveTo(72, 36);
    wsei.lineTo(80, 46);
    wsei.lineTo(72, 46);
    wsei.fill();
    wsei.moveTo(80, 46);
    wsei.lineTo(80, 47);
    wsei.lineTo(70, 47);
    wsei.fill();
    wsei.moveTo(80, 47);
    wsei.lineTo(76, 49);
    wsei.lineTo(76, 46);
    wsei.fill();
    wsei.fillRect(76, 42, -18, 16); //wieksze
    wsei.fillRect(58, 42, -16, 16);
    wsei.fillRect(42, 42, -16, 16);
    wsei.closePath();
}
linia3: {
    wsei.fillStyle = kolor;
    wsei.strokeStyle = kolor;
    wsei.fillRect(42, 58, 16, 16);
    wsei.beginPath();
    wsei.moveTo(58, 73);
    wsei.lineTo(62, 64);
    wsei.lineTo(75, 64);
    wsei.lineTo(75, 58);
    wsei.lineTo(58, 58);
    wsei.fill();
    wsei.moveTo(75, 63);
    wsei.lineTo(75, 58);
    wsei.stroke();
    wsei.moveTo(72, 36);
    wsei.lineTo(72, 35);
    wsei.stroke();
    wsei.closePath();
}*/