(function($){
    $(document).ready(function(){

        //Selector.
        var $win = $(window);

        var $gn = $('#global-nav');
        var $gnEl = $gn.find('a');

        var $article = $('article.content');
        var $section = $article.children('.sectionNav');
        console.log($section); //6개 반환.

        var _gnH = $gn.height();
        // console.log(_gnH);
        // var _exScroll = $win.scrollTop();
        var _exScroll = 0;

        //Event Bind.
        function addEvent() {
            //$win.on('scroll.evt1', onScroll1);
            $win.on('scroll.window', onScroll).trigger('scroll.window');
            // $win.off('scroll.window');
            $gnEl.on('click', onClickGN);
        }

        //Event Handler

        function onScroll1(e){

        }

        function onScroll(e) {
            // console.log('scroll');
            //scrolltop >현재 스크롤 y좌표.
            var posY = $win.scrollTop();

            //브라우저의 y좌표와 다른 요소들 비교?
            // jQuery.each();
            // $.each();
            // 배열의반복문.
            // $.each([el, el, el], function(index, el){
            //     each() callback 함수의 2개의 매개변수
            //     1번째 매개변수 - 원소의 순서
            //     2번째 매개변수 - 원소 값
            // })

            //스크롤이 위로 이동하는지? 아래로 이동하는지?
            if(_exScroll != undefined && posY >= 0){
                if(_exScroll < posY){
                    if(!$gn.hasClass('hide')){$gn.addClass('hide');}
                    console.log('>');
                }else{
                    if($gn.hasClass('hide')){$gn.removeClass('hide');}
                    console.log('<');
                }
            }

            $.each($section, function(idx, el) {
                var $el = $(el),
                    startY = $el.offset().top - _gnH,
                    //현재  스크롤 좌표 시작점 - 헤더 높이
                    endY = startY + $el.outerHeight(true);

                    // $el.offset() - 해당요소의 스크롤위치값. top? left?
                    // $el.offset().top  - 요소가 시작하는 지점의 위치값
                if(posY >= startY && posY < endY){
                    // console.log(idx);
                    if(!$gnEl.eq(idx).hasClass('active')){
                        $gnEl.removeClass('active');
                        $gnEl.eq(idx).addClass('active');
                    }
                }
            });
        }

        function onClickGN(e){
            e.preventDefault();
            var $el = $(e.currentTarget),
                id = $el.attr('href'), //section-1
                $section = $(id), //$('#section-1')
                posY = $section.offset().top;
            // $('html, body').stop(true).animate({scrollTop: posY}, 500);
            $('html, body').stop(true).animate({scrollTop: posY}, {duration:500, easing: 'easeInOutCubic'});
        }

        //Init.
        function init(){
            addEvent();
        }

        //Run initialize.
        init();




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
                // console.log('scroll');
                this._posY = this.$win.scrollTop();
                //console.log(_posY);
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
                        console.log($el.offset().top);
                    // }
                    //요소의 offset().top 스크롤 Y 좌표로는 체크할 수 없다.
                    //if(condition)  {
                        //해당하는 요소를 체크. - opacity 0->1 / 1 / 1->0
                    //}

                    if($el.offset().top > 2300){
                        var title345 = $('.title345');
                        var desc345 = $('.desc345');


                        TweenMax.to(title345, 2, {
                            left:0,
                            y: -370,
                            backgroundColor:"black",
                            color:"white",
                            padding: 30,
                          });

                        if($el.offset().top > 2400){
                            TweenMax.to(desc345, 2, {
                                left:0,
                                y: 150,
                                color:"black",
                              });
                        }
                    }
                });
            }
        }
        // console.log(Parallax);
        Parallax.init();
    });
})(jQuery);