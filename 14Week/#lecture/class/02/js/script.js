(function($) {
    // var max = 11;
    // var iW = 1152, iH = 864;
    //var col = 4, row = 3;
    var max = 47;
    var iW = 2016, iH = 2016;
    var col = 7, row = 7;
    var _images = [];
    for(var i = 0; i < col; i++){
        for(var j = 0; j < row; j++){
            _images.push({x: iW / col * j, y: iH / row * i})
        }
    }

    $(document).ready(function() {
        $(window).on('scroll', function() {
            //현재의 이미지 순번 - ?
            //이미지의 최대 개수 - 11;
            //현재의 스크롤값 - window scrollTop();
            //스크롤의 최대값 - window height()

            var posY = $(window).scrollTop();
            var limitY = $(window).height(); 
            // #wrap 높이가 200vh 이기 때문에 스크롤의 최대값은 브라우저의 높이.
            if(posY >= 0){
                // x : y = a : b;
                var cuNum = posY * max / limitY;
                //cuNum = Math.round(cuNum);
                cuNum = Math.floor(cuNum);

                var imagePos = _images[cuNum];
                console.log(imagePos['x'], imagePos['y']);
                $('.animation').css({'background-position': imagePos['x'] * -1 + 'px ' + imagePos['y'] * -1 + 'px'});
                //$('img').attr('src', './img/image_' + cuNum + '.jpg');
            }
        });
    });

})(jQuery);