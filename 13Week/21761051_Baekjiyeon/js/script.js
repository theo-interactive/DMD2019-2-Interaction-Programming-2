(function($){
    $(document).ready(function() {
        //Selector.
        var $win = $(window);

        var $gn = $('#global-nav');
        var $gnEl = $gn.find('a');

        var $article = $('article.content');
        var $section = $article.children('.section');
        // console.log($section); // 6개 반환.
        
        var _gnH = $gn.height(); // 헤더의 높이
        // console.log(_gnH);
        // var _exScroll = $win.scrollTop();
        var _exScroll = 0;

        //Event Bind.
        function addEvent() {

            $win.on('scroll', onScroll).trigger('scroll');
            $gnEl.on('click', onClickGN);
        }

        //Event Handler
        function onScroll(e) {
            // console.log('scroll');
        var posY = $win.scrollTop();

         // 아래로 이동 - 헤더 숨기기.
         // 위로 이동 - 헤더 보이기.

         // 스크롤이 위로 이동하는지? 아래로 이동하는지? 체크
            if(_exScroll != undefined && posY >= 0){
                if(_exScroll < posY){
                    // console.log('>');
                    if(!$gn.hasClass('hide')) $gn.addClass('hide')
                    $gn.addClass('hide');
                }else{
                    // console.log('<');
                    if($gn.hasClass('hide')) $gn.removeClass('hide');
                }
            }
         

            // 현재의 Y 스크롤 좌표.
            // ---- 브라우저의 Y 좌표와 다른 요소들의 비교.
            // jQeury.each();
            // $.each;
            // 배열의 반복문.
            // $.each([el, el, el], function(index, el) {
            //     // each() callback 함수의 2개의 매개변수.
            //     // 1번째 매개변수 - 원소의 순서.
            //     // 2번쩨 매개변수 - 원소 값.
            // });

            $.each($section, function(idx, el) {
                var $el = $(el),
                    startY, endY;

                    if(idx === 0){
                        startY = 0;
                    }else{
                        startY = $el.offset().top -_gnH; // 현재 요소의 Y 스크롤 좌표 시작점에서 헤더의 높이만큼
                    }
                    endY = startY + $el.outerHeight(true);

                    // $el.offset() - 해당요소의 스크롤 위치값. - {top: y, left x?}
                    //$el.offset().top - 요소가 시작하는 지점의 위차값
                    if(posY >= startY && posY < endY){
                        if(!$gnEl.eq(idx).hasClass('active')){
                        $gnEl.removeClass('active');
                        $gnEl.eq(idx).addClass('active');
                        }
                }
            });

            // **** 이전 스크롤 좌표를 갱신. 스크롤이 끝나는 지점에서 체크~
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