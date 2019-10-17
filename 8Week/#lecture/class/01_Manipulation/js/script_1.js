(function($) {
    $(document).ready(function() {
        //replaceWith()
        //해당 노드를 기준으로 DOM형식을 교체.
        //$('p').replaceWith('<b>Hello~</b>');
        $('p').replaceWith('<p><b>Hello~</b></p>');

        //replaceAll()
        //해당 DOM형식을 지정한 노드를 찾아서 교체.
        //$('<p><b>Hello~</b></p>').reaplceAll('p');
        $('<a href="#">링크입니다.</a>').replaceAll('button');
    });
})(jQuery);