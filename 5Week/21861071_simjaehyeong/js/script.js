var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 1.
        $('li').eq(0).addClass('zero');

        
        //Quest 2.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 2.
        $('a').has('span').addClass('inner');


        //Quest 3.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 3.
        console.log("%c Answer 3.", logStyle);
        console.log($('#radio-list').children.length+1);
        //2+1 = 3


        //Quest 4.
        /*
        type-2 클래스를 가지고 있는 요소의 부모노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 4.
        console.log("%c Answer 4.", logStyle);
        var p4 = $('.type-2').parent();
        console.log(p4.index());
        //0 , '1' (두번쨰)


        //Quest 5.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 5.
        console.log("%c Answer 5.", logStyle);

        //아이디가 radio-1 인 input radio 요소까지 찾기.

        $('input[type=radio]#radio-1');             //1
        $('#radio-1');                              //2
        var a5 = $('.radio-item').children();       //3
        a5.eq(0);
        $('.radio-item').children('#radio-1');      //4

        //value 값 찾기.
        //.val();
        console.log($('input[type=radio]#radio-1').val());


        //Quest 6.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);

        $('a:contains(Menu 7)');                        //1
        $('ul.gnb').find('li').eq(6).find('a');         //2
        $('ul.gnb li:nth-child(6)').children('a');      //2.5...


        //Quest 7.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모노드를 찾고, 
        자식노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 7.
        var p7 = $('input').not('#radio-2').find(type= "radio").parent;
        p7.children(find(label)).addClass('emphasis')


        //Quest 8.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모노드들 중 last 클래스를 가진 노드를 찾은 후, 
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다. / 
        2) 모든 자식노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 8.
        var _a8 = $('li.sub-last').parents('.last');
        _a8.children('a').addClass('emphasis');
        _a8.find('a').addClass('bold');

    });
})(jQuery);