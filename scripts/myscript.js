var animLogo = document.getElementById('anim-logo');

var myWindow = Array.from(document.querySelectorAll('.window'));
var aboutWindow = myWindow[0];
var homeWindow = myWindow[1];
var workWindow = myWindow[2];

var windowFlex = document.getElementById("window-flex");

var getGrid = document.getElementsByClassName("nav-grid")[0];
//gets each child in the nav grid and converts them into an array
var navGridElements = Array.from(document.querySelectorAll('.nav-grid > *'));

var theBigScroll = document.getElementById("scroll-window");

var scrollGrid = document.getElementsByClassName("scroll-grid")[0];
var textGrid = document.getElementsByClassName("scroll-grid")[1];
var texts = Array.from(document.querySelectorAll("#text-grid>*"));

var workDivs = Array.from(document.querySelectorAll('#scroll-window > *'));
//this array includes scroll bar, which we don't want to change. Start at array[1] to avoid it.

 //stores each divbottom in an array ONCE.
let divTops = [];

for (i=0; i<workDivs.length; i++){
    divTops[i] = $(workDivs[i]).offset().top;
    //console.log("top of div " + i + " is" + divTops[i]);
}

document.querySelector(".border").addEventListener("animationend", () => {
    console.log("Animation ended");
    document.body.style.backgroundImage = "linear-gradient(rgb(72, 11, 11), rgb(0, 0, 0))";
    document.body.style.backgroundColor = "black";
  });

//makes the text visible on sidebar hover.
textGrid.addEventListener("mouseover", scrollHover);



//when hovering over scrollbar, opens menu.
function scrollHover(){
    for(i=1;i<=4;i++) {
        texts[i].classList.remove("pop-out-text");
        // document.getElementById(`text${i}`).classList.remove(`text-grid-${i}`);
        // document.getElementById(`text${i}`).style.display="flex";
    }
}

//changes scroll bar porportions
var discipline = $(".discipline").toArray();

function callbackFunction(entries){
    entries.forEach(entry => {
        const index = entry.target.getAttribute("data-index");
        if(entry.isIntersecting) {
            scrollGrid.classList.add(`scroll-grid-${index}`);
            //textGrid.classList.add(`scroll-grid-${index}`);
            texts[parseInt(index)].classList.add("pop-out-text");
        }else {
            scrollGrid.classList.remove(`scroll-grid-${index}`);
            //textGrid.classList.remove(`scroll-grid-${index}`);
            texts[index].classList.remove("pop-out-text");
        }
    })
}
const options = {
    root: document.getElementById("scroll-window"),
    threshold: 0.5
}

const observer = new IntersectionObserver(
    callbackFunction,
    options
)

observer.observe(discipline[0]);
observer.observe(discipline[1]);
observer.observe(discipline[2]);
observer.observe(discipline[3]);


//moves window when navigation is clicked

function aboutClick() {

    //recalculates navigation grid
    getGrid.classList.add("grid-move-right");
    getGrid.classList.remove("grid-move-left");

    //justifies navigation words right
    navGridElements.forEach(function (element) {
        element.style.marginRight = "0%";
    });
    navGridElements.forEach(function (element) {
        element.style.marginLeft = "100%";
    });

    //moves windowFlex to the right
    windowFlex.classList.remove("animate-left");
    windowFlex.classList.add("animate-right");
}

function homeClick() {

    //recalculates navigation grid
    getGrid.classList.remove("grid-move-right");
    getGrid.classList.remove("grid-move-left");

    //justifies navigation words center
    navGridElements.forEach(function (element) {
        element.style.marginRight = "50%";
    });
    navGridElements.forEach(function (element) {
        element.style.marginLeft = "50%";
    });

    //moves windowFlex to the center
    windowFlex.classList.remove("animate-right");
    windowFlex.classList.remove("animate-left");
}

function workClick() {

    //recalculates navigation grid
    getGrid.classList.add("grid-move-left");
    getGrid.classList.remove("grid-move-right");

    //justifies navigation words right
    navGridElements.forEach(function (element) {
        element.style.marginRight = "100%";
    });
    navGridElements.forEach(function (element) {
        element.style.marginLeft = "0%";
    });

    //moves windowFlex to the left
    windowFlex.classList.remove("animate-right"); //if it is on the about class
    windowFlex.classList.add("animate-left");
}