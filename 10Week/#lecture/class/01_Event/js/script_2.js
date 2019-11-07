(function($) {
    $(document).ready(function() {
        var $win = $(window);
        var $img = $('img');
        var winW = 0, winH = 0;
        var onResize = function(e) {
            winW = $win.width();
            winH = $win.height();
            console.log('resize', winW, winH);
            //$img.css({'width' : winW, 'height' : winH});
            $img.width(winW).height(winH);
        }
        $win.on('resize', onResize);
        $win.trigger('resize');

        // resize
        // 브라우저 창의 사이즈를 변경할 때 발생.

        // trigger
        // 요소에 이벤트가 적용되어 있다면 강제로 발생.

        // scroll
        var onScroll = function(e) {
            var scrollY = $win.scrollTop();
            //var scrollY = $('html, body').scrollTop();

            // scrollLeft() - X
            // scrollTop() - Y
            // console.log('scroll', scrollY);
            // if(scrollY > 300){
            winH = $win.height();
            if(scrollY >= winH / 2){
                //console.log('300 >', scrollY);
                $('body').css({'background-color' : '#000'});
            }else{
                $('body').css({'background-color' : 'transparent'});
            }
        }
        $win.on('scroll', onScroll);
        $win.trigger('scroll');
    });
})(jQuery);