(function($) {
    $(document).ready(function() {
        //문서가 로드 완료 되었을 때.
        console.log('ready');
        
        // parents()
        // 기준 요소 노드에서 부모요소들 중 해당하는 노드를 찾을 때.
        // $('기준 요소').parents('찾으려는 부모요소');
        var $aParentLi = $('a#li_link').parent();
        console.log($aParentLi);
        var $aParentsDiv = $('a#li_link').parents('div.content');
        console.log($aParentsDiv);

        // index()
        // 해당하는 노드의 계층 기준 상에서의 순서.
        var _aIndex = $('a.link').index();
        console.log(_aIndex);
        var _liIndex = $('li.item_i').index();
        console.log(_liIndex);

        // prev()
        // 해당 요소의 바로 이전에 위치한 노드.
        var $footerPrevDiv = $('#footer').prev();
        console.log($footerPrevDiv);
        // next()
        // 해당 요소의 바로 다음에 위치한 노드.
        var $headerNextDiv = $('#header').next();
        console.log($headerNextDiv);
        // prevAll()
        // 해당 요소의 이전에 위치하는 모든 노드.
        var $footerPrevAll = $('#footer').prevAll();
        console.log($footerPrevAll);
        var $contentPrevAll = $('#content').prevAll();
        console.log($contentPrevAll);
        // nextAll()
        // 해당 요소의 다음에 위치하는 모든 노드.
        // prevAll(), nextAll() 의 안에 요소 검색을 할 수 있다.
        // -> prevAll('찾으려는 요소'), nextAll('찾으려는 요소')
        var $headerNextAll = $('#header').nextAll();
        console.log($headerNextAll);
        var $headerNextContentAll = $('#header').nextAll('.content');
        console.log($headerNextContentAll);

        // find() *********
        // 해당 요소의 자식노드를 찾는 방법 중 하나.
        // children() 의 기능을 포함하며 확장된 형태.
        // 해당 요소에서 하위 항목으로 어디든 접근할 수 있다.
        var $span = 
        $('#content')
                .find('ul')
                .find('li')
                .find('a#li_link')
                .find('span');
                //메서드 체이닝. - 메서드 기능을 순차적으로 진행시키는 것을 의미.
                // $('요소') .메서드() .메서드() .메서드() ......
        console.log($span);
        // **** 특징 : 자식 계층의 어디든 접근이 가능하다.
        $span = $('#content').find('a#li_link span');
        console.log($span);
    });
})(jQuery);