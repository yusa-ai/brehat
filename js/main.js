let btn = $("#scroll-to-top");
$(window).scroll(function() {
    300 < $(window).scrollTop() ? btn.show() : btn.hide()
}), btn.on("click", function() {
    window.scrollTo(0, 0)
});