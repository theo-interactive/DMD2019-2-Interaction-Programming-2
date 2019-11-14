(function($){
    $(document).ready(function() {
        //Selector.
        var $win = $(window);

        var $gn = $('#global-nav');
        var $gnEl = $gn.find('a');

        var $article = $('article.content');
        var $section = $article.children('.section');

        //Event Bind.
        function addEvent() {
            $win.on('scroll', onScroll).trigger('scroll');
            $gnEl.on('click', onClickGN);
        }

        //Event Handler
        function onScroll(e) {
            // console.log('scroll');
            var posY = $win.scrollTop();

            $.each($section, function(idx, el) {
                var $el = $(el),
                    startY = $el.offset().top,
                    endY = startY + $el.outerHeight(true);
                if(posY >= startY && posY < endY){
                    if(!$gnEl.eq(idx).hasClass('active')){
                        $gnEl.removeClass('active');
                        $gnEl.eq(idx).addClass('active');
                    }
                }
            });
        }

        function onClickGN(e){
            e.preventDefault();
            var $el = $(e.currentTarget),
                id = $el.attr('href'),
                $section = $(id),
                posY = $section.offset().top;
            // $('html, body').stop(true).animate({scrollTop: posY}, 500);
            $('html, body').stop(true).animate({scrollTop: posY}, {duration:500, easing: 'easeInOutCubic'});
        }

        //Init.
        function init(){
            addEvent();
        }

        //Run initialize.
        init();
    });
})(jQuery);