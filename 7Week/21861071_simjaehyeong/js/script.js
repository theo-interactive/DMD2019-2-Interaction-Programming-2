(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가하여 
        hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.

        var divHellochild = $('div#hello').children();
        // a 안쪽 처음 부분에 b 추가.
        $('div#hello').prepend('<span id="my-name">제 이름은 심재형입니다.</span>');

        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];
        var bannerContainer = $('.banner-container');
        //console.log(images.length); //3
        for(i=0; i<images.length; i++)
        {
        //     var bannerItem = document.createElement('<div class="banner-item"></div>');
        //     var imgs = document.createElement('<img src= "images"></img>');
        //     bannerItem.appendChild(imgs);
        //     bannerContainer.appendChild(bannerItem);
        }

        //실패 !

        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.

        $('p.move-top').insertBefore($('h1'));
        $('p.move-top').addClass('move').html('위로 이동했습니다.');


        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.

        $('p.move-bottom').insertAfter($('script').eq(1));
        $('p.move-bottom').addClass('move').html('아래로 이동했습니다.');


        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.

        // $('p').eq(2).detach();
        $('p.error').detach();


        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.

        // console.log($('p.modify').html());
        var html2 = '수정되었습니다.';
        $('p.modify').html(html2);
        // console.log($('p.modify').html()); //수정함.

        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.

        $('p.modify').empty();
        $('p.modify').detach();


        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.

        var afterThis = $('ul.list-1').children().eq(0);
        for(i=0; i<3; i++){
            afterThis.after('<li></li>');
        };
        for(i=0; i<3; i++){
            $('ul.list-1').children().eq(i+1).html('리스트 '+(i+2));
        };


        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.

        var beforeThis = $('ul.list-2').children().eq(0);
        for(i=0; i<4; i++){
            beforeThis.before('<li></li>');
        };
        for(i=0; i<4; i++){
            $('ul.list-2').children().eq(i).html('리스트 '+(i+1));
        };


        //Quest 10.
        /*
        button.btn-1 요소를 클릭하여 div.box-1 노드의 스타일 width 를 아래 조건에 따라 100px 씩 증감시키는 함수를 만듭니다.
        
        1. div.box-1 노드의 스타일 width 는 100px 부터 시작됩니다.
        2. div.box-1 노드의 스타일 width 의 값이 500px 이상이 될 때까지 클릭 1회 당 100px 씩 증가시킵니다.
        3. div.box-1 노드의 스타일 width 의 값이 500px 이상이 되면 0px 이 될 때까지 클릭 1회 당 100px  씩 감소시킵니다.
        4. div.box-1 노드의 스타일 width 의 값이 0px 이 되면 2 의 조건과 3 의 조건을 반복시킵니다.
        
        힌트 - Boolean 또는 Class 를 조건문에 함께 이용합니다.
        */
        //Answer 10.

        $('button.btn-1').click(function(e){
            e.preventDefault();
            // if($('.box-1').style("width")="100px"){
            //     $('.box-1').style("width")="200px";
            // };
            //error : .style() is not a function. 
        })

        //실패 !

    });
})(jQuery);