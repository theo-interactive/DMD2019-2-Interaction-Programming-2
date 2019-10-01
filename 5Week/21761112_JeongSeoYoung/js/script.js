var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Practice 1.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 1.
        $('li').eq(0).addClass('zero');

        //Practice 2.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 2.
       $('a:has(span)');

        //Practice 3.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 3.
        console.log("%c Answer 3.", logStyle);

        var radio = $('#radio-list').children.length;
        console.log(radio)

        //Practice 4.
        /*
        type-2 클래스를 가지고 있는 요소의 부모노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 4.
        console.log("%c Answer 4.", logStyle);
        var index = $('type-2').parent().index();
        console.log(index);

        //Practice 5.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 5.
        console.log("%c Answer 5.", logStyle);
        $('#radio-1');
        console.log($('input#radio-1').val());


        //Practice 6.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        $('ul.gnb').find('li').eq(6).find('a');
        $('ul.gnb li:nth-child(6)').children('a');
        console.log($('a:contains(Menu 7)'));

        //Practice 7.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모노드를 찾고, 자식노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 7.
        //<input type = "raido"></input>
        /*
        $('#raido-2');
        $('input#raido-2').parent().find('label').addClass('emphasis'); //Parent를 사용해서 한번 계층에 올라 갔다가 ...
        */
       var simple = $('input[type=radio]').not('#raido-2').parent().find('label')
       .addClass('emphasis');
       console.log(simple);

        //Practice 8.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모노드들 중 last 클래스를 가진 노드를 찾은 후
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다. / 2) 모든 자식노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 8.
        //부모요소들 parents
        $('li.sub-last').parents('.last').children('a').addClass('emphasis');
        $('li.sub-last').parents('.last').find('a').addClass('bold');
    });
})(jQuery);