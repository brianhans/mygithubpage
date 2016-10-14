$(document).ready(function() {

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        console.log("ran");
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

});
