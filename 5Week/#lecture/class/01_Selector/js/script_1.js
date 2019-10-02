(function($) {
    $(document).ready(function() {
        //DOM 로드가 완료된 이후 요소들을 확인해서 사용.
        var $hello = $('#hello'); //Selector 메서드 수행 후 $hello 에 배열 반환.
        // _hello = 100; // 전역변수로 사용할 때 _변수명으로 정하겠다!!
        // $hello = $(''); // 요소로서 사용할 때 $변수명으로 정하겠다!!
        console.log($hello);
        var $content = $('.content');
        var $divContent = $('div.content');
        var $spanContent = $('span.content');
        console.log($content, $divContent, $spanContent);
        
        // 검색한 요소 노드 중 해당 순서(작성자가 찾고자 하는 순서 number type)에 위치한 노드를 찾아낼 때.
        // [index]
        // .get(index)
        // .eq(index)
        var $content1 = $content[0]; // 배열 중 하나를 선택. el
        console.log($content1);
        $content1 = $content.get(1); // 배열 중 하나를 선택. el
        console.log($content1);
        $content1 = $content.eq(2); // 배열 중 하나를 선택 후 다시 배열로 반환. [el]
        console.log($content1);

        // 검색한 요소 노드 중 첫번째 순서의 노드를 찾아낼 때.
        // .first();
        // $('div.content:first');
        // .eq(0);

        var $divContentFirst = $divContent.first(); // 배열 중 첫번째 요소를 배열로 반환.
        console.log($divContentFirst);
        $divContentFirst = $divContent.eq(0); // 배열 중 index - 0 에 위치한 요소를 배열로 반환.
        console.log($divContentFirst);

        // 검색한 요소 노드 중 마지막 순서의 노드를 찾아낼 때.
        // .last();
        // $('span.content:last');
        // .eq(셀렉터 반환 배열의 개수(selector.length) - 1);
        var $spanContentLast = $spanContent.last(); // 배열 중 마지막 요소를 배열로 반환.
        console.log($spanContentLast);
        $spanContentLast = $spanContent.eq($spanContent.length - 1); //
        console.log($spanContentLast, $spanContent.length - 1);

        // 검색한 요소 노드 중 자식요소로 해당 태그를 가지고 있다면.
        // .has('요소');
        // $('요소:has(자식요소)');
        var $aHasSpan = $('a').has('span');
        console.log($aHasSpan);
        $aHasSpan = $('a:has(span)');
        console.log($aHasSpan);
        
        // 검색한 요소 노드가 해당 속성을 가지고 있지 않다면.
        // .not('속성');
        // $('요소:not(속성)');
        var $aNotLink = $('a').not('.link');
        console.log($aNotLink);
        $aNotLink = $('a:not(.link)');
        console.log($aNotLink);

        // 화면 상에서 요소가 보이는 중이라면.
        // CSS3.
        // display : none - 화면 상에서 끔. (영역도 없고, 보이지 않고.)
        // visibility : hidden - 화면 상에서 끔. (영역은 있고, 보이지 않고.)
        
        // display 의 영향에 따라 보이는 중인지 아닌지를 체크하여 노드를 반환.
        // $('요소:visible');
        // $('요소:hidden');
        var $divVisible = $('div.v:visible');
        console.log($divVisible);
        var $divHidden = $('div.v:hidden');
        console.log($divHidden);

        // 자식요소 / 부모요소를 찾는 방법.

        // children()
        // 자식요소(직계)를 찾을 때.
        var $li = $('ul#list').children('li');
        console.log($li);

        //parent()
        // 부모요소(직계)를 찾을 때.
        var $divV = $('a.link').parent('div');
        console.log($divV);

        //parents()
        
        //prev()
        //prevAll()
        //next();
        //nextAll()

        //find()
    });
})(jQuery);