(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 
        의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.

        // var $name = $('#my-name span').html('제 이름은 김광욱입니다').prepend('#hello');
        // console.log($name);

        var $name =  $("<span id=my-name1>").text('제 이름은 김광욱입니다.').prependTo("div#hello");
        console.log($name);


        // $('div#hello').eq(0).html('<span class = "my-name">제 이름은 지동환 입니다.</span>');

        //$부모노드.prepend($추가노드)
        //$추가노드.prependTo($부모노드)








        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];


        for(i=0; i<images.length;i++){
            var $1 = $('<div class=banner-item><img src="'+images[i]+'"></div>').prependTo('div.banner-container')
            console.log($1);
    }
















        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.
        
        $('p.move-top').prependTo('body').addClass('move').html('위로 이동했어요!');





        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.

        $('p.move-bottom').appendTo('body').addClass('move').html('아래로 이동했어요!');



        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.

        // $('p.error').remove();
        $('p.error').detach();

        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.

        $('p.modify').html('수정되었습니다');



        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.

        $('p.modify').empty().detach();







        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.

        // $('ul.list-1').children('li')

        for(i=2;i<5;i++){
            $('ul.list-1').append('<li> 리스트'+ [i] +'</li>');
            // $('<li> 리스트'+[i]+'</li>').appendTo('ul.list-1');
            // console.log('ul.list');
        };



        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.

        for(j=4;j>=0;j--){
            $('ul.list-2').prepend('<li> 리스트'+ [j] +'</li>');
            // $('<li> 리스트'+[i]+'</li>').prependTo('ul.list-2');
        };


    });
})(jQuery);