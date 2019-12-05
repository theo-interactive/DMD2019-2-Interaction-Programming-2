(function ($) {
    $(document).ready(function () {
        //디자인 패턴.
        //오브젝트 리터럴 패턴.
        //모듈단위로 UI 를 구성.
        var Parallax = {
            // _var: 'variable',
            // _is: false,
            init: function () {
                this.layout();
                this.reset();
                this.addEvent();
            },
            layout: function () {
                this.$win = $(window);
                this.$gallery = $('.gallery');
                this.$galleryItem = this.$gallery.find('.gallery-item');

                this.$section1 = $('#section-1');
                this.$section1Title = this.$section1.find('.title');
                this.$section1Desc = this.$section1.find('.desc');

                this.$section2 = $('#section-2');
                this.$section2Title = this.$section2.find('.title');
                this.$section2Desc = this.$section2.find('.desc');
            },
            reset: function () {
                TweenMax.set(this.$section1Title, { css: { autoAlpha: 0, y: 40 } });
                TweenMax.set(this.$section1Desc, { css: { autoAlpha: 0, y: 100 } });

                TweenMax.set(this.$section2Title, { css: { autoAlpha: 0, y: 40 } });
                TweenMax.set(this.$section2Desc, { css: { autoAlpha: 0, y: 100 } });
                //gsap. 3

            },
            addEvent: function () {
                this.$win.on('resize', this.onResize.bind(this)).trigger('resize');
                this.$win.on('scroll', this.onScroll.bind(this)).trigger('scroll');
            },
            onResize: function (e) {
                this._winW = this.$win.width();
                this._winH = this.$win.height();
            },
            onScroll: function (e) {
                // console.log('scroll');
                this._posY = this.$win.scrollTop();
                var _this = this;


                if (this._posY >= 0) {
                    if (!this.$section1.hasClass('complete')) {
                        this.$section1.addClass('complete');
                        TweenMax.to(this.$section1Title, 0.4, { css: { autoAlpha: 1, y: 0 }, delay: 0.2 })
                        TweenMax.to(this.$section1Desc, 0.5, { css: { autoAlpha: 1, y: 0 }, delay: 0.2 })
                    }

                }


                if (this._posY > this._winH) {
                    //1번만.
                    if (!this.$section2.hasClass('complete')) {
                        this.$section2.addClass('complete');
                        TweenMax.to(this.$section2Title, 0.4, { css: { autoAlpha: 1, y: 0 }, delay: 0.2 })
                        TweenMax.to(this.$section2Desc, 0.5, { css: { autoAlpha: 1, y: 0 }, delay: 0.2 })
                    }

                }






                this._galleryStartY = this._winH;
                // this._galleryStartY = 0;
                $.each(this.$galleryItem, function (idx, item) {
                    var $el = $(item), startLimit = 0, endLimit = 0, opacity = 1;
                    startLimit = _this._winH * 2 * idx + _this._galleryStartY;
                    endLimit = startLimit + _this._winH * 3;

                    // 1차 방정식.
                    // x : y = a : b
                    // x = a * y / b;

                    // x : 내가 찾아낼 수치. ?
                    // y : 수치의 최대값. 1
                    // a : 현재의 스크롤값 (this._posY); 500
                    // b : 스크롤의 최대값 (endLimit); 1000.

                    // x = 500 * 1 / 1000;
                    // --> 0.5


                    if (_this._posY >= startLimit && _this._posY < endLimit) {
                        if (_this._posY < startLimit + _this._winH) {
                            if (idx > 0) opacity = (_this._posY - startLimit) / _this._winH;
                        } else if (_this._posY >= endLimit - _this._winH) {
                            // opacity = (endLimit - _this._posY) / _this._winH;
                            opacity = 1;
                        } else {
                            opacity = 1;
                        }
                    } else {
                        opacity = 0;
                        // if(idx > 0) opacity = 0;
                    }
                    TweenMax.set($el, { css: { autoAlpha: opacity } });

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
                });
            }
        }
        // console.log(Parallax);
        Parallax.init();
    });
})(jQuery);