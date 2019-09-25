// 1
(function($) {
    $(document).ready(function() {
        $('li').addClass('active');
    });
})(jQuery);

// 2
(function($) {
    $(document).ready(function() {
        console.log($('.type-2'));
        $('.type-2').addClass('current');
    });
})(jQuery);

// 3
(function($) {
    $(document).ready(function() {
        console.log($('a[href="#"]'));
        $('a[href="#"]').addClass('underline');
    });
})(jQuery);

// 4
(function($) {
    $(document).ready(function() {
        console.log($('li[data-role="list"]'));
        $('li[data-role="list"]').addClass('role');
    });
})(jQuery);

// 5
(function($) {
    $(document).ready(function() {
        console.log($('nav#menu'));
        $('nav#menu').removeClass('open');
    });
})(jQuery);

// 6
(function($) {
    $(document).ready(function() {
        console.log($('section.content').length);
    });
})(jQuery);