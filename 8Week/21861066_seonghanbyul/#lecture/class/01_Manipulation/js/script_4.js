(function($) {
    $(document).ready(function() {
        // .css()
        // 스타일을 조작한다.
        // .css('스타일속성') - 해당 스타일속성을 반환.
        // .css('스타일속성', '스타일값') - 해당 노드의 스타일을 변경. (단일항목)
        // .css({ '스타일속성': '스타일값', '스타일속성': '스타일값', ... }) - 해당 노드의 스타일을 변경. (복수항목) - object 에 입력.
        var $li = $('ul > li');
        $li = $('ul').children('li');
        //console.log($li);
        // $li.each(function(index, el){    
        // });
        $.each($li, function(index, el){
            //console.log($(el));
            //console.log($(this)); // $(el);
            var $el = $(el);
            //$el.css('background-color', '#000');
            $el.text('hello');
            
            //공통으로 적용될 스타일.
            $el.css({
                'text-align': 'center',
                'line-height': '50px'
            });
            
            //if(index === 0){
            if(index % 2 === 1){
                //짝수일 때 적용될 스타일.
                $el.css({
                    'background-color': '#000',
                    'color': '#fff',
                    'text-transform': 'lowercase',
                });
            //}else if(index === 1){
            }else{
                //홀수일 때 적용될 스타일.
                $el.css({
                    'background-color': '#00f',
                    'color': '#000',
                    'text-transform': 'uppercase',
                });
            }
        });
        /*
        for(var i = 0; i < $li.length; i++){
            console.log($li.eq(i));
        }
        */

        // .width()
        // .height()
        // .position()
        // .offset()

        var $box = $('.box');
        // console.log($box.width(), $box.height());
        // console.log($box.innerWidth(), $box.innerHeight());
        // console.log($box.outerWidth(), $box.outerHeight());
        // console.log($box.outerWidth(true), $box.outerHeight(true));

        var $box1 = $('.box-1');
        // console.log($box1.width(), $box1.height());
        // console.log($box1.innerWidth(), $box1.innerHeight());
        // console.log($box1.outerWidth(), $box1.outerHeight());
        // console.log($box1.outerWidth(true), $box1.outerHeight(true));
        // width, padding, border, margin 각 속성을 포함하여 영역값을 반환.
        // width(), height()
        // - width
        // - height.
        // innerWidth(), innerHeight()
        // - width + padding(right, left)
        // - height + padding(top, bottom)
        // outerWidth(), outerHeight()
        // - width + padding(right, left) + border(right, left)
        // - height + padding(top, bottom) + border(top, bottom)
        // outerWidth(true), outerHeight(true)
        // - width + padding(right, left) + border(right, left) + margin(right, left)
        // - height + padding(top, bottom) + border(top, bottom) + margin(top, bottom)

        var width = 500;
        $box1.width(width); // width의 값을 300px 로 변경.
        // $box1.width(50 + '%') // width의 값을 50% 로 변경.
        $box1.innerWidth(width);
        $box1.outerWidth(width);
        $box1.css({'margin': 10});
        $box1.outerWidth(width, true);




        var $box2 = $('.box-2');
        // .position()
        // 해당 노드의 위치값을 반환.
        // console.log($box2.position());
        // console.log($box2.position().top, $box2.position().left); // number
        // console.log($box2.css('top'), $box2.css('left')); // string
        // console.log(parseInt($box2.css('top'), 10), parseInt($box2.css('left'))); // string -> number
        // '20px' -> 'px' 문자열 탈락하고 숫자 20만 사용하여 숫자타입으로 변경.
        // parseInt(문자열숫자, n진수); - 기본값으로 10진수.
        // parseInt(문자열숫자, 16) - 16진수로 반환.
        // Number(문자열숫자) - 숫자로 타입 변경.

        // 스타일의 top, left 를 반환한다.
        // {position:absolute; top:20px; left:40px}
        // position().top - 20px, position().left - 40px
        
        // 위치값 변경.
        $box2.css({'top': 300, 'left': 500});
        // console.log($box2.position());




        // .offset()
        // DOM (0,0) 좌표를 기준으로 해당노드의 위치값를 반환.
        // console.log($box2.offset());
        // console.log($box2.offset().top, $box2.offset().left);


        // .scrollTop(), .scrollLeft();
        // 해당 노드의 스크롤 위치값을 반환.
        // x, y 만 존재 - scrollTop(), scrollLeft()
        var $box3 = $('.box-3');
        var $box4 = $('.box-4');
        // console.log($box3.scrollTop(), $box3.scrollLeft()); // 스크롤 되는 스타일이 아님.
        // console.log($box4.scrollTop(), $box4.scrollLeft()); // 초기 스크롤 위치값이 0,0
        var $button = $('button');
        $button.click(function(e) {
            e.preventDefault();
            // 현재 시점의 box-4 스크롤 위치값 반환.
            // console.log($box4.scrollTop(), $box4.scrollLeft());
        });
        
        var $window = $(window);
        // $(window) - 브라우저 창(window 객체)을 셀렉터로 반환.
        console.log($window.scrollTop());
        // window 객체의 스크롤 위치값 반환. y 위치값.
        // 전체에 스크롤이 생겼을 때, 위치값을 반환.
        // 스크롤이 되지 않는 overflow:hidden 인 경우, 0 반환.

        // 스크롤 이벤트.
        // *****
        $window.scroll(function(e) {
            console.log($window.scrollTop());
        });
    });
})(jQuery);