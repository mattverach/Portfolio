$(document).ready(function(){

let $btns = $('.project-area .button-group button');

$btns.click(function(e){

    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
        filter : selector
    })

    return false
})

    $('.project-area .button-group #btn1').trigger('click');

});

const myFunction = () => window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky");

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("home");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
