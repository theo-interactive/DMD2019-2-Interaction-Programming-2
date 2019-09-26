var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        //Selector. $('__query__'); -> [<li>, <li>, ....];
        //JavaScript - classList .add('', ''), remove('', '');
        //jQuery - addClass(' , ') removeClass(' , ');
        $('li').addClass('active'); //DOM 조작 발생.


        //Quest 2.
        /*
        문서내의 a 요소이면서 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        $('a.type-2').addClass('current'); //a 요소 & type-2 클래스를 가진 노드.
        //$('.type-2').addClass('current'); //모든 요소 & type-2 클래스를 가진 노드.


        //Quest 3.
        /*
        문서내의 a 요소이면서 URL 링크 속성값이 있는 노드를 선택하고, 해당 요소에 underline 클래스를 추가합니다.
        */
        //Answer 3.
        //$('a[href="#"]')
        $('a[href^="http://"]').addClass('underline');
        // = -> 해당 문자열이 일치하는 경우.
        // ^= -> 해당 문자열로 시작되는 모든 경우.


        //Quest 4.
        /*
        문서내의 li 요소이면서 data-role 속성이 list 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 4.
        $('li[data-role="list"]').addClass('role');


        //Quest 5.
        /*
        menu 아이디를 가진 nav 요소를 선택하고, open 클래스를 삭제합니다.
        */
        //Answer 5.
        $('nav#menu').removeClass('open');


        //Quest 6.
        /*
        content 클래스를 가진 section 요소 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        console.log($('section.content').length);
        // $('').length Selector 의 개수. -> number type 으로 반환.
        
        
    });
})(jQuery);