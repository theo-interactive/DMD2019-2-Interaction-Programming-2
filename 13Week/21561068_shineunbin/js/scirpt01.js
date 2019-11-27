(function($) {
  $(document).ready(function() {
    console.log("ready");



    // console.log($section03);


    var $win = $(window);

    var $gn = $('#global-nav');

    var $gnEl = $gn.find('a');

    var $article = $('article.content');
    var $section = $article.children('.section');

    var _gnH = $gn.height();  // 헤더의 높이.
    //var _exPosY = $win.scrollTop();
    var _exPosY;

    //Event Bind.
    function addEvent() {
        $win.on('scroll', onScroll).trigger('scroll');
        $gnEl.on('click', onClickGN);
    }

    //Event Handler
    function onScroll(e) {
        var posY = $win.scrollTop();
        if(_exPosY != undefined && posY >= 0) {
            if(_exPosY < posY){
                if(!$gn.hasClass('hide')) $gn.addClass('hide');
            }else{
                if($gn.hasClass('hide')) $gn.removeClass('hide');
            }
        }
        _exPosY = posY;
    }
    function onClickGN(e){
        e.preventDefault();
        var $el = $(e.currentTarget),
            id = $el.attr('href'),
            $section = $(id),
            posY = $section.offset().top;
        $('html, body').stop(true).animate({scrollTop: posY}, {duration:500, easing: 'easeInOutCubic'});
    }
    //Init.
    function init(){
        addEvent();
    }

    //Run initialize.
    init();


  });
})(jQuery);

// const imgContainer = document.querySelector(".page01");
// const move = function(e) {
//   let x = e.pageX - this.offsetLeft - this.offsetWidth / 2;
//   let y = e.pageY - this.offsetTop - this.offsetHeight / 2;
//   let xPourcent = x * 300 / this.offsetWidth / 10;
//   let yPourcent = y * 300 / this.offsetHeight / 10;

//   this.style.transform = "rotateX("+ -yPourcent +"deg) rotateY("+ xPourcent +"deg)";
// };

// const reinit = function() {
//   setTimeout(() => {
//     this.style.transform = "";
//   }, 500);
// };
// imgContainer.addEventListener("mousemove", move);
// imgContainer.addEventListener("mouseleave", reinit);