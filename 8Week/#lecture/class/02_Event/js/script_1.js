(function($) {
    $(document).ready(function() {
        
        // .bind()
        // .unbind()
        // .on()
        // .off()
        
        /*
        // $el.on('이벤트 이름', 핸들러 콜백함수);
        var $a = $('a');
        $a.on('click', function(e) {
            e.preventDefault();
            console.log('click');
        });
        // .bind() .on() - 해당 노드에 이벤트를 추가.
        $a.eq(0).off('click');
        // .unbind() .off() - 해당 노드에 이벤트를 삭제.

        $a.eq(0).one('click', function(e) {
            e.preventDefault();
            console.log('one click');
        });
        // .one() - 한번만 발생하는 이벤트.
        $a.off('click');
        */
        var $a = $('a');
        var $body = $('body');
        var onClick = function(e) {
            e.preventDefault();
            console.log('click');
        }
        $body.on('click', 'a', onClick); // body 안에 해당되는 a 노드에 이벤트를 추가. - 나중에 DOM에 a 태그가 추가 되어도 이벤트가 바인딩된다.
        // $a.on('click', onClick);
        $body.append('<a href="#">새로운 링크</a>'); // 해당 시점에서의 a 노드는 click 이벤트가 추가되지 않는다.
    });
})(jQuery);