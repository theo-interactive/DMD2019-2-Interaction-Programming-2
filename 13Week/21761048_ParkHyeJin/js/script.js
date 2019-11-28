(function($){
    $(document).ready(function() {
        //Selector.
        var $win = $(window);

        var $gn = $('#global-nav');
        var $gnEl = $gn.find('a');

        var $article = $('article.content');
        var $section = $article.children('.section');

        var _gnH = $gn.height();  // 헤더의 높이.
        //var _exPosY = $win.scrollTop();
        var _exPosY;

        var $title = $('.title');
        var $desc = $('.desc');

        //Event Bind.
        function addEvent() {
            $win.on('scroll', onScroll).trigger('scroll');
            $gnEl.on('click', onClickGN);
        }

        //Event Handler
        function onScroll(e) {
            var posY = $win.scrollTop();

            // 아래로 이동 - 헤더 숨기기.
            // 위로 이동 - 헤더 보이기.
            
            // 스크롤이 위로 이동하는지? 아래로 이동하는지? 체크.
            if(_exPosY != undefined && posY >= 0) {
                if(_exPosY < posY){
                    if(!$gn.hasClass('hide')) $gn.addClass('hide');
                }else{
                    if($gn.hasClass('hide')) $gn.removeClass('hide');
                }
            }
            $.each($section, function(idx, el) {
                var $el = $(el),
                    startY, endY;
                if(idx === 0){
                    startY = 0;
                }else{
                    startY = $el.offset().top - _gnH;
                    // 현재 요소의 y 스크롤 좌표 시작점 - 헤더의 높이
                }
                endY = startY + $el.outerHeight(true);
                if(posY >= startY && posY < endY){
                    if(!$gnEl.eq(idx).hasClass('active')){
                        $gnEl.removeClass('active');
                        $gnEl.eq(idx).addClass('active');
                    }
                }
            });
            
            //**** 이전 스크롤 좌표를 갱신. 스크롤이 끝나는 지점에서 체크.
            _exPosY = posY;
        }

        function onClickGN(e){
            e.preventDefault();
            var $el = $(e.currentTarget),
                id = $el.attr('href'),
                $section = $(id),
                posY = $section.offset().top;
            $('html, body').stop(true).animate({scrollTop: posY}, {duration:500, easing: 'easeInOutCubic'});
        }


        var isVisible = false;

        $(window).on('scroll', function() {
            if (checkVisible($('#section-1')) && !isVisible) {
                console.log('1');
                $title.html('The Cake Maker');
                $desc.html('2018');
            } else {
                isVisible = false;
                $title.html('');
                $desc.html('');
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


        //Init.
        function init(){
            addEvent();
        }

        //Run initialize.
        init();
    });
})(jQuery);