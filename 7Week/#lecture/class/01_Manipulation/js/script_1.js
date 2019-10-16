(function($) {
    $(document).ready(function() {
        //$('button').wrap('<div></div>');
        $('p').wrap('<div class="red"></div>');

        $('button').wrapAll('<div><div><div><p class="red"><a></a></p></div></div></div>')

        // wrap('<element></element>') 해당 노드를 element 로 감싸준다.

        // wrapAll(<div><div><dvi> ....  </dvi></div></div>);
        // 해당 노드를 형식 전체에 따라 감싸준다.

        $('span').eq(0).wrapAll($('.double'));
        // wrapAll($(...))
        // 해당 노드를 문서상의 템플릿을 가져와서 감싸준다.

        $('span').eq(1).wrapInner('<span class="title">title .... </span>');
        // wrapInner
        // 해당 노드 안에 템플릿을 가져온다.
    });
})(jQuery);