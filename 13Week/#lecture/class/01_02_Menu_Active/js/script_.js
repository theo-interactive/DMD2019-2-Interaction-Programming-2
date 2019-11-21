(function($){
    $(document).ready(function() {
        //Selector.
        var $win = $(window);

        var $gn = $('#global-nav');
        var $gnEl = $gn.find('a');

        var $article = $('article.content');
        var $section = $article.children('.section');
        // console.log($section); // 6개 반환. [] 노드요소가 담긴 배열로 반환.

        //Event Bind.
        function addEvent() {
            // $win.on('scroll.evt1', onScroll1);
            $win.on('scroll.window', onScroll).trigger('scroll.window');
            // $win.off('scroll.window');
            $gnEl.on('click', onClickGN);
        }

        //Event Handler
        function onScroll1(e) {
        }

        function onScroll(e) {
            // console.log('scroll');
            var posY = $win.scrollTop();
            // 현재의 Y 스크롤 좌표.
            // ---- 브라우저의 Y 좌표와 다른 요소들을 비교.
            // jQuery.each();
            // $.each();
            // 배열의 반복문.
            // $.each([el, el, el], function(index, el) {
                // each() callback 함수의 2개의 매개변수.
                // 1번째 매개변수 - 원소의 순서.
                // 2번째 매개변수 - 원소 값.
            // });
            $.each($section, function(idx, el) {
                var $el = $(el),
                    startY = $el.offset().top,
                    endY = startY + $el.outerHeight(true);
                    // $el.offset() - 해당요소의 스크롤 위치값. - {top: y?, left: x?}
                    // $el.offset().top - 요소가 시작하는 지점의 위치값.
                if(posY >= startY && posY < endY){
                    // console.log(idx);
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
                id = $el.attr('href'), // #section-1
                $section = $(id), // $('#section-1');
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