var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        console.log('ready');

        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        console.log("%c Answer 1.", logStyle);
        $("li").addClass("active");
        console.log($("li"));

        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        
        console.log("%c Answer 2.", logStyle);
        $("a.type-2").addClass("current");
        console.log($("a.type-2"));

        //Quest 3.
        /*
        문서내의 a 요소이면서 URL 링크 속성값이 있는 노드를 선택하고, 해당 요소에 underline 클래스를 추가합니다.
        */
        //Answer 3.
        console.log("%c Answer 3.", logStyle);
        $('a[href^="http://"]').addClass("underline");
        console.log($('a[href^="http://"]'));
        
        //Quest 4.
        /*
        문서내의 li 요소이면서 data-role 속성이 list 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 4.
        console.log("%c Answer 5.", logStyle);
        $("li[data-role=list]").addClass("role");
        console.log($("li[data-role=list]"));
        
        //Quest 5.
        /*
        menu 아이디를 가진 nav 요소를 선택하고, open 클래스를 삭제합니다.
        */
        //Answer 5.       
        console.log("%c Answer 5.", logStyle);
        $("nav#menu").removeClass("open");
        console.log($("nav#menu"));

        //Quest 6.
        /*
        content 클래스를 가진 section 요소 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        $("section.content")
        console.log($("section.content"));
        // "content 클래스를 가진 section 요소 노드들" 은 찾았지만 길이??길이가 뭔지 모르겠습니다.
    });
})(jQuery);