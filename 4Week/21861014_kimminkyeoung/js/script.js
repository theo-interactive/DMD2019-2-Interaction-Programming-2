var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        console.log('ready');
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        $('li').addClass('active');
        // console.log($('li').addClass('active'));


        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        $('a.type-2').addClass('current');
        // console.log($('a.type-2').addClass('current'));

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.

        // 0 index .. 를 .. 

        // console.log($('li[0]')); // 안나온다
        /*
        console.log($('li')[0]); // 콘솔로그로 보면 0번째 찾아진 것 같은데 addXlass 가 안먹힌다.
        $('li'[0]).addClass('zero');
        console.log($('li'[0]).addClass('zero'));
        */
        // console.log($('li.[0]')); // 오류
        // console.log($('li').index(0)); // 그냥 0 이 나온다 ..
        // console.log($('li').index[0]); // undefined

        // 찾아보니 몇번째 노드인지 찾고 제어하는데에 eq()라는 메서드를 사용한다고 함.
        // console.log($('li').eq(0));
        $('li').eq(0).addClass('zero');

     


        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        // console.log($('a.span')); //안나옴 ..(그리고 생각해보니 저건 span이라는 클래스를 찾는건디 .. 암튼 잘못생각한 식)
        // console.log($('a')('span')); //오류

        // console.log($('a').children('span')); // a의 자식 요소 중에 span을 검색
        // console.log($('a').find('span')); // 위와 똑같은 결과
        // console.log($('a span')); // 위와 똑같은 결과
        // $('a span').addClass('inner'); // 위와 똑같은 결과 

        // 찾아보니 직속 자손 결합자는 '>' 라고 한다 ..
        // console.log($('a>span')); // 이거두 위에랑 결과가 똑같
        $('a>span').addClass('inner');

        // .childeren() .find() $(a span) $(a>span)
        // 모두 다 자식 요소 중에 span 검색을 가능하게 할 수 있다

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        $('li[data-role=link]').addClass('role');

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        // 길 이 . . . ??
        // console.log($('#radio-list'));
        console.log($('#radio-list').children.length); // length를 붙혀봤는데 2라고 나온다 !
        console.log($('#radio-list').children().length); // 이건 또 왜 3 . . .. ?
        // 저 ()의 유무가 무슨 차이 인지 모르겠습 니닷 .. ㅠ
        // 무언가의 포함과 미포함 차이 일 것 같은데.. 

        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);
        // console.log($('.type-2'));
        // console.log($('.type-2').parents());
        console.log($('.type-2').parents().index()); 
        // console.log($('.type-2').parents().index[]); //오류

        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        console.log($('#radio-1').val());
        console.log($('input[name=radio]').val());
        console.log($('input#radio-1').val());



        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);
        // console.log($('a').text('Menu 7')); //이건 모든 a가 나온다
        console.log($('a:contains("Menu 7")')); // ...?
        console.log($('a:contains(Menu 7)'));


        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        //  console.log($('input').not('#radio-2'));
        // $('input[name=radio]').not('#radio-2').parents().children('lable').addClass('emphasis')
        // console.log($('input').not('#radio-2').parents().children('lable').addClass('emphasis')); //적용이 안된다..
        
        // console.log($('input[name=radio]'));
        console.log($('input[name=radio]').not('#radio-2'));
        console.log($('input[name=radio]').not('#radio-2').parents());
        // console.log($('input[name=radio]').not('#radio-2').parent().children('label'));
        $('input[name=radio]').not('#radio-2').parents().children('label').addClass('emphasis');

        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후, 1) 자식 노드 a 요소에 emphasis 클래스 / 2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        console.log($('li.sub-last'));
        console.log($('li.sub-last').parents('.last'));
        $('li.sub-last').parents('.last').children('a').addClass('emphasis');
        $('li.sub-last').parents('.last').find('a').addClass('bold');
    });
})(jQuery);