(function($) {
    $(document).ready(function(){

        var $box = $('.box');

        //gsap.
        //GreenSock Animation Platform.

        // set();
        // to();
        // gsap.set(요소, {속성});
        // gsap.to(요소, {속성});
        
        /*
        gsap.set($box, {autoAlpha: 0});
        // visibility : hidden, opacity : 0
        // gsap.set() - $.css() 와 동일.
        gsap.to($box, {autoAlpha: 1, duration: 2, delay: 1});
        // gsap.to() - $.animate() 와 비슷.
        */

        var $box1 = $('#box-1');
        /*
        gsap.set($box1, {autoAlpha: 0, y: 100, scale: 1.2, rotation: 20});
        // y - transform : translateY(100px)
        // x - transform : translateX( ? px)
        gsap.to($box1, {autoAlpha: 1, y: 0, scale: 1.0, rotation: 0, duration: 1});
        */

        // timeline();
        // 애니메이션을 위한 초기 준비.
        var $box2 = $('#box-2'), $box3 = $('#box-3'), $box4 = $('#box-4'), $box5 = $('#box-5');
        gsap.set($box1, {autoAlpha: 0, y: 100, scale: 1.2, rotation: 20});
        gsap.set($box2, {autoAlpha: 0, x: 100, y: -100, scale: 0.8});
        gsap.set($box3, {autoAlpha: 0});
        gsap.set($box4, {autoAlpha: 0});
        gsap.set($box5, {autoAlpha: 0});
        var tl = gsap.timeline();
        // 애니메이션 타임라인 구성.
        tl.to($box1, {autoAlpha: 1, y: 0, scale: 1.0, rotation: 0,
            duration: 1, ease: Power3.easeOut});
        tl.addLabel('t2');
        // tl.addLabel('t2', '+=2.0');
        tl.to($box5, {autoAlpha: 1, duration: 2}, 't2');
        tl.to($box2, {autoAlpha: 1, x: 0, y: 0, scale: 1.0,
            duration: 1.5, ease: Back.easeIn}, 't2');
        tl.addLabel('t3', '-=0.5');
        tl.to($box4, {autoAlpha: 1, duration: 1}, 't3+=0.5');
        tl.to($box3, {autoAlpha: 1, duration: 1}, 't3-=0.5');

        
        
    });
})(jQuery);