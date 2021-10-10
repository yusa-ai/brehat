let btn = $("#scroll-to-top");
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.show();
    } else {
        btn.hide();
    }
});

btn.on("click", function() {
    window.scrollTo(0, 0);
});