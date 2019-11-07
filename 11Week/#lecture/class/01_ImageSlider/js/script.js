(function($){
    $(document).ready(function(){
        var $banner = $('.banner');
        var bannerW = $banner.width(), bannerH = $banner.height();
        var $bannerWrap = $('.banner-wrap');
        $bannerWrap.width(bannerW).height(bannerH);
        var $bannerContainer = $('.banner-container');
        var $bannerItem = $bannerContainer.find('.banner-item');
        var max = $bannerItem.length;
        var containerW = bannerW * max;
        $bannerContainer.width(containerW).height(100 + '%');
        $bannerItem.css({'float' : 'left'}).width(bannerW).height(100 + '%');
        var $bannerItemImg = $bannerItem.find('img');
        $bannerItemImg.width(100 + '%');
        var $paddleNav = $('.paddle-nav');
        var $arrowPrev = $paddleNav.find('.arrow.prev');
        var $arrowNext = $paddleNav.find('.arrow.next');
        var $dotNav = $('.dot-nav');
        var _id = 0;
        function slideLeft() {
            _id--;
            slideAnim();
        }
        function slideAnim(){
            var left = bannerW * _id * -1;
            paddleCheck();
            $bannerContainer.stop(true).animate({'left': left }, {duration: 500, complete: function() {
                dotSelect();
            }});
        }
        function slideRight() {
            _id++;
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
            $dotNavSpan.eq(_id).addClass('selected');
        }
        function paddleCheck(){
            if(_id === 0){
                $arrowPrev.addClass('disabled');
            }else if(_id === max - 1){
                $arrowNext.addClass('disabled');
            }else{
                $arrowPrev.removeClass('disabled');
                $arrowNext.removeClass('disabled');
            }
        }
        paddleCheck();
    });
})(jQuery);