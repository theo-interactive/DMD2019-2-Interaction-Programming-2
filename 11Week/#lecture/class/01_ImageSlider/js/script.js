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
        var _bannerW = $banner.width(),
            _bannerH = $banner.height();
        var _containerW = _bannerW * _max;

        // Resize. (리사이즈 - 변경 예정).
        $bannerWrap.width(_bannerW).height(_bannerH);
        $bannerContainer.width(_containerW);
        $bannerItem.width(_bannerW);

        // Reset. (값 재설정).
        var reset = function() {
            dotSelect();
            paddleCheck();
        };

        // Event Bind. (노드에 이벤트 추가).
        var addEvent = function() {
            // prev, next 클릭.
            $arrowPrev.on('click', function(e) {
                e.preventDefault();
                _cuId--;
                slideAnim();
            });
            $arrowNext.on('click', function(e) {
                e.preventDefault();
                _cuId++;
                slideAnim();
            });
            // dot-nav > span 클릭.
        };

        // Initialize. (초기화).
        var init = function() {
            reset();
            addEvent();
        };

        // Image Slider Function. (이미지 슬라이더에 필요한 기능 함수).
        var slideAnim = function() {
            var left = _bannerW * _cuId * -1;
            paddleCheck();
            $bannerContainer.stop(true).animate({'left': left }, {duration: 500, complete: function() {
                dotSelect();
            }});
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