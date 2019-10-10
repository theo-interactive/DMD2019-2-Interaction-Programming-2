(function($) {
    $(document).ready(function() {
<<<<<<< HEAD
        $('p').addClass('red'); 
        $('button').addClass('blue');
    
    
        $('button').eq(0).removeClass('blue');
    
        console.log($('p').eq(1).hasClass('red')); //true.
    
        if(!$('p').eq(0).hasClass('blue')) {
            $('p').eq(0).addClass('blue');
        }
        if($('p').hasClass('red')){ //true
            $('p').removeClass('red');
        }
        
        $('button').click(function(e) {
            e.preventDefault();
            console.log('click');
            //$(this).toggleClass('blue');
            $(this).toggleClass('blue', true); // === addClass;
            $(this).toggleClass('blue', false); // === removeClass();
            // class 의 상태를 확인해서 없으면 추가, 있으면 삭제.
            if(!$(this).hasClass('blue')){
                $(this).addClass('blue');
            }else{
                $(this).removeClass('blue');
            }
        });


        //if($('p').eq(1).hasClass('red')) {
    
        //    }
    
    
    });
    
    }) (jQuery);
=======
        
    });
})(jQuery);
>>>>>>> 4e867d45072af32a65ff2dd353b056e194ec6cc4
