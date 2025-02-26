$('#scroll-window').scroll(function() {

    var scroll = $('#scroll-window').scrollTop();


    for (i=1; i<divTops.length; i++){
        //special case for first div & last div
       if(scroll > divTops[i] && scroll <divTops[i+1]){
            console.log("Now on div" + i)
            scrollGrid.classList.add(`scroll-grid-${i}`);
        } 
        else {
            scrollGrid.classList.remove(`scroll-grid-${i}`);
            //console.log("removed" + `scroll-grid-${i}`);
        }
    }

    //Don't look at my if else statements :((


    // if (scroll < divTops[2]) {
    //     console.log("Now on div" + 1);
    //     scrollGrid.classList.add(`scroll-grid-${1}`);
    //     textGrid.classList.add(`scrol-grid-${1}`);
    //     document.getElementById("text1").classList.add(`text-grid-${1}`);
    // } else {
    //     scrollGrid.classList.remove(`scroll-grid-${1}`);
    //     textGrid.classList.remove(`scroll-grid-${1}`);
    //     document.getElementById("text1").classList.remove(`text-grid-${1}`);
    // }

    // if (scroll>divTops[2] && scroll <divTops[3]) {
    //     console.log("Now on div" + 2);
    //     scrollGrid.classList.add(`scroll-grid-${2}`);
    //     textGrid.classList.add(`scroll-grid-${2}`);
    //     document.getElementById("text2").classList.add(`text-grid-${2}`);
    // }
    // else {
    //     scrollGrid.classList.remove(`scroll-grid-${2}`);
    //     textGrid.classList.remove(`scroll-grid-${2}`);
    //     document.getElementById("text2").classList.remove(`text-grid-${2}`);
    // }

    // if (scroll>divTops[3] && scroll <divTops[4]) {
    //     console.log("Now on div" + 3);
    //     scrollGrid.classList.add(`scroll-grid-${3}`);
    //     textGrid.classList.add(`scroll-grid-${3}`);
    //     document.getElementById("text3").classList.add(`text-grid-${3}`);
    // }
    // else {
    //     scrollGrid.classList.remove(`scroll-grid-${3}`);
    //     textGrid.classList.remove(`scroll-grid-${3}`);
    //     document.getElementById("text3").classList.remove(`text-grid-${3}`);
    // }

    // if (scroll>divTops[4]) {
    //     console.log("Now on div" + 3);
    //     scrollGrid.classList.add(`scroll-grid-${4}`);
    //     textGrid.classList.add(`scroll-grid-${4}`);
    //     document.getElementById("text4").classList.add(`text-grid-${4}`);
    // }
    // else {
    //     scrollGrid.classList.remove(`scroll-grid-${4}`);
    //     textGrid.classList.remove(`scroll-grid-${4}`);
    //     document.getElementById("text4").classList.remove(`text-grid-${4}`);
    // }

    
    console.log(scroll);

});


var views = $(".discipline");

var listener = function() {
    views.each(function() {
        var view = $(this)[0]; //converts jQuery to DOM element
        var bounds = view.getBoundingClientRect();
        if (bounds.top >0 && bounds.top <window.innerHeight){
            console.log("In zone!");
        }
    });
};

$('#scroll-window').on("scroll", listener);