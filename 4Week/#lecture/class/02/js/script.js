(function($) {
    //console.log($); //즉시실행함수에 jQuery 를 받아서 $ - (매개변수) 로 활용
    $(document).ready(function() {
        //DOM 문서 전체의 로드가 완료되었을 때.
        console.log('ready');
        //jQuery 가 사용가능한 상태가 됨.

        //선택자. Selector
        console.log($('div')); //배열로 div 요소 노드가 반환.
        console.log(document.getElementsByTagName("div"));

        console.log($('#header')); //아이디 노드를 반환.
        console.log(document.getElementById("header"));

        console.log($('.content')); //클래스 노드를 반환.
        console.log(document.getElementsByClassName("content"));

        console.log($('div').length); //div 요소 노드의 개수를 반환.

        console.log($('a[href="#"]')); //a 요소이면서 속성=속성값이 href="#" 인 노드를 반환.

        console.log($('a[href="http://google.com"]')) //a 요소이면서 속성=속성값이 href="http://google.com" 인 노드를 반환.

        console.log($('a[href^="http://"]')); //a 요소이면서 속성=속성값 앞부분이 href="http://~~~~" 인 노드를 반환.

        console.log($('ul.content')); //ul 요소이면서 content 클래스를 포함하는 노드를 반환.
        console.log($('div.content')); //div 요소이면서 content 클래스를 포함하는 노드를 반환.
        console.log($('div.content.active')); //div 요소이면서 content, active 클래스를 포함하는 노드를 반환.

        //DOM 조작.
        $('div').addClass('text div on');
        $('div').removeClass('active on');
        //addClass('클래스명 클래스명 클래스명...'); //노드에 클래스를 추가.
        //removeClass('클래스명 클래스명 클래스명...'); //노드에 클래스를 삭제.
    });
})(jQuery);