(function($) {
    $(document).ready(function() {
        var $input = $('input');
        var $textarea = $('textarea');
        
        // Event Handler.
        var onKeypress = function(e) {
            //console.log('keypress', e.currentTarget, e.key, e.which);
            var $el = $(e.currentTarget);
            console.log('keypress', $el.val());
        };
        var onKeydown = function(e) {
            var $el = $(e.currentTarget);
            console.log('keydown', $el.val());
        }
        var onKeyup = function(e) {
            var $el = $(e.currentTarget);
            console.log('keyup', $el.val());
        }

        // Event Bind.
        $input.on('keypress', onKeypress);
        $input.on('keydown', onKeydown);
        $input.on('keyup', onKeyup);

        $textarea.on('keypress', onKeypress);

        // keypress, keydown
        // 키보드가 눌릴 때.
        // keypress 는 특수키에서는 이벤트가 발생되지 않음.

        // keyup
        // 키보드가 눌리고 난 후.

        // Form Events.

        // select
        // change
        var $select = $('#select-1');
        // var onSelect = function(e) {
        //     console.log('select', e);
        // }
        var onChange = function(e) {
            var $el = $(e.currentTarget);
            console.log('change', $el.val());
        }
        // $input.on('select', onSelect);
        $select.on('change', onChange);
        // Form 요소(input, textarea, select...) 의 값이 변경되었을 때 발생.

        // focus
        // blur
        // focusin
        // focusout

        var $input1 = $('#input-1');
        var $input2 = $('#input-2');
        var onFocus = function(e) {
            console.log('focus');
        }
        var onBlur = function(e) {
            console.log('blur');
        }
        $input1.on('focus', onFocus).on('blur', onBlur);

        var onFocusIn = function(e) {
            console.log('focusin');
            var $el = $(e.currentTarget);
            $el.css({'border-color' : '#000'});
        }
        var onFocusOut = function(e) {
            console.log('focusout');
            var $el = $(e.currentTarget);
            $el.css({'border-color' : '#999'});
        }
        $input2.on('focusin', onFocusIn).on('focusout', onFocusOut);
    });
})(jQuery);