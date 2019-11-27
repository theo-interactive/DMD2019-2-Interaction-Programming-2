(function($) {
    var $box1 = $('.box1');
    var $box2 = $('.box2');
    var $box3 = $('.box3');
    var $box4 = $('.box4');
    var $box5 = $('.box5');
    var $section1 = $('.section1');
    var $section2 = $('.section2');
    var $section3 = $('.section3');
    var $section4 = $('.section4');
    var $section5 = $('.section5');

    var isVisible = false;

    $(window).on('scroll', function() {
        if (checkVisible($('.box1')) && !isVisible) {
            $section1.html('Ana1');
            $actSubText.html('Sarah Adler');
        } else if (checkVisible($('.box2')) && !isVisible) {
            $section2.html('Ana2');
            $actSubText.html('Tim Kalkhof');
        } else if (checkVisible($('box3')) && !isVisible) {
            $section3.html('Ana3');
            $actSubText.html('Roy Miler');
        } else if (checkVisible($('box4')) && !isVisible) {
            $section4.html('Ana4');
            $actSubText.html('Tamir Ben');
        } else if (checkVisible($('box5')) && !isVisible) {
            $section5.html('Ana5');
            $actSubText.html('Tamir Ben');
        } else {
            isVisible = false;
            $actText.html('');
            $actSubText.html('');
        }
    });

    function checkVisible(elm, eval) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();   
        
        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }
})(jQuery);