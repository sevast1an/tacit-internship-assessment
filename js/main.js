// Filter Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

 // Animation for refresh icon on accordion click
$(document).ready(function(){
    $(".accordion").click(function(){
        $(".fa-refresh").toggleClass('rotated');
    });
});



// Table/Grid view

// Get the elements with class="column"
var elements = document.getElementsByClassName("grid-container");

// Declare a loop variable
var i;

// List View
function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
        elements[i].style.marginTop = "0";
        elements[i].style.marginBottom = "30px";

    }
}

// Grid View

if ( $(window).width() > 960) {
    function gridView() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.width = "calc(100% * 1 / 3.001)";
        }
    }
}
else {
    function gridView() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.width = "calc(100% * 1 / 2.001)";
        }
    }
}

// Add active class to the current button (highlight it)
var container = document.getElementById("btnContainer");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



/// CART FUNCTIONALITY
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var amount = document.getElementById('amount');
var addCart = document.getElementById('add');
var cart = document.getElementById('cart');


var count = 1;
var cartIsEmpty = true;

// COUNTER
plus.onclick = function() {
    count += 1;
    amount.innerHTML = count;
};

minus.onclick = function(){
    if (count === 1) return;
    count-=1;
    amount.innerHTML =count;
};


// ADD/ REMOVE FROM CART
addCart.onclick = function(){
    if (cartIsEmpty === true) {
        cartIsEmpty = false;
        addCart.innerHTML = "remove";
        cart.innerHTML = count;
        cart.classList.add("mystyle");
    } else {
        cartIsEmpty = true;
        addCart.innerHTML = "add to cart";
        cart.innerHTML = "0";

    }
}


