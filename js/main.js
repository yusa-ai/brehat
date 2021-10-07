function changerFondNavbar() {
    let scroll = $(window).scrollTop();
    let navbar = $(".navbar");

    if (!collapsed || scroll > 0) {
        // Fond bleu
        navbar.removeAttr("style");
        navbar.css("background", "linear-gradient(to right, #10527E, #197bbd)");
        navbar.css("padding-top", "0");
        navbar.css("padding-bottom", "0");
    } else {
        // Fond transparent
        navbar.removeAttr("style");
        navbar.css("background-color", "transparent");
        navbar.css("padding-top", "10px");
        navbar.css("padding-bottom", "10px");
    }
}

let collapsed = true;

let navbar = document.getElementById("navbarNav");
navbar.addEventListener("hidden.bs.collapse", function() {
    collapsed = true;
    changerFondNavbar();
})
navbar.addEventListener("shown.bs.collapse", function() {
    collapsed = false;
    changerFondNavbar();
})

// Change le fond et la taille de la navbar en fonction de la position du scroll sur la page
$(window).scroll(function() {
    changerFondNavbar();
});