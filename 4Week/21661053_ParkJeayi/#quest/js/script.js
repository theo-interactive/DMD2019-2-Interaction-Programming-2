var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.

        $('li').addClass('active');
       // console.log($('li'));

        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.

        $('a.type-2').addClass('current');
        //console.log($('a'));

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        $('li').eq(0).addClass('zero');//  .ep(N) N번째
        //console.log($('li').eq(0));


        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        $('a>span').addClass('inner'); // > -->포함
       // console.log($('a>span'));


        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        $('li[data-role=link]').addClass('role');//[] --> 요소의 속성
       // console.log('li[data-role=link]');


        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.

        var list_lenth = $('#radio-list').parent().length; 

        console.log("%c Answer 6.", logStyle, list_lenth);
        //#_id요소를 부를때 사용/띄어쓰기 조심 못읽어올 수 있음/변수 선언을 만드는 이유는 그값을 닮기 위함이다

        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        var type_2=  $('.type-2').parents();
        console.log("%c Answer 7.", logStyle, type_2);
        //index값을 구하라는 의미를 모르겠어요;;


        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.

        var radio_value = $('#radio-1:radio').val();
        //:Input  Input태그 선택방법 /val(); value값
        console.log("%c Answer 8.", logStyle,radio_value);

        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        var a_menu = $('a:contains("Menu 7")');
        //contains("")


            console.log("%c Answer 9.", logStyle, a_menu);


        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        $(':radio').not('#radio-2').parent().children('label').addClass('emphasis');
        //not() 제외

        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후, 
        1) 자식 노드 a 요소에 emphasis 클래스 / 2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.

        $('li.sub-last').parent('.last').children('a').addClass('emphasis');//1)
        $('li.sub-last').parent().children('a').addClass('bold');//2)
        //교수님 어떻게든 풀 수 있을 망큼 풀었는데,11번은 모르겠어요 ㅠㅠ
    });
})(jQuery);