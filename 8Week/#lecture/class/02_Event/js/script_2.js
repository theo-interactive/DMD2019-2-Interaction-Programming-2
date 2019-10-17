(function($) {
    $(document).ready(function() {
        var $menu1 = $('a#menu-1');
        $menu1.on('click', function(e) {
            e.preventDefault();
            console.log('click');
        });
        var $menu2 = $('a#menu-2');
        $menu2.on('mouseover', function(e) {
            // 해당 노드 영역 안으로 마우스 커서가 위치될 때.
            // console.log('over');
        }).on('mouseout', function(e) {
            // 해당 노드 영역에서 마우스 커서가 벗어날 때.
            // console.log('out');
        });
        var $menu3 = $('a#menu-3');
        var isDrag = false;
        $menu3.on('mousedown', function(e) {
            e.preventDefault();
            isDrag = true;
            console.log('down');
        }).on('mousemove', function(e) {
            if(!isDrag) return false;
            if(isDrag){
                console.log('move');
            }
        }).on('mouseup', function(e) {
            isDrag = false;
            console.log('up');
        });
        var $ul = $('ul');
        // 하위 항목까지 영역으로 인식.
        // $ul.on('mouseenter', function(e) {
        //     console.log('enter');
        // }).on('mouseleave', function(e) {
        //     console.log('leave');
        // });
        // 하위 항목까지 영역으로 인식하지 못함.
        // $ul.on('mouseover', function(e) {
        //     console.log('over');
        // }).on('mouseout', function(e) {
        //     console.log('out');
        // });

        var $menu4 = $('a#menu-4');
        $menu4.on('dblclick', function(e) {
            e.preventDefault();
            console.log('dblclick');
        });
    });
})(jQuery);