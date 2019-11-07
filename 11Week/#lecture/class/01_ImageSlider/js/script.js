(function($){
    $(document).ready(function(){

        // Selector.
        var $banner = $('.banner');
        var $bannerWrap = $('.banner-wrap');
        var $bannerContainer = $('.banner-container');
        var $bannerItem = $bannerContainer.find('.banner-item');
        var $bannerItemImg = $bannerItem.find('img');
        var $paddleNav = $('.paddle-nav');
        var $arrowPrev = $paddleNav.find('.arrow.prev');
        var $arrowNext = $paddleNav.find('.arrow.next');
        var $dotNav = $('.dot-nav');

        // Value Setting.
        var _cuId = 0;
        var _exId = _cuId;
        var _max = $bannerItem.length;
        var bannerW = $banner.width(),
            bannerH = $banner.height();
        var containerW = bannerW * _max;

        // Resize.
        $bannerWrap.width(bannerW).height(bannerH);
        $bannerContainer.width(containerW);
        $bannerItem.width(bannerW);

        function slideLeft() {
            _cuId--;
            slideAnim();
        }
        function slideAnim(){
            var left = bannerW * _cuId * -1;
            paddleCheck();
            $bannerContainer.stop(true).animate({'left': left }, {duration: 500, complete: function() {
                dotSelect();
            }});
        }
        function slideRight() {
            _cuId++;
            slideAnim();
        }
        $arrowPrev.on('click', function(e) {
            e.preventDefault();
            slideLeft();
        });
        $arrowNext.on('click', function(e) {
            e.preventDefault();
            slideRight();
        });
        var $dotNavSpan = $dotNav.find('span'); // 노드 배열 반환 (5개).
        function dotSelect() {
            $dotNavSpan.removeClass('selected');
            $dotNavSpan.eq(_cuId).addClass('selected');
        }
        function paddleCheck(){
            if(_cuId === 0){
                $arrowPrev.addClass('disabled');
            }else if(_cuId === _max - 1){
                $arrowNext.addClass('disabled');
            }else{
                $arrowPrev.removeClass('disabled');
                $arrowNext.removeClass('disabled');
            }
        }
        paddleCheck();
    });
})(jQuery);