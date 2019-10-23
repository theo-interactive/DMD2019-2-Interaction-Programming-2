(function($) {
    $(document).ready(function() {
        // .attr()
        // .attr('속성명') - 속성의 값을 가져온다.
        // .attr('속성명', '교체할 값') - 속성을 찾아서 값을 바꿔준다.
        // ex) $('a').attr('href', 'http://google.com');
        // ex) $('a').attr('target', '_blank');



        // .prop()
        // form 요소의 실제 변경되는 값을 체크하여 가져온다.



        // .is()
        // ~인지, 아닌지.
        // .is(':checked')
        // 해당 노드가 체크가 되었는지 여부를 판단하여 반환. true / false



        // .val()
        // value 라는 속성의 값을 가져온다.



        var $input = $('input'); // 배열로 반환.
        // jQuery 의 .each() 메서드. 배열에서 사용.
        // 배열을 반복시켜주는 기능. (순서, 배열의 값)

        $.each($input, function(index, el) {
            //console.log(index, $(el).attr('type'));    -> $(el)의 type을 가져온다 ... ckechbox
            //$(el).attr('type', 'text');                -> $(el)의 type을 text로 변경한다.
        });
        //console.log($input.attr('type'));



        var $p2 = $('p').eq(1); //p의 두번째 배열 [0, 1, 2...]
        var title = $p2.children('em').attr('title'); //$p2(p의 두번째 배열)의 자식 중 'em'의 타이틀 속성을 찾는다.  -> Kim Yongwon
        var $p3 = $('p').eq(2);  //p의 세번째 배열 [0, 1, 2...]
        $p3.children('span').text(title);  ////$p3(p의 세번째 배열)의 자식 중 'span'을 Kim Yongwon으로 변경/추가
        // console.log($p2, $p3);
        // console.log(title);



        var $checkbox1 = $('input#checkbox-1');
        console.log($checkbox1);
        // .change() - 이벤트 form 요소의 내용(속성값)이 변경될 때 발생.
        $checkbox1.change(function(e) {
            //e.preventDefault();
            //console.log('change');
            console.log('1', $(this).attr('checked'));
            console.log('2', $(this).prop('checked')); // Boolean. 
            console.log('3', $(this).val());
            console.log('4', $(this).is(':checked')); // Boolean.
        });
    });
})(jQuery);