(function($){
    $(document).ready(function(){

        // Selector. (셀렉터).
        var $win = $(window);

        var $banner = $('.banner');
        var $bannerWrap = $banner.find('.banner-wrap');
        var $bannerContainer = $bannerWrap.find('.banner-container');
        var $bannerItem = $bannerContainer.find('.banner-item');
        var $bannerItemImg = $bannerItem.find('img');
        
        var $paddleNav = $('.paddle-nav');
        var $arrow = $paddleNav.find('.arrow');
        var $arrowPrev = $paddleNav.find('.arrow.prev');
        var $arrowNext = $paddleNav.find('.arrow.next');

        var $dotNav = $('.dot-nav');
        var $dotNavSpan = $dotNav.find('span');

        // Value Setting. (전역변수, 초기값 설정).
        var _cuId = 0;
        var _exId = _cuId;
        var _max = $bannerItem.length;
        var _bannerW = 0, _bannerH = 0, _containerW = 0;

        // Reset. (값 재설정).
        var reset = function() {
            dotSelect();
            paddleCheck();
        };

        // Event Bind. (노드에 이벤트 추가).
        var addEvent = function() {
            // window 리사이즈.
            $win.on('resize', function(e) {
                
                _bannerW = $win.width();
                _bannerH = $win.height();
                _containerW = _bannerW * _max;

                $banner.width(_bannerW).height(_bannerH);
                $bannerWrap.width(_bannerW).height(_bannerH);
                $bannerContainer.width(_containerW);
                $bannerItem.width(_bannerW);
                
                slideAnim(true); // 스타일만 변경.
            }).trigger('resize');

            // prev, next 클릭.
            $arrowPrev.on('click', function(e) {
                e.preventDefault();
                _cuId--;
                // 조건 추가.
                // 아이디가 0 이하이면 (-1...) 이동 X
                if(_cuId < 0) _cuId = 0;
                slideAnim(); // 애니메이션 적용.
            });
            $arrowNext.on('click', function(e) {
                e.preventDefault();
                _cuId++;
                // 조건 추가.
                // 아이디가 _max - 1 보다 커지면 이동 X
                if(_cuId > _max - 1) _cuId = _max - 1;
                slideAnim();
            });

            // dot-nav > span 클릭.
            $dotNavSpan.on('click', function(e) {
                e.preventDefault();
                var $el = $(e.currentTarget), index = $dotNavSpan.index($el);
                // $items.index($item) - 전체 요소 중 자신의 순서를 찾을 때.
                if(_exId !== index){ // 현 시점에 클릭된 요소가 활성화가 되어 있지 않을 경우에만 애니메이션 적용.
                    _cuId = index;    
                    slideAnim();
                }
            });
        };

        // Initialize. (초기화).
        var init = function() {
            reset();
            addEvent();
        };

        // Image Slider Function. (이미지 슬라이더에 필요한 기능 함수).
        var slideAnim = function(bool) {
            var isStatic = false;
            if(bool === true){
                isStatic = bool;
            }
            //함수를 호출했을 때, 애니메이션을 시킬 것인지? 스타일을 변경시킬지 여부를 판단하는 Boolean.
            //var isStatic = (bool) ? bool : false;
            var left = _bannerW * _cuId * -1;
            if(!isStatic){ // isStatic === false
                paddleCheck();
                // $bannerContainer.stop(true).animate({'left': left }, {duration: 500, complete: function() {
                $bannerContainer.stop(true).animate({'left': left }, {duration: 500, easing: 'easeInOutQuart', complete: function() {
                    dotSelect();
                    _exId = _cuId;
                    // 이전 아이디 업데이트.
                }});
            }else{ // isStatic === true
                paddleCheck();
                dotSelect();
                $bannerContainer.stop(true).css({'left': left});
                _exId = _cuId;
            }
        }
        var dotSelect = function() {
            $dotNavSpan.removeClass('selected');
            $dotNavSpan.eq(_cuId).addClass('selected');
        }
        var paddleCheck = function() {
            if(_cuId === 0){
                $arrowPrev.addClass('disabled');
            }else if(_cuId === _max - 1){
                $arrowNext.addClass('disabled');
            }else{
                $arrowPrev.removeClass('disabled');
                $arrowNext.removeClass('disabled');
            }
        }

        // Run. (모듈 실행).
        init();
    });
})(jQuery);