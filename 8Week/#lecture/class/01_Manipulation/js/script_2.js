(function($) {
    $(document).ready(function() {
        //clone();
        //해당 노드를 가상의 공간에서 복제시킴.
        var $clone = $('p').clone();
        // console.log($clone);
        // $clone.appendTo('body');
        // $clone.prependTo('body');

        var $cloneB = $clone.find('b');
        var $cloneSpan = $clone.find('span');
        $cloneB.text('Hello!!');
        $cloneB.css(
            {
                'background-color': '#000',
                'color': '#fff'
            }
            );    
        //여러개의 스타일을 변경 - object { 스타일속성 : 스타일값, 스타일속성 : 스타일값, ...}
        $cloneSpan.text('World~');
        //$cloneSpan.css({'color': '#f00'});
        $cloneSpan.css(
            'color', '#f00'
            );
            // '#ff0000' - '#f00'
            // '#000000' - '#000'
        //한개의 스타일만 변경. - string(param1), string(param2) 스타일속성, 스타일값
        $('p').last().after($clone);
    });
})(jQuery);