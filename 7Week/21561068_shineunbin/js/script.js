(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 
        의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.
        $('#hello').append('<span id="my-name"> " 제 이름은 신은빈 입니다. "</span>')

        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];

        var $bannerContainer = $(".banner-container");
        // console.log($bannerContainer);
        for(var i = 0; i < images.length; i++){
            //console.log(i); -->2
            $($bannerContainer).append("<div class = 'banner-item'></div>");
            $(".banner-item").eq(i).append("<img src ='./img/banner/0"+(1+i)+".jpg'></img>")
        }
        
        

        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.

        var $moveTop = $("p.move-top");


        $('body').children().eq(0).before($moveTop);
        $($moveTop).addClass('move');
        $($moveTop).html('위로 이동했습니다.');
        


        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 
        노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.
        
        var $bodylenght = $('body').children().length;
        console.log($bodylenght);
        $('body').children().eq($bodylenght-1).after($('p.move-bottom'));
        $('p.move-bottom').text('아래로 이동했습니다람쥐').addClass('move');

        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.
        $('p.error').remove();

        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.

        $('p.modify').text('수정되었습니다.');
        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.
        $('p.modify').html('').remove();
        $('p.modify').empty('').remove();


        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 
        ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 
        li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.

        $lists = $('ul.list-1').children().length;
        //console.log($lists);
        for( i = 2; i <= 4; i++)
        {
            $('ul.list-1').children().eq(i-2).after("<li>리스트 " + i +"</li>");
        }

        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 
        이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  
        
        내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.
        
        for( i = 1; i <= 4; i++)
        {
            $('ul.list-2').children().eq(i-1).before("<li>리스트 " + i +"</li>");
        }

        //Quest 10.
        /*
        button.btn-1 요소를 클릭하여 div.box-1 노드의 스타일 
        width 를 
        아래 조건에 따라 100px 씩 증감시키는 함수를 만듭니다.
        
        1. div.box-1 노드의 스타일 width 는 100px 부터 시작됩니다.
        
        2. div.box-1 노드의 스타일 width 의 값이 500px 이상이 
        될 때까지 클릭 1회 당 100px 씩 증가시킵니다.
        
        3. div.box-1 노드의 스타일 width 의 값이 500px 이상이 
        되면 0px 이 될 때까지 클릭 1회 당 100px  씩 감소시킵니다.
        
        4. div.box-1 노드의 스타일 width 의 값이 0px 이 되면 
        2 의 조건과 3 의 조건을 반복시킵니다.
        
        힌트 - Boolean 또는 Class 를 조건문에 함께 이용합니다.
        */
        //Answer 10.
        var $box1 = $('div.box-1');
        $box1.addClass('plus');
        $('button.btn-1').click(function(e){
            e.preventDefault();
            // console.log('click');
            var $boxWidth = $box1.width();
            // console.log($boxWidth);
            if ($box1.hasClass('plus')) {
                $box1.css('width','+=100');
                if ($boxWidth===400) {
                    $box1.removeClass('plus');
                    $box1.addClass('minus');
                }
            }else{
                $box1.css('width','-=100');
                if ($boxWidth===100) {
                    $box1.removeClass('minus');
                    $box1.addClass('plus');
                }
            }
            // if($('div.box-1').)
        })

    });
})(jQuery);