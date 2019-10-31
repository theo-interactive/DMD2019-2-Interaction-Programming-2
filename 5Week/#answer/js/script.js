var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 1.
        //$('li') // 배열반환 [<li></li>, <li></li>, <li></li>, .....]
        var $li = $('li').first();
        $li = $('li').eq(0);
        $li = $('li:first');

        // $li = $('li').eq(3); // 3 index 에 위치한 노드.
        $li.addClass('zero');
        

        //Quest 2.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 2.
        // $(...).has()
        // 해당 노드의 안에 has('') 문자열의 요소를 가지고 있을 때.
        var $aHasSpan = $('a').has('span');
        $aHasSpan = $('a:has(span)');
        $aHasSpan.addClass('inner');

        //$('a').has('span').addClass('inner');

        //Quest 3.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 3.
        console.log("%c Answer 3.", logStyle);
        var $items = $('#radio-list').children();
        // ul   > li
        //      > li
        //      > li
        //      ....
        // $(...).children() 자식노드를 찾을 때.
        console.log($items); // 배열.
        var itemMax = $items.length; // 배열의 개수 - [].length
        console.log(itemMax);


        //Quest 4.
        /*
        type-2 클래스를 가지고 있는 요소의 부모노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 4.
        console.log("%c Answer 4.", logStyle);
        var $type2Parent = $('.type-2').parent();
        //console.log($type2Parent);
        var type2ParentIndex = $type2Parent.index();
        // $(...).index() 해당 노드의 순서를 찾을 때.
        console.log(type2ParentIndex);


        //Quest 5.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 5.
        console.log("%c Answer 5.", logStyle);
        var $radio1 = $('#radio-1');
        $radio1 = $('input#radio-1');
        $radio1 = $('input#radio-1[type=radio]');
        var radio1Value = $radio1.val();
        radio1Value = $radio1.attr('value');
        console.log(radio1Value);


        //Quest 6.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        var $menu7 = $('a:contains(Menu)'); // 10 개의 a 노드 반환. 
        $menu7 = $('a:contains(Menu 7)'); // 1 개의 a 노드 반환.
        $menu7 = $('.gnb').children().eq(6).children();
        $menu7 = $('nav').find('li').eq(6).find('a');
        $menu7 = $('li:nth-child(6)').children();
        console.log($menu7);


        //Quest 7.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모노드를 찾고, 자식노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 7.
        var $radioNot2 = $('input[type=radio]').not('#radio-2');
        var $radioNot2Parent = $radioNot2.parent(); // 한번만 계층이 올라감.
        var $label = $radioNot2Parent.find('label');
        $label.addClass('emphasis');


        //Quest 8.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모노드들 중 last 클래스를 가진 노드를 찾은 후, 1) 자식노드 a 요소에 emphasis 클래스를 추가합니다. / 2) 모든 자식노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 8.
        var $subLast = $('li.sub-last');
        var $subLastParents = $subLast.parents('.last'); // 모든 부모 계층에서 찾는다.
        console.log($subLastParents);
        // 1) 자식노드 a 요소 ---- li.last > a : children('a'); 한번만 계층이 내려감.
        $subLastParents.children('a').addClass('emphasis');
        // 2) 자식노드들 a 요소 ---- li.last a : find('a'); 모든 자식 계층에서 찾는다.
        $subLastParents.find('a').addClass('bold');
    });
})(jQuery);