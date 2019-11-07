(function($){
    $(document).ready(function(){
        /*
        Quest 1.
        .banner 노드의 CSS 속성 중 overflow 를 hidden 으로 변경합니다.
        */

        //Answer 1.
        var $banner = $('.banner');
        $banner.css({'overflow' : 'hidden'});

        /*
        Quest 2.
        .banner-wrap 노드의 width 와 height 를 .banner 의 크기와 동일하게 적용합니다.
        */

        //Answer 2.
        var bannerW = $banner.width(), bannerH = $banner.height();
        var $bannerWrap = $('.banner-wrap');
        $bannerWrap.width(bannerW).height(bannerH);

        // $('.banner-wrap')
          //  .width($('.banner').width())
          //  .height($('.banner').height());
        
        // $el.width(), $el.height();
        // 노드의 width, height 값을 가져온다.
        // $el.width(100), $el.height(100);
        // - 숫자타입, 문자열 ex. "100px", "100%", "100vw", "100vh"
        // 노드에 width, height 값을 적용

        /*
        Quest 3.
        .banner-container 노드의 width 를 .banner-wrap 의 width x .banner-item 의 개수 의 너비만큼 계산하여 적용하고, height 는 100% 로 지정합니다.
        */

        //Answer 3.
        var $bannerContainer = $('.banner-container');
        var $bannerItem = $bannerContainer.find('.banner-item'); // 배열 반환.
        var max = $bannerItem.length; // 배열의 개수를 구하는 Array.length
        var containerW = bannerW * max;
        $bannerContainer.width(containerW).height(100 + '%'); // 100 + "%" 문자열 연산, "100%"

        /*
        Quest 4.
        .banner-item 노드의 float 속성을 left 로 변경하고, width 를 .banner-wrap 의 width 와 동일하게, height 를 100% 로 지정합니다.
        */

        //Answer 4.
        $bannerItem.css({'float' : 'left'}).width(bannerW).height(100 + '%');

        /*
        Quest 5.
        .banner-item 의 자식노드 img 요소의 width 를 100% 로 지정합니다.
        */

        //Answer 5.
        var $bannerItemImg = $bannerItem.find('img');
        $bannerItemImg.width(100 + '%');

        /*
        Quest 6.
        .paddle-nav 의 자식노드 .arrow.prev 노드의 left 속성을 18px 로 지정합니다.
        */

        //Answer 6.
        var $paddleNav = $('.paddle-nav');
        var $arrowPrev = $paddleNav.find('.arrow.prev');
        $arrowPrev.css({'left' : 18 + 'px'});

        /*
        Quest 7.
        .paddle-nav 의 자식노드 .arrow.next 노드의 right 속성을 18px 로 지정합니다.
        */

        //Answer 7.
        var $arrowNext = $paddleNav.find('.arrow.next');
        $arrowNext.css({'right' : 18 + 'px'});

        /*
        Quest 8.
        .dot-nav 노드의 bottom 속성을 20px 으로 지정합니다.
        */

        //Answer 8.
        var $dotNav = $('.dot-nav');
        $dotNav.css({'bottom' : 20 + 'px'});

        /*
        Quest 9.
        0 값을 가지는 _id 변수를 선언하고 slideLeft 함수를 생성합니다.
        slideLeft 함수 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 왼쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 -- 하여 감소시키고 위치값 계산)
        */

        //Answer 9.
        var _id = 0;
        function slideLeft() {
            _id--; // _id 의 값이 1 씩 감소 _id = _id - 1; === _id--;
            slideAnim();
        }
        function slideAnim(){
            // ...
            // ...
            // 1000(width) * (1) * -1 = -1000;
            // 1000(width) * (0) * -1 = 0;
            // 1000(width) * (-1) * -1 = 1000;
            // ...
            // ...

            var left = bannerW * _id * -1;
            // left 속성을 이동할 때.
            // 왼쪽에서 오른쪽으로 이동하려면 0px 에서 -(마이너스) 값으로 이동해야 화면에서 이동되는 것이 확인된다.
            // $bannerContainer.css({'left': left});
            // $bannerContainer.stop(true).animate({'left': left}, 500);
            /*
            $bannerContainer.stop(true).animate(
                {
                    'left': left
                }, 
                {
                    duration: 500,
                    complete: function() {
                        dotSelect();
                    }
                }
            );
            */
           
            // dotSelect();
            paddleCheck();
            $bannerContainer.stop(true).animate({'left': left }, {duration: 500, complete: function() {
            //$bannerContainer.stop(true).delay(500).animate({'left': left }, {duration: 500, complete: function() {
                // console.log('애니메이션 완료');
                dotSelect();
                //paddleCheck();
            }});

            // animate() - 애니메이션 효과.
            // animate({css 스타일}, 속도);
            // animate({css 스타일}, {옵션});
            // {옵션} - {duration: 속도, complete: function() {애니메이션이 완료된 후 콜백함수}}

            // delay() - 애니메이션을 속도만큼 지연.
            // delay(속도) 
        }

        /*
        Quest 10.
        slideRight 함수를 생성하고 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 오른쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 ++ 하여 증감시키고 위치값 계산)
        */

        //Answer 10.
        function slideRight() {
            _id++; // 0 -> 1, 1 -> 2, 2 -> 3...
            slideAnim();
        }

        /*
        Quest 11.
        .arrow.prev 노드 클릭시 slideLeft, .arrow.next 노드 클릭시 slideRight 이벤트가 실행되도록 적용합니다.
        */

        //Answer 11.
        $arrowPrev.on('click', function(e) {
            e.preventDefault();
            slideLeft();
        });
        $arrowNext.on('click', function(e) {
            e.preventDefault();
            slideRight();
        });

        /*
        //Quest 12.
        dotSelect 함수를 생성하고 현재 보여지는 이미지의 순서에 따라 span( .dot-nav 노드의 자식요소 ) 에 ‘selected’ 클래스를 추가합니다.
        클래스 추가에 앞서 이전에 지정 된 span.selected 클래스가 있을 경우 삭제시킵니다.
        slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 함수(callback)에서 dotSelect 함수가 실행될 수 있도록 적용합니다.
        */

        //Answer 12.
        // 이미지 순서 - _id;
        var $dotNavSpan = $dotNav.find('span'); // 노드 배열 반환 (5개).
        function dotSelect() {
            $dotNavSpan.removeClass('selected');
            $dotNavSpan.eq(_id).addClass('selected');
        }

        /*
        Quest 13.
        paddleCheck 함수를 생성하고 해당 조건문을 적용합니다.
        (1) _id 값이 0 일 경우, .arrow.prev 노드에 'disabled' 클래스를 추가합니다.
        (2) _id 값이 보여지는 이미지의 마지막에 해당되는 경우, arrow.next 노드에 'disabled' 클래스를 추가합니다.
        (3) _id 값이 0 이나 마지막이 아닐 경우, .arrow 노드의 'disabled' 클래스를 모두 삭제합니다.
        DOM이 준비되면 초기에 paddleCheck 함수를 실행하고, slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 시점(callback)에 paddleCheck 함수가 실행될 수 있도록 적용합니다.
        */

        //Answer 13.
        function paddleCheck(){
            if(_id === 0){
                $arrowPrev.addClass('disabled');
            }else if(_id === max - 1){ // item(5) 0, 1, 2, 3, 4
                $arrowNext.addClass('disabled');
            }else{
                $arrowPrev.removeClass('disabled');
                $arrowNext.removeClass('disabled');
            }
        }

        // initialize. 초기화 세팅.
        paddleCheck();
    });
})(jQuery);