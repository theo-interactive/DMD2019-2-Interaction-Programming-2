(function($){
    $(document).ready(function(){
        $('#global-nav li a').click(function(){
            $('html, body').animate({
            scrollTop: $( $.attr(this, 'href')).offset().top
            }, 500);
            return false;
          });

        var lastScrollTop = 0, delta = 15;
        $(window).scroll(function(e) {
            var st = $(this).scrollTop();
            if (Math.abs(lastScrollTop - st) <= delta) return;
            if ((st > lastScrollTop) && (lastScrollTop > 0)) {
                $('nav').css({
                    'top': '-80px'
                });
            }else {
                $('nav').css({
                    'top': '0'
                });
            }
            lastScrollTop = st;
        });
        //디자인 패턴.
        //오브젝트 리터럴 패턴.
        //모듈단위로 UI 를 구성.
        var Parallax = {
            // _var: 'variable',
            // _is: false,
            init: function() {
                this.layout();
                this.reset();
                this.addEvent();
            },
            layout: function() {
                this.$win = $(window);
                this.$gallery = $('.gallery');
                this.$galleryItem = this.$gallery.find('.gallery-item');
            },
            reset: function() {
            },
            addEvent: function() {
                this.$win.on('resize', this.onResize.bind(this)).trigger('resize');
                this.$win.on('scroll', this.onScroll.bind(this)).trigger('scroll');
            },
            onResize: function(e) {
                this._winW = this.$win.width();
                this._winH = this.$win.height();
            },
            onScroll: function(e) {

                $('.desc').each( function(i){
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if( bottom_of_window > bottom_of_element ){
                        $(this).animate({'margin-top':'0px'},1000);
                    }
                }); 
                

                this._posY = this.$win.scrollTop();
                var _this = this;
                this._galleryStartY = this._winH;
                // this._galleryStartY = 0;
                $.each(this.$galleryItem, function(idx, item) {
                    var $el = $(item), startLimit = 0, endLimit = 0, opacity = 1;
                    startLimit = _this._winH * 2 * idx + _this._galleryStartY;
                    endLimit = startLimit + _this._winH * 3;
                    if(_this._posY >= startLimit && _this._posY < endLimit){
                        if(_this._posY < startLimit + _this._winH){
                            if(idx > 0) opacity = (_this._posY - startLimit) / _this._winH;
                        }else if(_this._posY >= endLimit - _this._winH){
                            // opacity = (endLimit - _this._posY) / _this._winH;
                            opacity = 1;
                        }else{
                            opacity = 1;
                        }
                    }else{
                        opacity = 0;
                        // if(idx > 0) opacity = 0;
                    }
                    TweenMax.set($el, {css: {autoAlpha: opacity}});

                    // 1
                    // 1
                    // 1 2
                    //   2
                    //   2 3
                    //     3

                    // if(idx === 0){
                        // console.log($el.offset().top);
                    // }
                    //요소의 offset().top 스크롤 Y 좌표로는 체크할 수 없다.
                    //if(condition) {
                        //해당하는 요소를 체크. - opacity 0->1 / 1 / 1->0
                    //}
                        
                },
                setTimeout(function() {
                    $('.title').css({'color':'orange'});
                }, 3000));
            }
        }
        // console.log(Parallax);
        Parallax.init();
    });
})(jQuery);