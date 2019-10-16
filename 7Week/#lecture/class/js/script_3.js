(function($) {
    $(document).ready(function() {
        //after()
        //insertAfter()
        
        // <el></el>
        // <el></el> - 기준
        // ....
        // 해당 노드의 뒤에 위치하여 입력.

        //$('p').eq(0).after('<p class="after">After Hello~</p>');
        //$('p').eq(0).after($('b').eq(0));

        //before()
        //insertBefore()
        
        // <el></el>
        // ....
        // <el></el> - 기준
        // 해단 노드의 앞에 위치하여 입력.

        //$('p').eq(1).before('<div class="before">Before Hello!</div>');
        //$('p').eq(1).before($('b').eq(1));

        //$('p').eq(2).insertAfter($('.say-1'));

        //$('p').eq(3).insertBefore($('.say-2'));

    });
})(jQuery);