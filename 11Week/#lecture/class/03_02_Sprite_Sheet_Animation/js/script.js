//jQuery Call.
(function($){
//Document Ready.
$(document).ready(function(){
    function Sprite(el, opts) {
        var _this = this;
        
        this._max = opts.max;
        this._col = opts.col;
        this._row = opts.row;
        this._imgW = opts.width;
        this._imgH = opts.height;

        this._isReverse = false;
        this._timer = 0;

        this.init = function() {
            this.layout();
            this.reset();
            this.addEvent();
            this.resetInit();
        }
        this.layout = function() {
            this.$el = $(el);
        }
        this.reset = function() {
            this._cuId = 0;
            this._itemW = this._imgW / this._col;
            this._itemH = this._imgH / this._row;
        }
        this.addEvent = function() {
            this.$el.on('mouseenter', this.onEnter.bind(this));
            this.$el.on('mouseleave', this.onLeave.bind(this));
        }
        this.resetInit = function() {
            this.updateFrame();
        }
        this.onEnter = function(e) {
            e.preventDefault();
            this.stopFrame();
            this._isReverse = false;
            this.playFrame();
        }
        this.onLeave = function(e) {
            e.preventDefault();
            this.stopFrame();
            this._isReverse = true;
            this.playFrame();
        }
        this.playFrame = function() {
            clearInterval(this._timer);
            this._timer = setInterval(this.progressFrame.bind(this), 60);
        }
        this.stopFrame = function() {
            clearInterval(this._timer);
        }
        this.progressFrame = function() {
            if (!this._isReverse) {
                this._cuId++;
            } else {
                this._cuId--;
            }
            if (this._cuId <= 0) {
                this._cuId = 0;
                if (this._isReverse) this.stopFrame();
            }
            if (this._cuId >= this._max - 1) {
                this._cuId = this._max - 1;
                if (!this._isReverse) this.stopFrame();
            }
            this.updateFrame();
        }
        this.updateFrame = function() {
            var posX = 0, posY = 0;
            posX = this._cuId % this._row * this._itemW * -1;
            posY = Math.floor(this._cuId / this._col) * this._itemH * -1;
            this.$el.css({'background-position' : posX + 'px ' + posY + 'px'});
        }
        this.init();
    }
    
    var minion = new Sprite('.minion', { max : 48, col : 7, row : 7, width : 1008, height : 1008 });
    var zootopia = new Sprite('.zootopia', { max : 12, col : 4, row : 3, width : 576, height : 432 });
});
})(jQuery);