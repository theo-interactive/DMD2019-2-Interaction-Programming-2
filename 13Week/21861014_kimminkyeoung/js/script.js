(function($){
    $(document).ready(function() {
        //Selector.
        var $win = $(window);

        var $gn = $('#global-nav');
        var $gnEl = $gn.find('a');

        var $article = $('article.content');
        var $section = $article.children('.section');

        var _gnH = $gn.height();
        var _exScroll;
        //Event Bind.
        function addEvent() {
            $win.on('scroll', onScroll).trigger('scroll');
            $gnEl.on('click', onClickGN);
        }


        var $sec1 = $('#section-1');
        var $sec2 = $('#section-2');
        var $sec3 = $('#section-3');

        var $img1 = $('.img1');
        var $img2 = $('.img2');
        var $img3 = $('.img3');

        var range = 200;

        $(window).on('scroll', function () {
        
            var scrollTop = $(this).scrollTop(),
                height = $sec1 .outerHeight(),
                offset = height / 2,
                calc = 1 - (scrollTop - offset + range) / range * 0.4;

                $sec1.css({ 'opacity': calc });
        })


    
    
    

        //Event Handler
        function onScroll(e) {
            // console.log('scroll');
            var posY = $win.scrollTop();
            if(_exScroll != undefined && posY >= 0){
                if (_exScroll<posY ) {
                    // console.log(">")
                    if (!$gn.hasClass('hide'))$gn.addClass('hide');
                }else{
                    if ($gn.hasClass('hide'))$gn.removeClass('hide');
                    // console.log("<")
                }
            }

            $.each($section, function(idx, el) {
                var $el = $(el),
                startY,endY;
                if (idx === 0) {
                    startY =0;
                }else{
                    startY = $el.offset().top-_gnH;
                }
                endY = startY + $el.outerHeight(true);
                // 현재 요소의 y 스크롤 좌표 시작점 - 헤더높아 만큼 - 해줌
                if(posY >= startY && posY < endY){
                    if(!$gnEl.eq(idx).hasClass('active')){
                        $gnEl.removeClass('active');
                        $gnEl.eq(idx).addClass('active');
                    }
                }
            });
            _exScroll = posY;
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