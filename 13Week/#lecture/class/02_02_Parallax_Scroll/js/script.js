(function($){
    $(document).ready(function(){
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
                //console.log(this._posY);
                $.each(this.$galleryItem, function(idx, item) {
                    console.log(idx, item);
                    var $el = $(item), startLimit = 0, endLimit = 0;
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