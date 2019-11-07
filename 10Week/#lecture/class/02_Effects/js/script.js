(function($) {
    $(document).ready(function() {
        var $button = $('button');
        var $box = $('.box');
        var onClick = function(e) {
            var type = e.currentTarget.className.replace('btn-', '');
            //console.log('click', e.currentTarget.className);
            //console.log('click', $(e.currentTarget).attr('class'));
            console.log(type);
            if(type == 'play'){
                $box.animate({'top' : '+=30px', 'left' : '+=100px'}, 200);
                //$box.stop(true).animate({'top' : '+=30px', 'left' : '+=100px'}, 1000);
                // $element.animate({ css 속성 }, duration(속도));
            }else if(type == 'stop'){
                $box.stop(true);
            }else if(type == 'force-play'){
                $box.stop(true).animate({'top' : '150px', 'left' : '500px'}, 500);
            }else if(type == 'reset'){
                // $box.stop(true).css({'top' : 0, 'left' : 0});
                $box.stop(true).css({'top' : 'inherit', 'left' : 'inherit'});
            }else{

            }
            switch(type) {
                case 'play' :

                    break;
                case 'stop' :

                    break;
                case 'force-stop' :

                    break;
                case 'reset' :

                    break;
                default:
                    break;
            }

        }
        $button.on('click', onClick);
    });
})(jQuery);