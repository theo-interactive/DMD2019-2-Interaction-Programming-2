(function($) {
    $(document).ready(function() {
        //clone();
        //해당 노드를 가상의 공간에서 복제시킴.
        var $clone = $('p').clone(); //<p>...</p> 복제된 상태
        // console.log($clone);
        // $clone.appendTo('body');
        // $clone.prependTo('body');

        var $cloneB = $clone.find('b');        //$clone에 <b>...</b> 찾는다
        var $cloneSpan = $clone.find('span'); //$clone에 <span>...</span> 찾는다
        $cloneB.text('안녕~!'); //$cloneB 텍스트 추가/변경
        $cloneB.css(
            {
                'background-color': '#000',
                'color': '#fff'
            }
            );    
        //여러개의 스타일을 변경 - object { 스타일속성 : 스타일값, 스타일속성 : 스타일값, ...}

        $cloneSpan.text('World~');  //$cloneSpan 텍스트 추가/변경
        //$cloneSpan.css({'color': '#f00'});
        $cloneSpan.css(
            'color', '#f00'
            );
            // '#ff0000' - '#f00'
            // '#000000' - '#000'
        //한개의 스타일만 변경. - string(param1), string(param2) 스타일속성, 스타일값
        $('p').last().after($clone);
        //p태그 마지막 안쪽에 $clone추가한다 -> 이거 안하면 화면에 안나타남
    });
})(jQuery);