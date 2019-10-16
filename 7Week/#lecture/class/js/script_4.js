(function($) {
    $(document).ready(function() {
        // $('p').eq(0).detach();
        // 해당 노드를 삭제.

        //$('p').eq(2).empty();
        // 해단 노드의 html 내용 비우기.

        $('.btn-3').click(function(e) {
            e.preventDefault();
            //$('p').last().remove();
            //$(this).next('p').remove();
            if($(this).next('p') !== 'undefined'){
                $(this).next('p').remove();
            }
            // console.log($(this).next());
        });

        $('p').eq(1).wrap('<div><div></div></div>');
        $('p').eq(1).unwrap();
    });
})(jQuery);