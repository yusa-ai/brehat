function changerFondNavbar() {
    let scroll = $(window).scrollTop();
    let navbar = $(".navbar");
    let services = $(".dropdown-menu");

    let blue = "#14679e";
    let carouselBackground = getComputedStyle(document.documentElement).getPropertyValue("--carousel-background");

    if (!collapsed || scroll > 0) {
        // Fond bleu
        navbar.removeAttr("style");
        services.removeAttr("style");
        //navbar.css("background", "linear-gradient(to right, #10527E, #197bbd)");
        navbar.css("background-color", blue);
        navbar.css("padding-top", "0");
        navbar.css("padding-bottom", "0");
        services.css("background-color", blue);
    } else {
        // Fond transparent
        navbar.removeAttr("style");
        services.removeAttr("style");
        navbar.css("background-color", "transparent");
        navbar.css("padding-top", "10px");
        navbar.css("padding-bottom", "10px");
        services.css("background-color", carouselBackground);
    }
}

let collapsed = true;

let navbar = document.getElementById("navbar");
navbar.addEventListener("hidden.bs.collapse", function () {
    collapsed = true;
    changerFondNavbar();
})
navbar.addEventListener("shown.bs.collapse", function () {
    collapsed = false;
    changerFondNavbar();
})

// Change le fond et la taille de la navbar en fonction de la position du scroll sur la page
$(window).scroll(function () {
    changerFondNavbar();
});