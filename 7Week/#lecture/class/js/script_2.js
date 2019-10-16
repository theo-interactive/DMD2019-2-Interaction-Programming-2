(function($) {
    $(document).ready(function(){
        // var html = '<span>안녕하세요</span><span>hello!</span><b>Hi!</b>';
        //$('p').eq(0).append('<span>Hello~!</span>');
        // $('p').eq(0).append(html);
        // $('p').eq(0).append(html);
        // $('p').eq(0).append(html);
        // $('p').eq(0).append(html);
        // 해당 노드의 안쪽 마지막에 문자열이 입력됨.
        // $('p').eq(0).append($('strong').eq(0));

        // append()
        // $(...) 해당 노드의 안쪽 마지막 부분에 추가 입력.

        // <ul></ul>
        // $('ul').append('<li></li>');
        // <ul><li></li></ul>
        // $('ul').append('<li></li>');
        // <ul><li></li><li></li></ul>

        // $(...).append('element');
        // $('element').appendTo(...);

        //$('<p>hello</p>').appendTo('.say-1');
        //$('span').eq(0).appendTo('.say-1');

        // prepend()
        // $(...) 해당 노드의 안쪽 처음 부분에 추가 입력.
        //$('.say-2').prepend('<span>~~~</span>');
        //$('.say-2').prepend($('span').eq(1));

        // prependTo()
        //$('span').eq(1).prependTo($('.say-2'));

        // html()
        // 1. 해당 노드 안의 html 내용을 가져온다.
        //console.log($('span').eq(2).html());
        // 2. html('...') html 메서드에 파라메터를 입력하면 내용을 변경한다.
        $('span').eq(2).html('<b>안녕하세요.</b>');
        var html2 = '<b>안녕하세요</b><strong>Hello~</strong>';
        $('span').eq(2).html(html2);

        $('span').html(''); //span 노드 안의 html 내용 비워진다.
        $('span').empty(); // 내용 비우기.

        // text()
        // 해당 노드안의 모든 텍스트만 가져온다.
        console.log($('p').eq(2).html());
        // <b>Hello</b> World
        console.log($('p').eq(2).text());
        // Hello World
    });
})(jQuery);