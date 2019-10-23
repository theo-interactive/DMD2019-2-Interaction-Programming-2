(function($) {
    $(document).ready(function() {
        //replaceWith()
        //해당 노드를 기준으로 DOM형식을 교체.
        //$('p').replaceWith('<b>Hello~</b>');
        $('p').replaceWith('<p><b>Hello~</b></p>');
        //p태그노드를 <p><b>Hello~</b></p>이렇게 변경할것이다 

        //replaceAll()
        //해당 DOM형식을 지정한 노드를 찾아서 교체.
        //$('<p><b>Hello~</b></p>').reaplceAll('p');
        $('<a href="#">링크입니다.</a>').replaceAll('button');
        //버튼을 <a href="#">링크입니다.</a> 변경할꺼다!
    });
})(jQuery);